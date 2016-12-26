Project Setup
=============

Start Terminal
```bash
mkdir ProjectName
cd ProjectName
git init 
npm init

```
npm init creates `package.json` file. It is OK to press "Enter" to all questions.

Project Configuration Files
---------------------------
`.gitignore` creates list of file that are ignored by Git
```
node_modules
dist
.idea
```
 
 `.editorconfig` creates list of settings for code editing http://editorconfig.org/
```
root = true
 
[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

Git Set Up
----------

`git add --all` to add all files to Git
or `git add file1 file2 file3..`

then ` git commit -m "...comment..."`

Login to GitHub and create repository for the project 'Project-Template' then follow instructions from GitHub.
```
git remote add origin git@github.com:nchilina/project-template.git
git push -u origin master
```

Directories structure
---------------------
```
.
├── package.json
├── readme.md
└── src
    ├── app
    │   ├── main.html
    │   ├── main.spec.js
    │   └── main.js
    ├── index.html
    ├── index.css
    ├── index.spec.js
    ├── index.js
    └── routes.js
```

Dependencies
------------

Application dependencies
```bash
npm install --save angular
```

Dev dependencies
```bash
npm install --save-dev browser-sync webpack

```

`package.json` after dependencies installation

```json
{
  "name": "project-template",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "angular": "^1.6.1"
  },
  "devDependencies": {
    "browser-sync": "^2.18.5",
    "webpack": "^1.14.0"
  }
}
```
Webpack set up
--------------
http://webpack.github.io/docs/usage.html

Create `webpack.config.js` file.
Put inside:
```json
module.exports={
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'index.bundle.js'
  }
};
```

Browser-sync set up
-------------------
https://browsersync.io/

https://browsersync.io/docs/options

Create `bs-config.js` file.

Put inside:
```json
module.exports = {
  "files": "src/index.html, src/index.css, dist/**",
  "server": ["dist", "src"]
};
```

to start:
```
browser-sync start -c bs-config.js
```


NPM scripts
-----------

add to `package.json`:
```json
{
  "scripts": {
    "script": "webpack",
    "serve": "browser-sync start -c bs-config.js",
    "clean": "rm -rf dist"
  }
}
```

