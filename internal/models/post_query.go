package models

import (
	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase/daos"
)

const articleType = "article"
const noteType = "note"

func PostQuery(dao *daos.Dao) *dbx.SelectQuery {
	return dao.ModelQuery(&Post{})
}

func retrievePostBySlugAndType(dao *daos.Dao, slug, postType string) (*Post, error) {
	post := &Post{}

	err := dao.DB().
		NewQuery(`
			SELECT * FROM posts WHERE slug = {:slug} AND type = {:postType}`,
		).
		Bind(dbx.Params{
			"slug":     slug,
			"postType": postType,
		}).
		One(post)

	if err != nil {
		return nil, err
	}

	return post, nil
}

func RetrieveArticleBySlug(dao *daos.Dao, slug string) (*Post, error) {
	return retrievePostBySlugAndType(dao, slug, articleType)
}

func RetrieveNoteBySlug(dao *daos.Dao, slug string) (*Post, error) {
	return retrievePostBySlugAndType(dao, slug, noteType)
}
