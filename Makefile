.PHONY: server upload

server:
	hugo mod get
	hugo server --openBrowser --printI18nWarnings  --disableFastRender

upload:
	hugo mod get
	hugo build --cleanDestinationDir && rsync -rP public/ pluto:/var/www/tmp/tmp/sgp26-v3/
