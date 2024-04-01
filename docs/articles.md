---
hide:
  - footer
---

Articles
========

These are some of the articles I authored:

{%- for article in articles %}
### {{ article.name }}

<aside class="mdx-font-size-small" markdown>
:material-calendar:{ title="Published" } {{ article.published.strftime("%b %-d, %Y") }}
{%- if article.updated %}
· :material-calendar-check:{ title="Updated" } {{ article.updated.strftime("%b %-d, %Y") }}
{%- endif %}
</aside>

---

{{ article.description }}

:material-download:{ title="Download" } [{{ article.filename }}]({{ article.url }})
{%- for resource in article.resources %}
· :material-link:{ title="Link" } [{{ resource.name }}]({{ resource.url }})
{%- endfor %}
{%- endfor %}
