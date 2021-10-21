# useStorage

Two simple React hooks for using browser storage.

## Install

```
npm install @jasonsbarr/use-storage
```

## Usage

The only difference between the two hooks is whether you're using localStorage or sessionStorage. The APIs are exactly the same.

```js
import { useLocalStorage } from "@jasonsbarr/use-storage";
```

- `use(Local|Session)Storage(key[, defaultValue = {}, deserializer = null]);`

The initial call to `useLocalStorage` returns an array pair containing the JSON parsed item for `key`, or just a string if the value is a simple string, as well as a function to update the value for `key`. If there is no value in storage for `key`, you can pass in a default initial value as the second argument to `useLocalStorage`.

```js
const [value, setValue] = useLocalStorage("key", "default value");
```

Passing a new value to the setter function will update the value for `key` in storage and in your application.

```js
setValue("new value");
```

If the value you pass to the setter function is a string, it will pass through into browser storage untouched. This lets you use custom serializers as long as you convert the data to a string before passing it to the setter. Any non-string values will have `JSON.stringify` called on them before saving them to storage. You can pass a custom deserializer function as the third argument to `useLocalStorage`.

```js
const [value, setValue] = useLocalStorage(
  "key",
  "default value",
  customDeserializerFunction
);
```
