---
title: 'Redis Basic Commands'
date: 2025-04-25T19:24:00+05:30
draft: false
description: ""
image: "/images/java.png"
categories: ["java", "database"]
tags: ["java", "redis"]
authors: ["Teja P"]
avatar: "/images/avatar.jpg"
---


## Basic Commands

* To enter Redis execute redis-cli in cmd
* To add data `set key value` e.g. `set name Teja`
* To get data `get key` e.g. `get name`
* To Delete data `del key` e.g. `del name`
* To check if key exists `EXISTS key` e.g. `exists name`
* To get all keys `KEYS pattern` e.g. `KEYS *`
* To delete all keys `flushall`

## Cache Expiry

* To check the expiry of the key `ttl key`
* When you set key the expiry value is set to -1 and it never expires
* To make a key expire `expire key seconds to live` e.g. `expire NAME 100`
* If you want to set expiry when creating the key itself `setex key secods to live value` e.g. `setex name 20 test`


## Data types

### Strings

* When you set a value using the SET keyword it is always going to be saved as Strings

### List

* If you want to store a list of items you can use `lpush key value` to create a list and push the values to start
* `rpush` to insert values at the end `lpop`, `rpop` to remove values at start and at the end
* To list all values in a list `lrange key start end` e.g. `lrange fruits 0 -1`

### Set

* To create and add values to a set `sadd key value` e.g. `sadd subs maths`
* To Delete an entry `srem key value` e.g. `srem subs maths`
* To list all values in a set `smembers key` e.g. `smembers subs`

### Map

* `hset person name teja` to create a map called person and insert a value into a map
* `hget person name`
* `hgetall person`
* `hdel person name`
* `hexists person name`
