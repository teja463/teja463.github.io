+++
title = 'Java 22 Features'
date = 2024-05-19T15:31:05+05:30
draft = false
description = ""
image = "/images/java.png"
imageBig = "/images/5b.webp"
categories = ["general", "java"]
authors = ["Teja P"]
avatar = "/images/avatar.jpg"
+++

# Java 22 Features

## Unamed variables

* Now with Java 22 we an crate unname varibles. 
* Earlier versions of java has few rules for variables like it should start with a letter, numbers not allowed as vairable names etc.
* In java 22 you can use `_` as a variable name, but you can't do any operations on it Check example below
```java
    Student _ = new Student();
```
* But you cant call any methods on that student object, for e.g you can't do like `_.getMarks()`
* Then why this was introduced if we can't use the object to do anything.
* This wil be usefull in few cases like below


### In Try Catch blocks
```java
    try{
        // some code 
    }catch(Excetption _){
        // You might want to catch the exception but you dont want to do anything
    }
```

### In forEach loop
```java
    List<Integer> numbers = List.of(1,2,3,4,5);
    numbers.forEach(_ -> System.out.println("Hi"));
```

## Running Multifile Programs without compiling

* In JDK 11 java introduced the feature to run java files directly without the compilation step.
* Before java 11 you had to do `javac Sample.java` and then to run `java Sample`.
* From JDK 11 onwards you can do it in a single step `java Sample.java` eliminating the compilation step
* But it won't work if you have any references to other classes in the `Sample.java`.
* Lets say you referring Address to an Address object in the Employe class and try to run `java Employee.java` it give compilation error because it can't find the .class file for Address class
* Now with JDK 22 you can do that.

> Before JDK 22 below code will not compile when you run `java Employee.java` since it references the Address class which is not yet compiled, but in JDK 22 it takes care of compiling and running the referenced classes also, in the example the reference classs is Address

```java
public class Employee{
	private String name;
	private Address address;
	public String getName(){
		return name;
	}
	public Employee(String name, Address address){
		this.name = name;
		this.address = address;
	}
	public static void main(String [] args){
		Address address = new Address("Telangana", "India");
		Employee emp = new Employee("Teja", address);
		System.out.println(emp.getName());
		address.getAddress();
	}
}
```