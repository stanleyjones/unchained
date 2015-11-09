SRC=./src
BIN=./node_modules/.bin
DIST=./dist

# Targets

$(DIST): clean
	mkdir $@
	@make $(DIST)/index.html
	@make $(DIST)/index.js
	@make $(DIST)/index.css

$(DIST)/index.html:
	cp $(SRC)/index.html $@

$(DIST)/index.js:
	$(BIN)/browserify $(SRC)/index.js -o $@

$(DIST)/index.css:
	cp $(SRC)/index.css $@

# Phonies

.PHONY: all clean

all: $(DIST)
	@echo "\n"

clean:
	@rm -rf $(DIST)

lint:
	$(BIN)/xo src/*.js --env=node --env=browser --plugin=react
