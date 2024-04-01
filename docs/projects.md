---
hide:
  - footer
---

Projects
========

These are some of the projects I created:

{%- for project in projects %}
### {{ project.name }}

<aside class="mdx-font-size-small" markdown>
:material-calendar:{ title="Published" } {{ project.published.strftime("%b %-d, %Y") }}
{%- if project.updated %}
· :material-calendar-check:{ title="Updated" } {{ project.updated.strftime("%b %-d, %Y") }}
{%- endif %}
</aside>

---

{{ project.description }}

:material-download:{ title="Download" } [{{ project.filename }}]({{ project.url }})
{%- for resource in project.resources %}
· :material-link:{ title="Link" } [{{ resource.name }}]({{ resource.url }})
{%- endfor %}
{%- endfor %}
