# brunel Project

**Please note this project has been moved to this repo as its repo is inaccessible to users outside of the academic institution it was created under, therefore it will lack the relevant commit logs.**
**Additionally note this was a group project and I do not take credit for any back-end development. As a result I have listed attributions below.**

- Josh Haywood (Front-end, documentation) - https://www.joshhaywood-portfolio.com/
- Yordan Hristov (Back-end, documentation) - https://www.dantcho.com/
- Danny Daley (Front end, documentation) - https://dannydaley.co.uk

This project is a website based around the Brunel project hosted at Kresen Kernow (Redruth Cornwall) highlighting the work of Brunel and Victorian era photography.
Created for the photography department of Falmouth University by web development students.

## Contents

- [brunel Project](#brunel-project)
  - [Contents](#contents)
  - [Main Features](#main-features)
  - [Repository Layout](#repository-layout)
    - [Main](#main)
    - [Application](#application)
    - [Documentation](#documentation)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [User Guide](#user-guide)
  - [Commit Message Key](#commit-message-key)


## Main Features

The main target features of the project are: 
- Index page with a brief description of the sites features and Brunel.
- Camera page where uses can access via arduino a live stream of a Victorian era camera to take pictures.
- Background history of the camera used, Brunel and any additional background information.

## Repository Layout

### Main

This branch contains:

- Project builds.
- License.
- Readme file.

### Application

This branch contains:

- All application related source code both front-end and back-end.

### Documentation

This branch contains or may contain:

- Wireframes
- Site theme
- Site font
- Referencing for assets
- Application Documentation
- User study's
- Performance metrics

## Installation

### Prerequisites

- Node Package Manager [Nodejs](https://nodejs.org/en/download/)
- File manager (File explorer recommended for windows users.)
- Web browser (Google Chrome is recommended.)
- Integrated Development Environment (IDE) (Visual Studio Code is recommended (https://code.visualstudio.com/download))
- Command Line Interface (CLI) (Git Bash is recommended (https://git-scm.com/downloads))

** Optional **

- Repository Browser (Recommended GitHub desktop (https://desktop.github.com/))

### User Guide

1. Firstly if you have downloaded the optional repository browser clone the repository and pull.
If you haven’t downloaded the repository browser download a zip folder from the repository under 'code' tab then the 'code' dropdown button then click download zip.
Then extract the folder somewhere in your files.

2. If you are using an IDE open the entire project folder in the IDE. If you aren’t skip to the next step.

3. Within the project folder open your CLI by navigating to where you have stored the project folder.

4. Enter the following into your CLI. (This was done using GitBash and therefore commands might differ.)

`$ npm install`

`$ npm run dev` for React's development mode.

or 

`$ react-scripts build`
`$ serve -s build` for Reacts's production mode.

5. Finally enter the local URL (http:localhost:3000) into your web browser.

## Commit Message Key

** If any words used in the commit log used before the content of the message are unfamiliar refer to this key **

- feat: A feature that has been added.
- fix: Bug fix.
- docs: Changes relating to documentation.
- style: Formatting, missing code, white space (This doesn't apply to CSS.)
- refactor: Maintainability or a functions method has been altered.
- dep: Dependencies added to the project.
- del: Deleted or removed unused code, files or other assets.
