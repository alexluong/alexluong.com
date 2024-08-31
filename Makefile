dev:
	go run main.go serve

live/templ:
	templ generate --watch --open-browser=false

live/server:
	air \
	--build.cmd "go build -o tmp/main" --build.bin "tmp/main serve" --build.delay "100" \
	--build.exclude_dir "node_modules" \
	--build.include_ext "go"

live/tailwind:
	./bin/tailwindcss/macos-arm64 -i ./web/styles.css -o ./build/assets/styles.css --minify --watch

live:
	make -j3 live/templ live/server live/tailwind

release:
	./scripts/release.sh

up:
	./scripts/up.sh

down:
	./scripts/down.sh
