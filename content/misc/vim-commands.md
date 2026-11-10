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
## Movement

| Shortcut | Description |
|---|---|
| `h` | Move left |
| `l` | Move right |
| `j` | Move down |
| `k` | Move up |
| `0` | Move to beginning of line |
| `$` | Move to end of line |
| `gg` | Move to start of the file |
| `G` | Move to end of the file |
| `w` | Move to start of next word |
| `e` | Move to end of next word |
| `b` | Move to previous word |
| `Ctrl + f` | Move screen down one page |
| `Ctrl + b` | Move screen up one page |
| `Ctrl + e` | Move screen down one line |
| `Ctrl + y` | Move screen up one line |

## Editing

| Shortcut | Description |
|---|---|
| `i` | Insert before cursor |
| `I` | Insert at beginning of line |
| `a` | Append after cursor |
| `A` | Append at the end of line |
| `o` | Insert a new line below the cursor |
| `O` | Insert a new line above the cursor |
| `x` | Delete a character |
| `p` | Paste the deleted line or character |
| `P` | Paste above the cursor |
| `rx` | Replace character at current cursor position with `x` |
| `R` | Replace mode until `Esc` is pressed |
| `s` | Delete the character and enter insert mode |
| `u` | Undo |
| `U` | Undo all changes in the current line |
| `Ctrl + r` | Redo |

## Operators (Operator [number] motion)

| Shortcut | Description |
|---|---|
| `d` | Operator to delete |
| `c` | Operator to change words; removes the word and enters insert mode |
| `y` | Operator to copy lines |
| `d2w` | Delete two words |
| `y2w` | Copy two words |
| `c2w` | Delete two words from cursor and enter insert mode |
| `dw` | Delete next word |
| `db` | Delete previous word |
| `dd` | Delete whole line |
| `2dd` | Delete two lines |
| `ce` | Delete a word and enter insert mode |
| `c$` | Delete till end of line and enter insert mode |
| `cc` | Remove whole line and enter insert mode |
| `2w` | Move cursor two words forward |
| `2b` | Move cursor two words backward |
| `10j` | Move cursor down 10 lines |
| `10k` | Move cursor up 10 lines |
| `35G` | Go to line 35 |

## Search, Match, Replace

| Shortcut | Description |
|---|---|
| `%` | When cursor is at a parenthesis, go to the matching parenthesis |
| `:s/old/new/g` | Replace all occurrences of `old` with `new` in the current line |
| `:1,20s/old/new/g` | Replace all occurrences of `old` with `new` from lines 1 to 20 |
| `:%s/old/new/g` | Replace all occurrences of `old` with `new` in the entire file |
| `:%s/old/new/gc` | Replace all occurrences of `old` with `new` in the entire file, asking for confirmation |
| `Ctrl + g` | Display file status |

## Execute Shell Commands from Vim

| Shortcut | Description |
|---|---|
| `:!ls` | Execute a shell command by typing `!` before the command |
| `:w filename` | Write selected text to a file (select text in Visual mode first) |
| `:r filename` | Read file contents into the current file |
| `:r !ls` | Execute `ls` and insert its output into the current file |
| `:r !pwd` | Execute `pwd` and insert its output into the current file |

## Editing Multiple Files using Vim Buffers

| Shortcut | Description |
|---|---|
| `:e` <filename>` | type the file name or tab to open the file |
| `:badd <filename>` | Add a new file to the buffer list without switching to it |
| `:ls` or `:buffers` | List all open buffers with their assigned numbers |
| `:bn` or `:bnext` | Switch to the next buffer |
| `:bp` or `:bprevious` | Switch to the previous buffer |
| `:b <number>` | Jump directly to a specific buffer by its index (e.g., `:b 3`) |
| `:b! 2` | If you have modified the file and want to switch to next buffer add `!` after the command |
| `:bw` | remove current buffer |
| `:bw 2 ` | delete multiple buffer 2 |
| `:bw 2 3 4` | delete multiple buffers |
| `2 Ctrl + g` | To show buffer status |

## Vim Windows/ View Ports

| Shortcut | Description |
|---|---|
| `:split [filename] (or :sp)` | To open a file in horizontal split and add to buffer |
| `:vsplit [filename] (or :vs)` | To open a file in vertical split and add to buffer |
| `sb 2` | Open the existing 2nd file in the buffer in split |
| `vert sb 2` | Open the 2nd file in the buffer in vertical split |
| `Ctrl + w , arrow keys or hjkl` | To navigate between split screens |
| `Ctrl + w w` | To navigate between all buffers |
| `Ctrl + w r` | To reverse the order of windows |
| `Ctrl + w +/-` | To increase/decrease horizontal split window size  |
| `Ctrl + w >/<` | To increase/decrease vertical split window size  |
| `Ctrl + w =` | To resize the window equally |
| `10 Ctrl + w +,-,>,<` | To increase/decrease the horizontal/vertical window by 10 lines |
| `:resize [N] ` | Set current split height explicitly to N lines |
| `:vert resize [N] ` | Set current split width explicitly to N columns |
| `close` | To close the split window, but file stays in the buffer |
| `only` |  Close everything else except the active split |