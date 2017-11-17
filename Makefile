docker-build:
	docker build . -t smash-front

docker-kill:
	docker kill smash-front-01

docker-rm:
	docker rm smash-front-01

docker-run:
	docker run -d -p 3001:3001 --name smash-front-01 smash-front

docker-restart:
	$(MAKE) docker-build
	$(MAKE) docker-kill
	$(MAKE) docker-rm
	$(MAKE) docker-run

run-local:
	npm start
