---
hide:
  - footer
---

Vulnerabilities
===============

These are some of the vulnerabilities I discovered:[^1]

{%- for vulnerability in vulnerabilities %}
### {{ vulnerability.name }}

<aside class="mdx-font-size-small" markdown>
:material-calendar:{ title="Published" } {{ vulnerability.published.strftime("%b %-d, %Y") }}
{%- if vulnerability.updated %}
· :material-calendar-check:{ title="Updated" } {{ vulnerability.updated.strftime("%b %-d, %Y") }}
{%- endif %}
</aside>

---

{{ vulnerability.description }}

:material-link:{ title="Link" } [View on MITRE CVE List](https://cve.mitre.org/cgi-bin/cvename.cgi?name={{ vulnerability.name }})
<!-- · :material-link:{ title="Link" } [View on new MITRE CVE List](https://www.cve.org/CVERecord?id={{ vulnerability.name }}) -->
{%- endfor %}

[^1]: Descriptions from [MITRE CVE List](https://www.cve.org/).
