+++
title = 'Regular Expressions in Python'
date = 2024-05-19T15:31:05+05:30
draft = false
description = ""
image = "/images/python.png"
imageBig = "/images/5b.webp"
categories = ["general", "python"]
authors = ["Teja P"]
avatar = "/images/avatar.jpg"
+++


# Regular Expressions in Python


* To use regular expressions in python you need to `import re` module
* Regular expressions are used for pattern matching

## Simple Match
* Searches for the given pattern in that string and return True or False
* If you want to ignore case you can use re.I 
```python
# Simple matching
string = input("Enter a String: ")

if (re.search('Python', string)): # search for python in string
    print ("Python satisfied")
else:
    print ("Python not satisfied")

if (re.search('python', string, re.I)): # search for pyhton in string ignroe case
    print ("python satisfied")
else:
    print ("python satisfied")
```

## Anchors
* `^` Represents starts with
* `$` Represents ends with

```python
if (re.search("^python", string)): # Matches string if python is at the start of the sentence
    print ("^python satisfied")
else:
    print ("^python not satisfied")

if (re.search("python$", string)): # Matches string if python at the end of the sentence
    print ("python$ satisfied")
else:
    print ("python$ not satisfied")

if (re.search("^python$", string)): # Matches if input should be only the word python
    print ("^python$ satisfied")
else:
    print ("^python$ not satisfied")
```
## Range of Characters
* `[0-9]` => Matches single digit
* `[a-z]` => Matches single lowercase alphabet
* `[A-Z]` => Matches single uppercase alphabet
* `[a-zA-Z]` => Matches any single alphabet
* `[0-9a-zA-Z]` => Matches single alphanumeric

```python
if (re.search("[0-9][a-z][A-Z]", string)): # Matches string anywhere in the sentence which has a three letter word whoose first lette ris num , 2nd small char, 3rd caps char
    print ("[0-9][a-z][A-Z] satisfied")
else:
    print ("[0-9][a-z][A-Z] not satisfied")

if (re.search("^[0-9][a-z][A-Z]$", string)): # input should exactly be a three letter word whoose first lette ris num , 2nd small char, 3rd caps char
    print ("^[0-9][a-z][A-Z]$ satisfied")
else:
    print ("^[0-9][a-z][A-Z]$ not satisfied")
```

## Meta characters
* `+` Matches one or more occurrences of the previous character
* `*` Matches zero or more occurrences of the previous character
* `?` Matches zero or one occurrence of the previous character
```python
  if (re.search("^ab+c$", string)): # between a nd c atleast one b should be present
    print ("^ab+c$ - satisfied")
  else:
    print ("^ab+c$ - not satisfied")

  if (re.search("^ab*c$", string)): # between a nd c zero or more b's should be present
    print ("^ab*c$ - satisfied")
  else:
    print ("^ab*c$ - not satisfied")

  if (re.search("^ab?c$", string)): # between a nd c zero or one b should be present
    print ("^ab?c$ - satisfied")
  else:
    print ("^ab?c$ - not satisfied")
```

## Quantifiers
* `{m}` Matches exactly 'm' occurrences of the previous character
* `{m,n}` Matches minimum 'm' and maximum 'n' occurrences of the previous character

```python
if (re.search("^ab{3}c$", string)): # only three b's should be present between a and c
    print ("^ab{3}c$ - satisfied")
  else:
    print ("^ab{3}c$ - not satisfied")

  if (re.search("^ab{1,3}c$", string)):# minimum one and maximum three b's should be present between a and c
    print ("^ab{1,3}c$ - satisfied")
  else:
    print ("^ab{1,3}c$ - not satisfied")
```

## DOT Character
* `.` Matches any single character

```python
if (re.search("^a.c$", string)): # Any single character can be present between a and c
  print ("^a.c$ - satisfied")
else:
  print ("^a.c$ - not satisfied")

if (re.search("^a.*c$", string)): # Any number of characters can be present between a and c
  print ("^a.*c$ - satisfied")
else:
  print ("^a.*c$ - not satisfied")
```

## Grouping
* If you want to operate on a group of character you can enclose them in `()`
```python
# Groupings
if (re.search("^(ab){3}c$", string)): # valid for abababc
  print ("^(ab){3}c$ - satisfied")
else:
  print ("^(ab){3}c$ - not satisfied")
```

## Character Range Escape Sequences
* \d => [0-9] -> Matches single digit
* \D => [^0-9] -> Matches single other than digit
* \w => [0-9a-zA-Z_]
* \W => [^0-9a-zA-Z_]
* \s => Spaces and Tabs
* \S => Other than Spaces and Tabs

## Choices and Alternatives
* [abc] => Matches any one of 'a', 'b' and 'c'
* [^abc] => Matches other than 'a', 'b' and 'c'

```python
if (re.search("^a[123]c$", string)):
  print ("^a[123]c$ - satisfied")
else:
  print ("^a[123]c$ - not satisfied")

if (re.search("^a[^123]c$", string)):
  print ("^a[^123]c$ - satisfied")
else:
  print ("^a[^123]c$ - not satisfied")
```

## Difference between search and match
* Search looks for the pattern anywhere in the given string and matches it
* Match looks for the pattern only at the begining of the string

```python
if (re.search("\d{3}", string)):
  print ("Search - Satisfied")
else:
  print ("Search - Not Satisfied")

if (re.match("\d{3}", string)):
  print ("Match - Satisfied")
else:
  print ("Match - Not Satisfied")
```

## Findall
* Returns all the values that are matched with the pattern in the form of list

```python
all_matched = re.findall("\d{3}", string)
print (all_matched, '->', type(all_matched))

```

## Split
* Splits the string based on that pattern
* See `regex_demo.py` in the code repository detailed for examples

```python
spt_str = re.split("\d{3}", string)
print (spt_str, '->', type(spt_str))
```

## Sub
* Substitutes the pattern with the 555 in the given string

```python
rep_str = re.sub("\d{3}", "555", string)
print (rep_str, '->', type(rep_str))
```

