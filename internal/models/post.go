package models

import (
	"github.com/pocketbase/pocketbase/models"
	"github.com/pocketbase/pocketbase/tools/types"
)

// ensures that the Post struct satisfy the models.Model interface
var _ models.Model = (*Post)(nil)

type Post struct {
	models.BaseModel

	Type      string         `db:"type" json:"type"`
	Title     string         `db:"title" json:"title"`
	Slug      string         `db:"slug" json:"slug"`
	Content   string         `db:"content" json:"content"`
	Published types.DateTime `db:"published" json:"published"`
	Updated   types.DateTime `db:"updated" json:"updated"`
	Cover     string         `db:"cover" json:"cover"`
	External  string         `db:"external" json:"external"`
}

func (m *Post) TableName() string {
	return "posts"
}
