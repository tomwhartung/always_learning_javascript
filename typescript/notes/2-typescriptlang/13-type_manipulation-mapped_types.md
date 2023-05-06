
# 13-type_manipulation-mapped_types.md

Some notes from reading
[Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html).

# 0. Mapped Types

The following example shows how to create a type named `OnlyBoolsAndHorses` then use it to
create `conforms`, which contains only `boolean`s and therefore conforms to `OnlyBoolsAndHorses`:

```javascript
type OnlyBoolsAndHorses = {
  [key: string]: boolean | Horse;
};

const conforms: OnlyBoolsAndHorses = {
  del: true,
  rodney: false,
};
```

The following example shows a *mapped type* that uses `keyof` to create a union of `PropertyKeys` [sic]
in order *"to iterate through keys to create a type:"*

```javascript
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};
```

The following example shows how to create a new type `FeatureOptions` which contains members whose names
are based on the `FeatureFlags` type in this example that have types - i.e., `boolean` - based on the
`OptionFlags` type in the previous example:

```javascript
type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;    // type FeatureOptions = { darkMode: boolean; newUserProfile: boolean; }
```

# 0.1. Mapping Modifiers

The following example shows how to:

1. Create the `CreateMutable` type by using `-` to *remove* the `readonly` attribute from the keys or `Property`s in `Type`
2. Use `CreateMutable` to create a new type `UnlockedAccount` that matches `LockedAccount` except the members are *not* `readonly`

```javascript
// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;   // type UnlockedAccount = { id: string; name: string; }
```

The following example shows how to:

1. Create the `Concrete` type by using `-` to *remove* the optional `?` attribute from the keys or `Property`s in `Type`
2. Use `Concrete` to create a new type `User` that matches `MaybeUser` except the members are *not* optional `?`

```javascript
// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type User = Concrete<MaybeUser>;    // type User = { id: string; name: string; age: number; }
```


# 1. Key Remapping via `as`

The following example shows how to use `as` to re-map the keys in a mapped type:

```javascript
type MappedTypeWithNewProperties<Type> = {
    [Properties in keyof Type as NewKeyType]: Type[Properties]
}
```

The following example shows how to create a type called `Getters` then use it to create a new type named
`LazyPerson` that contains a `get*` function for each property in the `Person` interface:

```javascript
type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};

interface Person {
    name: string;
    age: number;
    location: string;
}

type LazyPerson = Getters<Person>;   // type LazyPerson = { getName: () => string; getAge: () => number; getLocation: () => string; }
```

The following example shows how to create a typed called `RemoveKindField`, then use that to create a new type named
`KindlessCircle` which matches the `Circle` interface but has only the `radius` and does *not* have the `kind`	member:

```javascript
// Remove the 'kind' property
type RemoveKindField<Type> = {
    [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
};

interface Circle {
    kind: "circle";
    radius: number;
}

type KindlessCircle = RemoveKindField<Circle>;   // type KindlessCircle = { radius: number; }
```

The following example shows how to *"map over arbitrary unions, not just unions of string | number | symbol,
but unions of any type:"*

```javascript
type EventConfig<Events extends { kind: string }> = {
    [E in Events as E["kind"]]: (event: E) => void;
}

type SquareEvent = { kind: "square", x: number, y: number };
type CircleEvent = { kind: "circle", radius: number };

type Config = EventConfig<SquareEvent | CircleEvent>   // type Config = {
                                                       //   square: (event: SquareEvent) => void;
                                                       //   circle: (event: CircleEvent) => void;
                                                       // }
```

In this case, the union of any type mentioned above is the `SquareEvent | CircleEvent` union.

Frankly, at this time I do not see how something like this could be useful!
Maybe that will change someday but still...!!

# 1.1. Further Exploration

The following example shows how to combine a *mapped type* with a *conditional type:*

```javascript
type ExtractPII<Type> = {
  [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};

type DBFields = {
  id: { format: "incrementing" };
  name: { type: string; pii: true };
};

type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;   // type ObjectsNeedingGDPRDeletion = {
                                                          //   id: false;
                                                          //   name: true;
                                                          // }
```

