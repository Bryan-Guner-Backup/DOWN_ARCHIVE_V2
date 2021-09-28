# Writing Standards

!!! note
    If you add, remove or change the name of a topic document, be sure
    to update the `mkdocs.yml` file `Topics` section

## Format

Each guide will follow the following template:

```text
# <Title>

## Guide Objective

summary statement

### technologies discussed

  - list of technologies used
  - optional glossary

### references
  
  - list of links

## Chapters
  - ...
  - ...
```

### Title

A short and descriptive title to refer to the topic covered in guide

### Guide Objective

A simple, clear overview of what the reader should gain by reading the guide.

- Summary of what the guide intends to cover.
- a brief list of technologies the guide focuses on

### Chapters

One or more chapters for walking the user through steps to completion.

---

## Linting

All submissions must be linted using [markdownlint by David Anson](https://github.com/DavidAnson/markdownlint)

- [CLI](https://github.com/igorshubovych/markdownlint-cli)
- [VS Code](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)

Note: There's a configuration file in the root of the repository that has some
small tweaks to the format.
