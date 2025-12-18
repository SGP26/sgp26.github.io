.PHONY: server build

server:
	#hugo mod get
	hugo server --openBrowser --printI18nWarnings  --disableFastRender

build:
	#hugo mod get
	hugo build --cleanDestinationDir
