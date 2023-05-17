install:
	sudo npm ci

lint:
	npx eslint .

test-coverage:
	npm test -- --coverage --coverageProvider=v8

test:
	npx jest

.PHONY: test