+++
title = 'Users And Permissions in Liferay'
date = 2024-05-19T15:31:05+05:30
draft = false
description = ""
image = "/images/liferay2.png"
imageBig = "/images/5b.webp"
categories = ["general", "liferay"]
authors = ["Teja P"]
avatar = "/images/avatar.jpg"
+++

# Users And Permissions

## Users

* Organizations are an entity in Liferay that can group users in a distributed hierarchy. Practically, this means that large organizations can empower and delegate Users to administer their Organizations.
* User Groups are another way to group Users to simplify administration and assigning Roles. User Groups are simple lists of Users that can have Roles assigned to them.


## Organizations

* After creating an Organization, assign a user to the Organization Owner Role. The Organization Owner can do everything that an Organization Administrator can, within the context of the assigned organization. In addition, Organization Owners can do these things:
  * Appoint other Users to be Organization Administrators
  * Appoint other Users to be Organization Owners
  * Remove the memberships of other Organization Administrators or Owners
* Organization Administrators can’t make these Role assignments and can’t manage the memberships of other Organization Administrators or Owners
* Organization Admin/Owner cant assing existing users to an organization
