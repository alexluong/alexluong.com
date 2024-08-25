package models

import (
	"strings"

	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase/daos"
)

func ArticleQuery(dao *daos.Dao) *dbx.SelectQuery {
	return dao.ModelQuery(&Post{})
}

func FindArticleBySlug(dao *daos.Dao, slug string) (*Post, error) {
	article := &Post{}

	err := ArticleQuery(dao).
		// case insensitive match
		AndWhere(dbx.NewExp("LOWER(slug)={:slug}", dbx.Params{
			"slug": strings.ToLower(slug),
		})).
		Limit(1).
		One(article)

	if err != nil {
		return nil, err
	}

	return article, nil
}

func FindLast10Articles(dao *daos.Dao, slug string) ([]*Post, error) {
	articles := []*Post{}

	err := ArticleQuery(dao).
		Limit(10).
		OrderBy("published desc").
		All(&articles)

	if err != nil {
		return nil, err
	}

	return articles, nil
}
