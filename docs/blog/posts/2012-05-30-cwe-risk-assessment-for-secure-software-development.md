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

# CWE Risk Assessment for Secure Software Development

CWE risk assessment for secure software development is a process for identifying and eliminating the most dangerous and potentially exploitable weaknesses in your products. Making your product achieving broad early adoption, positive reviews, and becoming reference on the industry not only for delivering what your clients need, but also for delivering it with an outstanding level of security.

<!-- more -->

The Security Development Lifecycle (SDL) is a proven secure software development process consisting of security practices grouped into phases, from training to response. However, you may have your main product already within the response phase, where its development was not done practicing SDLC or any other secure software development methodology. This is mostly true for open source software vendors (i.e., Linux vendors), where training upstream developers for development of its own software is not always viable. This is where CWE risk assessment can help.

Even if you are not an open source software vendor and have in-house development of your software, CWE risk assessment complements any approach your team may be practicing for software development. You can not afford to withdrawn your product from the market, educate your developers, and start the development of your product from the scratch, nor you can do this for the next version of your product. You need to respond to whatever problem is identified in your product, immediately.

Currently, we have a team dedicated to vulnerability assessment, the Red Hat Security Response Team, which uses CVE identifiers and CVSS scores for identifying, coordinating, and prioritizing the correction of the vulnerabilities identified and reported in our products. In the future, the Red Hat Security Response Team will also use a common taxonomy for classifying, quantifying, and ranking the weaknesses that resulted in those vulnerabilities, which can also be understood by developers, and preferable also supported by security assessment tools. The language chosen by the Red Hat Product Security Team is the [Common Weakness Enumeration (CWE).](http://cwe.mitre.org/)

In this first phase, we started assigning CWE identifiers, chains, and composites—more on this later—to past, current, and future Red Hat vulnerabilities with a CVSS v2 score higher than or equal to 7. Periodically, after classifying, quantifying, and ranking these weaknesses, we direct all our efforts into dealing with these weaknesses in our products as part of our assessment services, knowledge repositories, software development practices, and education offerings.

This approach is different from what other companies practice for software development, where CWE identifiers are used to track the issues that they have addressed during development of their software. The CWE risk assessment streamlines the efforts directly on recurring weaknesses resulting from programming practices that, consequently, tend to recur often.

In the next posts, I will go through the Red Hat engagement for CWE compatibility, how CWE identifiers are assigned to Red Hat vulnerabilities, and the reasons behind the decisions for the elements in the CWE subset chosen for the outside-in vulnerability assessment.
