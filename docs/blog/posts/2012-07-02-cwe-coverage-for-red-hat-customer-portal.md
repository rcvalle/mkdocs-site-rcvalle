---
authors:
  - rcvalle
date: 2012-07-02
categories:
  - Security
tags:
  - cwe
  - security development lifecycle
  - vulnerability assessment
updated: 2012-07-02
---

# CWE Coverage for Red Hat Customer Portal

> [!info]
> The contents of this post are now part of the Red Hat Customer Portal as [a
> Knowledgebase article](https://access.redhat.com/articles/171613).

> [!info]
> This post was also published at
> <https://access.redhat.com/blogs/766093/posts/1975963>.

> [!info]
> This post was also published at
> [https://securityblog.redhat.com/2013/06/19/cwe-coverage-for-red-hat-customer-portal/](https://web.archive.org/web/20150918222030/https://securityblog.redhat.com/2013/06/19/cwe-coverage-for-red-hat-customer-portal/).

CWE has different views for different audiences and purposes. In the early stages of development, CWE only had one hierarchical representation, which originated the current Development Concepts View (or Development View). CWE is currently organized in two main views: Development Concepts (CWE-699), and Research Concepts (CWE-1000).

<!-- more -->

The Development View organizes weaknesses based on concepts frequently used in software development, and most of its categories and groups build upon well-known past taxonomies. However, the lack of mutually exclusiveness and the large number of categories and groups led to difficult maintenance and several inconsistencies being accidentally introduced during its evolution.

The Research View was developed to eliminate inconsistencies, identify research gaps, and easier maintenance. It is based only on weaknesses themselves and their abstractions, it has no categories, and explicitly models the relationships between weaknesses.

For the elements in the CWE coverage for Red Hat Customer Portal, we carefully selected abstractions with enough relevant information for developers to detect and mitigate its related weaknesses.

While the preferred type of weakness for CWE assignments are weakness bases, weakness classes are used in cases that there are “research gaps”, and it turns out to be difficult to make consistent CWE assignments using related weakness bases.

One notable example is the “Improper Restriction of Operations within the Bounds of a Memory Buffer (CWE-119)”, where its children clearly overlap and contain elements that are admittedly under studied and under reported, such as the “Out-of-bounds Read (CWE-125)” and its variants.

Sometimes used to identify signedness errors, another under-studied entry is “Integer Underflow (Wrap or Wraparound) (CWE-191)”, which is neither used to identify signedness errors in this coverage, nor to identify incorrect calculations leading to lesser integer values wrapping into higher integer values (or “underflows”), as we do not consider the correctness of the term “underflow”. Such errors are identified by “Incorrect Calculation (CWE-682)”, and “Integer Overflow or Wraparound (CWE-190)”—regardless if the wrapping occurs “downwards” or “upwards”.

CWE identifiers are assigned to Red Hat vulnerabilities using the present CWE coverage at the time of the vulnerability assessment. Thus, references to vulnerabilities are divided into “time slices” based on the date the vulnerability was assessed and the present CWE coverage at that time.

The present CWE coverage for Red Hat Customer Portal uses the CWE list version 2.2, is available in [CSV format](../..//assets/blog/2012/07/02/cwe-coverage-for-red-hat-customer-portal/document1.txt "CWE Coverage for Red Hat Customer Portal (CSV format)"), and also in [HTML format](../..//assets/blog/2012/07/02/cwe-coverage-for-red-hat-customer-portal/document1.html "CWE Coverage for Red Hat Customer Portal (HTML format)") emphasized in both Development and Research views using the YUI TreeView Control for easier navigation and reference.

We strongly encourage other Linux vendors to use this coverage and also engage in the CWE Compatibility and Effectiveness Program.
