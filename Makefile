SRC=./src
BIN=./node_modules/.bin
DIST=./dist

# Targets

$(DIST): clean
	mkdir $@
	@make $(DIST)/index.html
	@make $(DIST)/index.js

$(DIST)/index.html:
	cp $(SRC)/index.html $@

$(DIST)/index.js:
	$(BIN)/browserify -t babelify $(SRC)/index.js -o $@

# Phonies

.PHONY: all clean

all: $(DIST)
	@echo "\n"

clean:
	@rm -rf $(DIST)
