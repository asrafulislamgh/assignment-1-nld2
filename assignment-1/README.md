Blog-1

# TypeScript এ  `interface` ও  `type` মধ্যে কিছু পার্থক্য:

TypeScript এ `interface` ও `type` দুটোই ডাটা এর গঠন ও টাইপ নির্ধারণ করার জন্য ব্যবহৃত হয়। এদের মধ্যে অনেক মিল থাকলেও কিছু বিশেষ পার্থক্য বিদ্যমান। নিচে সেগুলোর একটি সামগ্রিক ধারণা দেওয়া হলো।

## 1. Syntax
**Interface:** তৈরী করার জন্য interface keyword দিয়ে তার নাম দেয়া হয় আর {} মধ্যে প্রপার্টি বসে।

```ts
  interface Book {
      name: string;
      author: number;
  }

**Type:** তৈরী করার জন্য type keyword দিয়ে তার নাম দেয়া হয় আর = {} মধ্যে প্রপার্টি বসে।

```ts
  type Book = {
      name: string;
      author: number;
  }

## 2. Declaration / Definition
**Interface:** দিয়ে Object Structure, Function এবং class এর shape define করার জন্য ব্যবহৃত হয়।

```ts
  interface Person {
      name: string;
      age: number;
  }

**Interface:** object, primitive, union, tuple, function সব define করা যায়।

```ts
type ID = number | string;
type Person = { name: string; age: number };


## 3. Extending
**Interface:** এ অন্য একটি Interface extend করার জন্য ব্যবহার করা হয়।

```ts
interface Car {
    name: string;
}

interface Toyota extends Car {
    speed: string;
}


**Type:** এ অন্য একটি Type extend করার জন্য intersection & ব্যবহার করা হয়।

```ts
type Car = {
    name: string;
}

type Toyota = Car & {
    speed: string;
}

## 4. Merging
**Interface:** একই নামে multiple interface declare করলে auto merge হয়ে যায়।

```ts
interface Person {
    name: string;
}
interface Person {
    age: number;
}
// Result: { name: string; age: number }

**Type:** একই নামে type declare করলে Merge হয় না, error হয়।




Blog-2

# TypeScript এ `keyof` Keyword এর কাজ কি?

TypeScript-এর একটি গুরুত্বপূর্ণ অপারেটর `keyof`। এই keyword ব্যবহৃত হয় **কোনো object type-এর key গুলোর union type বের করার জন্য**। 

ধরা যাক আপনার কাছে একটি Object আছে। সেই Object-এর যতগুলো `key` আছে, `keyof` সেগুলোর নামগুলোকে TypeScript-এর type বানিয়ে দেয়।

## উদাহরণ

```ts
interface Person {
    name: string;
    age: number;
    city: string;
}

type PersonKeys = keyof Person;
// keyof Person -> "name" | "age" | "city"

function getProperty(obj: Person, key: PersonKeys) {
    return obj[key];
}

const person: Person = { name: "Asraful", age: 30, city: "Dhaka" };

// শুধুমাত্র বৈধ key ব্যবহার করা যাবে
console.log(getProperty(person, "name")); // Asraful
console.log(getProperty(person, "age"));  // 30

// এটা কাজ করবে না কারণ "country" নামের কোনো key নেই
// console.log(getProperty(person, "country")); 


## ব্যবহারিক গুরুত্ব

Object-এর প্রপার্টি dynamic ভাবে access করার সময় type safety রাখে।
শুধুমাত্র valid keys ব্যবহার নিশ্চিত করে।
Generic functions তৈরিতে সাহায্য করে।