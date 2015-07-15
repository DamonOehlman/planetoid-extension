app:
	@mkdir -p dist
	@cp src/index.html dist/
	@cp src/manifest.json dist/
	@cp -R src/icons/ dist/
	@browserify src/main.js > dist/main.js
	@browserify src/background.js > dist/background.js

clean:
	@rm -rf dist/