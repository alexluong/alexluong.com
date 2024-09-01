package migrations

import (
	"encoding/json"

	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase/daos"
	m "github.com/pocketbase/pocketbase/migrations"
	"github.com/pocketbase/pocketbase/models/schema"
)

func init() {
	m.Register(func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("2fvqqyh19wnel2p")
		if err != nil {
			return err
		}

		// add
		new_external := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "uaqpwxz5",
			"name": "external",
			"type": "url",
			"required": false,
			"presentable": false,
			"unique": false,
			"options": {
				"exceptDomains": null,
				"onlyDomains": null
			}
		}`), new_external); err != nil {
			return err
		}
		collection.Schema.AddField(new_external)

		return dao.SaveCollection(collection)
	}, func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("2fvqqyh19wnel2p")
		if err != nil {
			return err
		}

		// remove
		collection.Schema.RemoveField("uaqpwxz5")

		return dao.SaveCollection(collection)
	})
}
