"""Mkdocs-macros module."""

import hashlib

def define_env(env):
    """Hook for defining filters, macros, and variables."""

    @env.filter
    def md5sum(string):
        """Returns the MD5 hash of a string."""
        m = hashlib.md5()
        m.update(string.encode())
        return m.hexdigest()
