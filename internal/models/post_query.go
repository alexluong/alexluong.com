package models

import (
	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase/daos"
)

const articleTagSlug = "article"
const noteTagSlug = "note"

func PostQuery(dao *daos.Dao) *dbx.SelectQuery {
	return dao.ModelQuery(&Post{})
}

func findPostBySlugAndTagSlug(dao *daos.Dao, slug, tagSlug string) (*Post, error) {
	post := &Post{}

	err := dao.DB().
		NewQuery(`
			SELECT p.*
			FROM posts p
			JOIN json_each(p.tags) jt ON jt.value = t.id
			JOIN tags t ON jt.value = t.id
			WHERE LOWER(t.slug) = LOWER({:tagSlug})
			AND LOWER(p.slug) = LOWER({:postSlug});`,
		).
		Bind(dbx.Params{
			"tagSlug":  tagSlug,
			"postSlug": slug,
		}).
		One(post)

	if err != nil {
		return nil, err
	}

	return post, nil
}

func FindArticleBySlug(dao *daos.Dao, slug string) (*Post, error) {
	return findPostBySlugAndTagSlug(dao, slug, articleTagSlug)
}

func FindNoteBySlug(dao *daos.Dao, slug string) (*Post, error) {
	return findPostBySlugAndTagSlug(dao, slug, noteTagSlug)
}
