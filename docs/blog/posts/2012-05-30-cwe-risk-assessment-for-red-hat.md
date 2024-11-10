---
authors:
  - rcvalle
date: 2012-05-30
categories:
  - Security
tags:
  - cwe
  - security development lifecycle
  - vulnerability assessment
updated: 2012-05-30
---

# CWE Risk Assessment for Red Hat

> [!info]
> This post was also published at
> <https://access.redhat.com/blogs/766093/posts/1975943>.

> [!info]
> This post was also published at
> [https://securityblog.redhat.com/2013/05/22/outside-in-vulnerability-assessment-for-secure-software-development/](https://web.archive.org/web/20160331234640/https://securityblog.redhat.com/2013/05/22/outside-in-vulnerability-assessment-for-secure-software-development/).

CWE risk assessment is a process for identifying and eliminating some of the most dangerous and potentially exploitable weaknesses in your existing products and projects.

Some well-known secure software development methodologies have their security practices grouped into phases, from training to response. However, you may have your main product already within the response phase, where its development may not have been done practicing a secure software development methodology. This is often the case for open source software vendors, where training upstream developers for development of its own software is not always viable. This is where the CWE risk assessment can help.

<!-- more -->

Even if you are not an open source software vendor and have in-house development of your software, CWE risk assessment can complement any approach your team may be practicing for software development. Sometimes it’s not possible to withdraw your product from the market, educate your developers, and start the development of your product from scratch, nor can you do this for the next version of your product. You need to respond to whatever problem is identified in your product immediately.

Red Hat has a team dedicated to vulnerability assessment, the Red Hat Security Response Team, which uses [CVE identifiers](https://www.redhat.com/security/transparent/cve/) and [CVSS scores](https://access.redhat.com/security/updates/classification/) for identifying, coordinating, and prioritizing the correction of the vulnerabilities identified and reported in its products. The Red Hat Security Response Team will also use a common taxonomy for classifying, quantifying, and ranking the weaknesses that resulted in those vulnerabilities, which can also be understood by developers, and preferably also supported by security assessment tools. The language chosen by the Red Hat Product Security Team is the [Common Weakness Enumeration (CWE).](http://cwe.mitre.org/)

In this first phase, we started assigning CWE identifiers, chains, and composites, to past, current, and future Red Hat vulnerabilities with a CVSS v2 score higher than or equal to 7. Periodically, after classifying, quantifying, and ranking those weaknesses, we plan to direct our efforts into dealing with those weaknesses in our products as part of our assessment services, knowledge repositories, software development practices, and education offerings.

This approach is different from what some companies practice for software development, where CWE identifiers are used to track the issues that they have addressed during development of their software. The CWE risk assessment streamlines the efforts directly on recurring weaknesses resulting from programming practices that tend to recur often.

In the next posts, I will go through the Red Hat engagement for CWE compatibility, how CWE identifiers are assigned to Red Hat vulnerabilities, and the reasons behind the decisions for the elements in the CWE subset chosen for the CWE risk assessment.
