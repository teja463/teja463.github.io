---
title: 'Importing a certificate into JDK'
date: 2024-10-02T21:41:05+05:30
draft: false
description: ""
image: "/images/java.png"
categories: ["java"]
tags: ["java"]
authors: ["Teja P"]
avatar: "/images/avatar.jpg"
---

* Keytool is located in JDK root directore/bin
* Goto  `C:\Program Files\Java\jdk1.8.0_202\jre\lib\security`
* Password for keytool is changeit
* `keytool -list -v -keystore cacerts > c:\Temp\certs.txt`
* If Java home is not set you can directly goto JDK installation folder and point to the location where the cacerts file exists

### Listing certificate

`C:\Program Files\Java\jdk-17> .\bin\keytool.exe -list -v -keystore .\lib\security\cacerts > c:\Temp\certs.txt`

### Importing certificate

`C:\Program Files\Java\jdk-17>.\bin\keytool -import -alias ts1-dev -keystore .\lib\security\cacerts -file c:\Temp\sample.cer`
