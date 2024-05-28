---
title: 'Hugo Basics'
date: 2024-05-22T22:27:58+05:30
draft: false
description: ""
image: "/images/hugo.png"
categories: ["hugo"]
tags: ["hugo", "static site"]
authors: ["Teja P"]
avatar: "/images/avatar.jpg"
---

	
<!-- # Hugo Basics -->

## Create a site

`hugo new site sitename`

## Start a server

`hugo server`
* To see draft files also use `hugo server -D`

## adding a theme

* execute `git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke` in bash inside your new site folder
* edit hugo.toml and add this in new line `theme: "ananke"`

## Adding content

* Execute `hugo new content posts/my-first-post.md`, this will create a empty post
* By default the newly created posts using aboe command will be in draft mode
* When you run `hugo server` it doesnt show draft posts, if you want to show draft posts also use `hugo server -D`


## To build

`hugo`
* copy public folder to your hosting site