+++
title = 'Indexes in database'
date = 2024-05-19T15:31:05+05:30
draft = false
description = ""
image = "/images/database.png"
imageBig = "/images/5b.webp"
categories = ["general", "database"]
authors = ["Teja P"]
avatar = "/images/avatar.jpg"
+++

# Indexes in database

* Indexes help to retrieve the data faster. It is because database does not have to scan the whole database to retrieve the data, normally this searching is done linearly i.e row by row, so if you are retrieving a 100th record it has to read all the 99 rows before that
* If you create a index for the columns which you query frequently it will create a separate table for the key value pair where key is the column value and value is a pointer to that recrod
* Now database does not have to scan all the rows it can just read that pointer and go to that record

## Clustered Index
A clustered index is an index that specifies the physical arrangement of a database's table records. There can only be one clustered index per table since there can only be one method that records are physically maintained in a database table. It stores the records in sorted order.

## Non-Clustered Index
A non-clustered index is an index that doesn't specify the physical arrangement of the records maintained in the database’s table. The Non-Clustered Indexes are stored in a different table. Therefore, as they are maintained in a different table, there can be numerous non-clustered indexes that can be created for a single table.

[Cluster vs Non Cluster Index](https://www.scaler.com/topics/clustered-and-non-clustered-index/)
