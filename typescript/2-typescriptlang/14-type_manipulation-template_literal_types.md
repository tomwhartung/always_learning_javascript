
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

**Note:** the use of backticks `` ` `` and curly braces `{}` in the `hello ${World}` part of the above example
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


The following code example shows an object that we might want to write code to *"watch:"*

```javascript
const passedObject = {
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26,
};
```

In this case, writing code to *"watch"* this object entails adding a `on()` function to the base object defined above
that takes the following two arguments:

- A `string` named `eventName` that will be of the form `attributeInThePassedObject + Changed`
- A `function` named `callBack` that, when called:
  - Should be passed in a value of type `attributeInThePassedObject`
    - For example, for the `firstName` attribute the type will be `string`
    - And for the `age` attribute the type will be `number`
  - Returns `void`

The following example shows how this might work:

```javascript
const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26,
});

// makeWatchedObject has added `on` to the anonymous Object

person.on("firstNameChanged", (newValue) => {
  console.log(`firstName was changed to ${newValue}!`);
});
```

**This subsection continues on with more examples, but at this point I don't think it's worth
delving into these details unless I find the need for this type of functionality.**

**TODO"** delve into these details sometime when I might want to actually want this type of functionality,
so that I can experiment a bit and all.

## 1.2. Inference with Template Literals

The following example code builds on the idea of using declared types to create a function that can
*"watch"* the arbitrary typed fields in a base object presented in the previous subsection:

```javascript
type PropEventSource<Type> = {
    on<Key extends string & keyof Type>
        (eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void ): void;
};

declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;

const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26
});

person.on("firstNameChanged", newName => {  // (parameter) newName: string console.log(`new name is ${newName.toUpperCase()}`); });

person.on("ageChanged", newAge => {   // (parameter) newAge: number if (newAge < 0) { console.warn("warning! negative age"); }
})
```

Again, because I am just starting out with TS and anxious to get on to writing code for my Project, I cannot see a great
reason to delve into these details, which to be honest I find to be rather esoteric, at this time.

**TODO:** see the **TODO:** item in the previous subsection above, when my time and interest level permit.


# 2. Intrinsic String Manipulation Types

TS includes the following *string maniuplation types* listed below.

## 2.1. `Uppercase<StringType>`

The following example shows how you might use the `Uppercase<StringType>` *intrinsic string manipulation type:*

```javascript
type Greeting = "Hello, world"
type ShoutyGreeting = Uppercase<Greeting>    // type ShoutyGreeting = "HELLO, WORLD"

type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`
type MainID = ASCIICacheKey<"my_app">        // type MainID = "ID-MY_APP"
```

## 2.2. `Lowercase<StringType>`

The following example shows how you might use the `Lowercase<StringType>` *intrinsic string manipulation type:*

```javascript
type Greeting = "Hello, world"
type QuietGreeting = Lowercase<Greeting>   // type QuietGreeting = "hello, world"

type ASCIICacheKey<Str extends string> = `id-${Lowercase<Str>}`
type MainID = ASCIICacheKey<"MY_APP">      // type MainID = "id-my_app"
```

## 2.3. `Capitalize<StringType>`

The following example shows how you might use the `Capitalize<StringType>` *intrinsic string manipulation type:*

```javascript
type LowercaseGreeting = "hello, world";
type Greeting = Capitalize<LowercaseGreeting>;   // type Greeting = "Hello, world"
```

## 2.4. `Uncapitalize<StringType>`

The following example shows how you might use the `Uncapitalize<StringType>` *intrinsic string manipulation type:*

```javascript
type UppercaseGreeting = "HELLO WORLD";
type UncomfortableGreeting = Uncapitalize<UppercaseGreeting>;   // type UncomfortableGreeting = "hELLO WORLD"
```


