GitBook Sample Plugin
==============

# Gitbook plugin json-sidebar

This plugin creates a file `sidebar.json` that contains all chapters. 

No configuration options.

Sample output:

```
  [{
    "index": 0,
    "title": "User Guide",
    "introduction": true,
    "next": {
      "path": "User Guide/Getting Started/Getting_Started.md",
      "title": "Getting Started",
      "level": "1",
      "exists": true,
      "external": false,
      "introduction": false
    },
    "level": "0",
    "path": "README.md",
    "percent": 0,
    "done": true
  }, {
    "index": 1,
    "title": "Getting Started",
    "introduction": false,
    "prev": {
      "path": "README.md",
      "title": "User Guide",
      "level": "0",
      "exists": true,
      "external": false,
      "introduction": true
    },
    "level": "1",
    "path": "User Guide/Getting Started/Getting_Started.md",
    "percent": 100,
    "done": true
  }]
```
