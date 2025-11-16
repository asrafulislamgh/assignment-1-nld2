//problem 1

type FormatValue = number | string | boolean;
const formatValue = (value: FormatValue): FormatValue => {
    if (typeof value === 'string') {
        return value.toUpperCase();
    } else if (typeof value === 'number') {
        return value*10;
    } else {
        return !value;
    }
}

//problem 2

type valueType = string | any[];

const getLength = (value: valueType): number => {
    if (typeof value === "string") {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
}

//problem 3

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
