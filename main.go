package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"strings"

	"github.com/a-h/templ"
	"github.com/alexluong/alexluong.com/internal/models"
	"github.com/alexluong/alexluong.com/internal/views"
	"github.com/labstack/echo/v5"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
)

func main() {
	app := pocketbase.New()

	isGoRun := strings.HasPrefix(os.Args[0], os.TempDir())
	isDevelopmentReleaseMode := os.Getenv("RELEASE_MODE") == "development"
	isDevelopment := isGoRun || isDevelopmentReleaseMode
	fmt.Println(isGoRun, isDevelopmentReleaseMode, isDevelopment)

	app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		e.Router.Static("/assets", "build/assets")

		e.Router.GET("/", func(c echo.Context) error {
			return render(c, http.StatusOK, views.IndexView())
		})

		e.Router.GET("/articles/:slug", func(c echo.Context) error {
			slug := c.PathParam("slug")
			post, err := models.FindArticleBySlug(app.Dao(), slug)
			if err != nil {
				return c.JSON(http.StatusBadRequest, map[string]string{"error": "Error"})
			}
			return render(c, http.StatusOK, views.PostView(post))
		})

		e.Router.GET("/notes/:slug", func(c echo.Context) error {
			slug := c.PathParam("slug")
			post, err := models.FindNoteBySlug(app.Dao(), slug)
			if err != nil {
				return c.JSON(http.StatusBadRequest, map[string]string{"error": "Error"})
			}
			return render(c, http.StatusOK, views.PostView(post))
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
