package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/a-h/templ"
	"github.com/alexluong/alexluong.com/internal/models"
	"github.com/alexluong/alexluong.com/internal/views"
	"github.com/labstack/echo/v5"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
)

func main() {
	app := pocketbase.New()

	app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		e.Router.GET("/", func(c echo.Context) error {
			return render(c, http.StatusOK, views.IndexView())
		})

		e.Router.GET("/articles/:slug", func(c echo.Context) error {
			slug := c.PathParam("slug")
			article, err := models.FindArticleBySlug(app.Dao(), slug)
			if err != nil {
				fmt.Println(err)
				return c.JSON(http.StatusBadRequest, map[string]string{"error": "Error"})
			}
			return render(c, http.StatusOK, views.ArticleView(article))
		})

		return nil
	})

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}

// This custom Render replaces Echo's echo.Context.Render() with templ's templ.Component.Render().
func render(ctx echo.Context, statusCode int, t templ.Component) error {
	buf := templ.GetBuffer()
	defer templ.ReleaseBuffer(buf)

	if err := t.Render(ctx.Request().Context(), buf); err != nil {
		return err
	}

	return ctx.HTML(statusCode, buf.String())
}
