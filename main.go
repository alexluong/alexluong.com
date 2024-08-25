package main

import (
	"log"
	"net/http"

	"github.com/labstack/echo/v5"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
)

func main() {
	app := pocketbase.New()

	app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		e.Router.GET("/", func(c echo.Context) error {
			return c.JSON(http.StatusOK, map[string]string{"hello": "world"})
		})

		return nil
	})

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
