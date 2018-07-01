## App Structure (within src)

* assets
  * img
* components (reusable components)
* views (pages App.js will render)

## Troubleshooting

### ESLint

* if need to disable ESLint on a line place this comment after line
    ```eslint-disable-line no-unused-vars```
* if lots of problems with ESLint on certain file place filename inside the *.eslintignore* file
* more help found at *https://georgespake.com/blog/eslint/*. This ESLint config based off the article