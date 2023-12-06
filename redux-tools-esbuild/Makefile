VERSION := $(shell node -p 'require("./package.json").version')
OUT_BUILD := ./dist/v${VERSION}/
OUT_SERVE := ./www/v${VERSION}/

.PHONY: build
build: clean mkdist
	node ./esbuild.js --prod

.PHONY: dev
dev: clean mkdist
	node ./esbuild.js --dev

.PHONY: mkdist
mkdist:
	mkdir -p ${OUT_BUILD}

.PHONY: clean
clean:
	rm -rf ./dist
