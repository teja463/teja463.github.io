---
title: 'Vim Commands'
date: 2026-09-27T22:38:05+05:30
draft: false
description: ""
image: "/images/default.png"
categories: [ "general"]
tags: [ "general" ]
authors: ["Teja P"]
avatar: "/images/avatar.jpg"
---
# Vim Commands Cheat Sheet

## Basic Movement

| Command | Description                       |
| ------- | --------------------------------- |
| `h`     | Move left                         |
| `l`     | Move right                        |
| `j`     | Move down                         |
| `k`     | Move up                           |
| `0`     | Move to the beginning of the line |
| `$`     | Move to the end of the line       |
| `gg`    | Move to the start of the file     |
| `G`     | Move to the end of the file       |
| `35G`   | Go to line 35                     |

### Word Movement

| Command | Description                                |
| ------- | ------------------------------------------ |
| `w`     | Move to the start of the next word         |
| `e`     | Move to the end of the next word           |
| `b`     | Move to the beginning of the previous word |
| `2w`    | Move forward 2 words                       |
| `2b`    | Move backward 2 words                      |

### Line Movement

| Command | Description        |
| ------- | ------------------ |
| `10j`   | Move down 10 lines |
| `10k`   | Move up 10 lines   |


## Insert Mode

| Command | Description                                |
| ------- | ------------------------------------------ |
| `i`     | Insert before the cursor                   |
| `I`     | Insert at the beginning of the line        |
| `a`     | Append after the cursor                    |
| `A`     | Append at the end of the line              |
| `o`     | Insert a new line below the cursor         |
| `O`     | Insert a new line above the cursor         |
| `s`     | Delete the character and enter Insert mode |
| `R`     | Enter Replace mode until `Esc` is pressed  |


## Delete and Replace

| Command | Description                                     |
| ------- | ----------------------------------------------- |
| `x`     | Delete the character under the cursor           |
| `rx`    | Replace the character under the cursor with `x` |
| `dd`    | Delete the entire line                          |
| `2dd`   | Delete 2 lines                                  |

### Delete Using Operators

`d` is the **delete operator**. It can be combined with a motion.

| Command | Description              |
| ------- | ------------------------ |
| `dw`    | Delete the next word     |
| `db`    | Delete the previous word |
| `d2w`   | Delete 2 words           |


## Change

`c` is the **change operator**. It deletes the selected text and enters Insert mode.

| Command | Description                                                |
| ------- | ---------------------------------------------------------- |
| `cw`    | Delete/change the word and enter Insert mode               |
| `ce`    | Delete/change to the end of the word and enter Insert mode |
| `c$`    | Delete/change from the cursor to the end of the line       |
| `cc`    | Delete/change the entire line                              |
| `c2w`   | Delete/change 2 words                                      |


## Undo and Redo

| Command    | Description                               |
| ---------- | ----------------------------------------- |
| `u`        | Undo the last change                      |
| `U`        | Undo all changes made to the current line |
| `Ctrl + r` | Redo                                      |


## Paste

| Command | Description                   |
| ------- | ----------------------------- |
| `p`     | Paste after the cursor        |
| `P`     | Paste before/above the cursor |

> `p` and `P` can paste text that was deleted or yanked.


## Matching Parentheses

| Command | Description                                                                                    |
| ------- | ---------------------------------------------------------------------------------------------- |
| `%`     | Jump to the matching parenthesis/bracket when the cursor is on `(`, `)`, `[`, `]`, `{`, or `}` |


## Screen Navigation

| Command    | Description                   |
| ---------- | ----------------------------- |
| `Ctrl + f` | Move the screen down one page |
| `Ctrl + b` | Move the screen up one page   |
| `Ctrl + e` | Move the screen down one line |
| `Ctrl + y` | Move the screen up one line   |
| `Ctrl + g` | Display file status           |


# Vim Commands (`:`)

## Execute Shell Commands

```vim
:!ls
```

Execute a shell command from Vim.

For example:

```vim
:!ls
```

runs the `ls` command.


## Save / Write Files

```vim
:w FILE
```

Write the current file to a different filename.

### Save Selected Lines

1. Press `v` to enter Visual mode.
2. Select the lines you want.
3. Run:

```vim
:w filename
```

This saves only the selected lines to the specified file.


## Read / Retrieve Files

```vim
:r FILE
```

Read the contents of another file into the current file.

You can also execute a command and insert its output:

```vim
:r !ls
```

This executes `ls` and inserts its output into the current Vim buffer.


# Search and Replace

## Replace in the Current Line

```vim
:s/old/new/g
```

Replace all occurrences of `old` with `new` in the current line.

## Replace in a Range of Lines

```vim
:1,20s/old/new/g
```

Replace all occurrences of `old` with `new` from lines 1 through 20.

## Replace Throughout the File

```vim
:%s/old/new/g
```

Replace all occurrences of `old` with `new` in the entire file.

## Replace with Confirmation

```vim
:%s/old/new/gc
```

Replace all occurrences in the file while asking for confirmation for each replacement.

---

# Help

```vim
:help
```

Enter Vim's help system.

To get help for a specific command:

```vim
:help r
```

This opens help related to the `r` command.


## Switching Between Help and the Main File

```text
Ctrl + w, w
```

Switch between the help window and the main file window.

To close the help window:

```vim
:q
```


# Operators + Motions

One of Vim's most powerful concepts is combining an **operator** with a **motion**.

The general pattern is:

```text
[operator] [motion]
```

For example:

```vim
d2w
```

means:

* `d` → delete
* `2w` → move forward 2 words

Therefore, `d2w` means **delete 2 words**.

### Common Operators

| Operator | Meaning     |
| -------- | ----------- |
| `d`      | Delete      |
| `c`      | Change      |
| `y`      | Yank (copy) |

### Examples

```vim
dw
d2w
db
dd

cw
c2w
c$
cc
```


# Numbers + Motions

Numbers can be combined with motions to repeat them.

| Command | Description           |
| ------- | --------------------- |
| `2w`    | Move forward 2 words  |
| `2b`    | Move backward 2 words |
| `10j`   | Move down 10 lines    |
| `10k`   | Move up 10 lines      |
| `35G`   | Go to line 35         |

The general pattern is:

```text
[number] [motion]
```

For example:

```vim
10j
```

means **move down 10 lines**.

Similarly:

```vim
2w
```

means **move forward 2 words**.

