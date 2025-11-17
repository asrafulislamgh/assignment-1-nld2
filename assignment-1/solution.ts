


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



type valueType = string | any[];

const getLength = (value: valueType): number => {
    if (typeof value === "string") {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
}



class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}




type bookType = {
    title : string;
    rating : number;
}
const filterByRating = (books: bookType[]) : bookType[] => {
    const booksAboveRatingFour = books.filter((book) => book.rating >= 4);
    return booksAboveRatingFour;
}



interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
const filterActiveUsers = (users: User[]) : User[] => {
    const activeUser = users.filter((user) => user.isActive === true);
    return activeUser;
}



interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (book: Book): string => {
    const bookDetails = `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? 'Yes' : 'No'}`;
    console.log(bookDetails);
    return bookDetails;
}



type arrayValue = number | string;
const getUniqueValues = (arr1: arrayValue[], arr2: arrayValue[]): arrayValue[] => {
    const combinedArray: arrayValue[] = [];
    for (const value of arr1) {
        combinedArray.push(value);
    }
    for (const value of arr2) {
        combinedArray.push(value);
    }

    const uniqueValues: arrayValue[] = [];
    for (const value of combinedArray) {
        let isUnique = true;
        
        for (const uniqueValue of uniqueValues) {
            if (value === uniqueValue) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            uniqueValues.push(value);
        }
    }
    return uniqueValues;
}



interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}
const calculateTotalPrice = (products: Product[]): number => {
    if (products.length === 0) {
        return 0;
    }
    let totalPrice = 0;
    products.map((product) => {
    totalPrice = totalPrice + (product.price * product.quantity) - (product.discount ? (product.price * product.quantity * product.discount/100) : 0);   
    })
    return totalPrice;
}