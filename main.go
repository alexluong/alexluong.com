package main

import (
	"log"
	"net/http"
	"os"
	"strings"

	"github.com/a-h/templ"
	"github.com/alexluong/alexluong.com/internal/feed"
	_ "github.com/alexluong/alexluong.com/internal/migrations"
	"github.com/alexluong/alexluong.com/internal/models"
	"github.com/alexluong/alexluong.com/internal/views"
	"github.com/labstack/echo/v5"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/plugins/migratecmd"
)

func main() {
	app := pocketbase.New()

	isLocalDev := checkIsLocalDev()

	migratecmd.MustRegister(app, app.RootCmd, migratecmd.Config{
		// enable auto creation of migration files when making collection changes in the Admin UI
		// should only be enabled during local development
		Automigrate: isLocalDev,
		Dir:         "internal/migrations",
	})

	app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		e.Router.Static("/assets", "build/assets")

		e.Router.GET("/", func(c echo.Context) error {
			props := views.IndexViewProps{
				Articles: models.ListArticle(app.Dao()),
				Notes:    models.ListNote(app.Dao()),
			}
			return render(c, http.StatusOK, views.IndexView(props))
		})

		e.Router.GET("/articles/:slug", func(c echo.Context) error {
			slug := c.PathParam("slug")
			post, err := models.RetrieveArticleBySlug(app.Dao(), slug)
			if err != nil {
				return c.JSON(http.StatusBadRequest, map[string]string{"error": "Error"})
			}
			if post.External != "" {
				return c.Redirect(http.StatusPermanentRedirect, post.External)
			}
			return render(c, http.StatusOK, views.PostView(post))
		})

		e.Router.GET("/notes/:slug", func(c echo.Context) error {
			slug := c.PathParam("slug")
			post, err := models.RetrieveNoteBySlug(app.Dao(), slug)
			if err != nil {
				return c.JSON(http.StatusBadRequest, map[string]string{"error": "Error"})
			}
			if post.External != "" {
				return c.Redirect(http.StatusPermanentRedirect, post.External)
			}
			return render(c, http.StatusOK, views.PostView(post))
		})

		e.Router.GET("/feed.xml", func(c echo.Context) error {
			posts := models.ListPost(app.Dao())
			feed := feed.New(getBaseURL(c), posts)
			xmlFeed, err := feed.ToAtom()
			if err != nil {
				return c.String(http.StatusInternalServerError, "Error generating feed")
			}
			return c.Blob(http.StatusOK, "application/xml", []byte(xmlFeed))
		})

		e.Router.GET("/feed.json", func(c echo.Context) error {
			posts := models.ListPost(app.Dao())
			feed := feed.New(getBaseURL(c), posts)
			jsonFeed, err := feed.ToJSON()
			if err != nil {
				return c.String(http.StatusInternalServerError, "Error generating feed")
			}
			return c.Blob(http.StatusOK, "application/json", []byte(jsonFeed))
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

func checkIsLocalDev() bool {
	isGoRun := strings.HasPrefix(os.Args[0], os.TempDir())
	isAirBuiltFile := strings.Contains(os.Args[0], "tmp/")
	isDevelopmentReleaseMode := os.Getenv("RELEASE_MODE") == "development"
	return isGoRun || isAirBuiltFile || isDevelopmentReleaseMode
}

func getBaseURL(c echo.Context) string {
	scheme := "http"
	if c.Request().TLS != nil {
		scheme = "https"
	}
	host := c.Request().Host
	return scheme + "://" + host
}
