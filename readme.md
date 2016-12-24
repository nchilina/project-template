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
----------------------
```
git remote add origin git@github.com:nchilina/project-template.git
git push -u origin master
```
