PATH  := node_modules/.bin:$(PATH)
SHELL := /usr/bin/env bash

node_modules/%:
	@npm install $*

.PHONY: serve
serve: node_modules/live-server
	@live-server
