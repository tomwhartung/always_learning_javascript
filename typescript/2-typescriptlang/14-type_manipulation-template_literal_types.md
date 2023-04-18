
# 14-type_manipulation-template_literal_types.md

Some notes from reading
[Template Literal Types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html).


# 1. Template Literal Types

The following example shows how *template literal types* build on TS's
[string literal types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)
and JS's
[template literal strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals):

```javascript
type World = "world";

type Greeting = `hello ${World}`;   // type Greeting = "hello world"
```

**Note:** the use of backticks `\`` and curly braces `{}` in the `hello ${World}` part of the above example
come from JS's *template literal strings.*

The following example shows the effect of using *template literal types* in unions:

```javascript
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;   // type AllLocaleIDs = "welcome_email_id" | "email_heading_id"
                                                                //                   | "footer_title_id" | "footer_sendoff_id"
```

The following example builds on the previous example and shows how the unions are *"cross multiplied:"*

```javascript
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
type Lang = "en" | "ja" | "pt";

type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;   // type LocaleMessageIDs = "en_welcome_email_id" | "en_email_heading_id"
                                                     //                       | "en_footer_title_id" | "en_footer_sendoff_id"
                                                     //                       | "ja_welcome_email_id" | "ja_email_heading_id"
                                                     //                       | "ja_footer_title_id" | "ja_footer_sendoff_id"
                                                     //                       | "pt_welcome_email_id" | "pt_email_heading_id"
                                                     //                       | "pt_footer_title_id" | "pt_footer_sendoff_id"
```

## 1.1. String Unions in Types


The following example 

```javascript
```


The following example 

```javascript
```


The following example 

```javascript
```


The following example 

```javascript
```

## 1.2. Inference with Template Literals


The following example 

```javascript
```


The following example 

```javascript
```


The following example 

```javascript
```


The following example 

```javascript
```



# 2. Intrinsic String Manipulation Types

The following example 

```javascript
```

## 2.1. `Uppercase<StringType>`

The following example 

```javascript
```

## 2.2. `Lowercase<StringType>`

The following example 

```javascript
```

## 2.3. `Capitalize<StringType>`


The following example 

```javascript
```

## 2.4. `Uncapitalize<StringType>`

The following example 

```javascript
```


