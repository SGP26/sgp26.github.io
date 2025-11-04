.PHONY: server upload

server:
	hugo server --openBrowser --printI18nWarnings  --disableFastRender

upload:
	hugo build --cleanDestinationDir && rsync -rP public/ pluto:/var/www/tmp/tmp/sgp26-v2/
