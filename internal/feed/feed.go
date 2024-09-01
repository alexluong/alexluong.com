package feed

import (
	"time"

	"github.com/alexluong/alexluong.com/internal/models"
	"github.com/gorilla/feeds"
)

func New(baseURL string, posts []*models.Post) *feeds.Feed {
	now := time.Now()

	feed := &feeds.Feed{
		Title:    "Alex Luong's Website",
		Subtitle: "Welcome to my website, where I write about my projects and share my learnings as a software developer.",
		Link:     &feeds.Link{Href: baseURL},
		Author:   &feeds.Author{Name: "Alex Luong", Email: "alex@alexluong.com"},
		Created:  now,
	}

	feed.Items = []*feeds.Item{}

	for _, post := range posts {
		feed.Items = append(feed.Items, &feeds.Item{
			Title:       post.Title,
			Link:        &feeds.Link{Href: baseURL + getSlugPrefixByType(post.Type) + post.Slug},
			Description: post.Content,
			Created:     post.Published.Time(),
			Updated:     post.Updated.Time(),
		})
	}

	return feed
}

func getSlugPrefixByType(postType string) string {
	switch postType {
	case "article":
		return "/articles/"
	case "note":
		return "/notes/"
	default:
		return ""
	}
}
