install:
	sudo npm ci

lint:
	npx eslint .

test-coverage:
	npm test -- --coverage --coverageProvider=v8

.PHONY: test