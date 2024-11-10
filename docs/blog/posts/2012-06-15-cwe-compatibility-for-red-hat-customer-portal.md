---
authors:
  - rcvalle
date: 2012-06-15
categories:
  - Security
tags:
  - cwe
  - security development lifecycle
  - vulnerability assessment
updated: 2012-06-15
---

# CWE Compatibility for Red Hat Customer Portal

> [!info]
> The contents of this post are now part of the Red Hat Customer Portal as [a
> Knowledgebase article](https://access.redhat.com/articles/cwe_compatibility).

> [!info]
> This post was also published at
> <https://access.redhat.com/blogs/766093/posts/1975953>.

> [!info]
> This post was also published at
> [https://securityblog.redhat.com/2013/06/05/cwe-compatibility-for-red-hat-customer-portal/](https://web.archive.org/web/20150906121505/https://securityblog.redhat.com/2013/06/05/cwe-compatibility-for-red-hat-customer-portal/).

We are currently engaged in the CWE Compatibility and Effectiveness Program, and working towards fulfilling its requirements for using CWE in our CWE risk assessment process for working towards identifying and eliminating the most dangerous software errors and weaknesses in our products. The CWE Compatibility and Effectiveness Program is a formal review and evaluation process for declaring products and services as “CWE-Compatible” and “CWE-Effective”.

<!-- more -->

To understand how CWE identifiers are assigned to Red Hat vulnerabilities, you also need to understand some elements of CWE terminology. CWE identifiers—also known as CWE IDs or CWEs—are organized into four main types: Category, Compound Element, View, and Weakness.

* Category IDs are assigned to sets of weaknesses sharing one or more common attributes.
* Compound Element IDs are assigned to combinations of weaknesses (i.e., Composites and Named Chains—more on these later).
* View IDs are assigned to predefined perspectives with which you might look at weaknesses.
* Weakness IDs are assigned to the actual software weaknesses themselves.

Weaknesses are also organized into three main types: Class, Base, and Variant.

* Class is the most abstract type of weakness.
* Base is a more specific type of weakness that is still mostly independent of a specific resource or technology.
* Variant is a weakness specific to a particular resource, technology, or context.

Due to the diverse nature of our products, the preferred type of weakness for CWE assignments are weakness bases. Weakness classes are used in cases that there are “research gaps”, and it turns out to be difficult to make consistent CWE assignments using related weakness bases.

Weaknesses IDs are assigned to Red Hat vulnerabilities in chains. A chain is a sequence of two or more weaknesses closely linked together. Where one weakness X, can directly create the conditions necessary to cause another weakness Y, resulting in a vulnerability. In such cases, CWE refers to X as “primary” to Y, and Y as “resultant” from X.

A named chain is a noted commonly recurring chain that have received its own CWE identifier. A composite is an inclusive combination of two or more weaknesses or chains that forms another named weakness or vulnerability.

Differently from what security assessment tools do—with a few exceptions, such as integer overflows and variants—vulnerabilities are commonly named and reported as its resultant weaknesses, with little or no additional research from the reporting party. Thus, it is up to Red Hat to construct the chain backwards for properly identifying the cause of the vulnerability.

In the last post, I will present and go through the reasons behind the decisions for the elements in the CWE coverage for Red Hat Customer Portal.
