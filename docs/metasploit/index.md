---
hide:
  - footer
---

Metasploit
==========

In addition to [other contributions][1] as an [early developer and longtime
contributor][2], such as adding support for [AIX][3] and [Linux on Power][4] to
Metasploit, these are the modules I developed that are part of Metasploit:

## Auxiliary modules

{%- for module in modules %}
{%- if module.name.startswith("auxiliary/") %}
### {{ module.name }}

<aside class="mdx-font-size-small" markdown>
:material-calendar:{ title="Published" } {{ module.published.strftime("%b %-d, %Y") }}
{%- if module.updated %}
· :material-calendar-check:{ title="Updated" } {{ module.updated.strftime("%b %-d, %Y") }}
{%- endif %}
{%- if module.vulnerabilities %}
· :material-bug:{ title="Vulnerabilities" } {{ ", ".join(module.vulnerabilities) }}
{%- endif -%}
</aside>

{{ module.description }}

:material-download:{ title="Download" } [{{ module.name.split("/")[-1] }}.rb](https://github.com/rcvalle/metasploit/raw/HEAD/modules/{{ module.name }}.rb)
· :material-link:{ title="Link" } [View on Rapid7 Database](https://www.rapid7.com/db/modules/{{ module.name }})
{%- endif %}
{%- endfor %}

## Exploit modules

{%- for module in modules %}
{%- if module.name.startswith("exploit/") %}
### {{ module.name }}

<aside class="mdx-font-size-small" markdown>
:material-calendar:{ title="Published" } {{ module.published.strftime("%b %-d, %Y") }}
{%- if module.updated %}
· :material-calendar-check:{ title="Updated" } {{ module.updated.strftime("%b %-d, %Y") }}
{%- endif %}
{%- if module.vulnerabilities %}
· :material-bug:{ title="Vulnerabilities" } {{ ", ".join(module.vulnerabilities) }}
{%- endif -%}
</aside>

{{ module.description }}

:material-download:{ title="Download" } [{{ module.name.split("/")[-1] }}.rb](https://github.com/rcvalle/metasploit/raw/HEAD/modules/{{ module.name.replace("exploit/", "exploits/") }}.rb)
· :material-link:{ title="Link" } [View on Rapid7 Database](https://www.rapid7.com/db/modules/{{ module.name }})
{%- endif %}
{%- endfor %}

## Payload modules

{%- for module in modules %}
{%- if module.name.startswith("payload/") %}
### {{ module.name }}

<aside class="mdx-font-size-small" markdown>
:material-calendar:{ title="Published" } {{ module.published.strftime("%b %-d, %Y") }}
{%- if module.updated %}
· :material-calendar-check:{ title="Updated" } {{ module.updated.strftime("%b %-d, %Y") }}
{%- endif %}
{%- if module.vulnerabilities %}
· :material-bug:{ title="Vulnerabilities" } {{ ", ".join(module.vulnerabilities) }}
{%- endif -%}
</aside>

{{ module.description }}

:material-download:{ title="Download" } [{{ module.name.split("/")[-1] }}.rb](https://github.com/rcvalle/metasploit/raw/HEAD/modules/{{ module.name.replace("payload/", "payloads/singles/") }}.rb)
· :material-link:{ title="Link" } [View on Rapid7 Database](https://www.rapid7.com/db/modules/{{ module.name }})
{%- endif %}
{%- endfor %}

[1]: https://github.com/rapid7/metasploit-framework/commits?author=rcvalle
[2]: https://web.archive.org/web/20090624132218/http://www.metasploit.com/
[3]: https://github.com/rapid7/metasploit-framework/commit/c2362ec4096bebcdd434cf7abf2f2483befc994b
[4]: https://github.com/rapid7/metasploit-framework/commit/dfbf6b34a5b42c3024987e976d1728354c8d1db4
