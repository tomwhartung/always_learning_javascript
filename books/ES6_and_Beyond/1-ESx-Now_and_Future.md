
# Chapter 1: ES? Now & Future

### Versioning

* JS is evolving rapidly and it is better to see it as an evergreen, living standard.

* Some browser vendors support new features even before they are standardized.

Specific versions:

* ES4 was never finalized.

* ES5 is the first widespread baseline for JS and is the standard for older browsers.

* ES6 was finalized in June 2015 but support is incomplete.  It is also known as ES2015.

* ES7 was finalized in June 2016 and the tendency is to move towards a year-based naming schema.

### Transpiling - Tooling

Translate and compile ES6/ES2015 code to be compatible with ES5.

Done at build time, with linting and minification, etc.

### Shims and Polyfills

Example: test for existence of a function, such as:
```
Objecct.is()
```
and if it does not exist, define it.

