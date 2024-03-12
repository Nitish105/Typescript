"use strict";
// let num1 = 1;
// function calculate(num1: number, num2: number) {
//     return num1 + num2;
// }
// console.log(calculate(num1, 52));
//example 2
// function getTotal(numbers: Array <number>){
//     return numbers.reduce((acc, item) => {
//         return acc + item;
//     }, 0) 
// }
// console.log(getTotal([1, 2, 6]));
//example 3
// const user = {
//     firstName: "Nitish",
//     lastName: "Kumar",
//     role: "engineer"
// }
// console.log(user.firstName);
//Type alias <= custom alias
//custom type
// type User = {
//     name: string;
//     age: number;
//     address?: string;
// }
// const user: User  = {
//     name: "raj",
//     age: 28,
//     address: 'main street'
// }
// function login(userData: User): User {
//     return userData;
// }
// const user  = {
//     name: "raj",
//     age: 28,
//     address: 'main street'
// }
// console.log(login(user));
// type ID = number | string;
// const user: ID = '123';
//----> Interfaces-----------------
//creation of interface
//example 1
// interface Transaction {
//     senderAccountNumber: number;
//     receiverAccountNumber: number;
// }
// interface BankAccount {
//     accountNumber: number;
//     accountHolder: string;
//     balance: number;
//     isActive: boolean;
//     transactions: Transaction[];
// }
// const transaction1: Transaction = {
//     senderAccountNumber: 44447569566388,
//     receiverAccountNumber: 55556675695645
// }
// const transaction2: Transaction = {
//     senderAccountNumber: 44447569566388,
//     receiverAccountNumber: 55556675695645
// }
// const bankAccount: BankAccount = {
//     accountNumber: 44447569566388,
//     accountHolder: "Krishna Acharya",
//     balance: 4000000,
//     isActive: true,
//     transactions: [transaction1, transaction2]
// }
// example 2 : How two interfaces using extends keyword in typescript
/*
interface Book {
    name: string;
    price: number;
}

interface EBook  extends Book{
    // name: string;
    // price: number;
    fileSize: number;
    format: string;
}

interface AudioBook extends EBook{
    // name: string;
    // price: number;
    // fileSize: number;
    // format: string;
    duration: number;
}


const book: AudioBook = {
    name: 'The Atomic Habits',
    price: 1999,
    fileSize: 300,
    format: 'pdf',
    duration: 5
}

*/
// Example 3 - How to merge  multiple interface into one using the & keyword.
// interface Book {
//     name: string;
//     price: number;
// }
// interface Book {
//     size: number;
// }
// const book: Book = {
//     name: "Atomic habits",
//     price: 599,
//     size: 45
// }
//example 4
// type SanitizedString = string;
// type EvenNumber = number;
// interface  SanitizedString extends string {
// }
//---> Unions in typescript
// example 1
// type ID = number | string; // this means that the id can be a number or string
// function printId(id: ID) {
//     if(typeof id === 'string'){  // this is called narrowing
//         console.log(id.toUpperCase())
//     }else {
//         console.log(id);
//     }
// }
// printId('1')
//example 2
// function getFirstThree(x: string | number[]) {
//     return x.slice(0,3);
// }
// // console.log(getFirstThree('hello'));
// console.log(getFirstThree([1,2,3,4]));
//----> ----------- Generics in Typescript------------
// function logString(arg: string) {
//     console.log(arg);
//     return arg;
// }
// function logNumber(arg: number){
//     console.log(arg);
//     return arg; 
// }
// function logArray(arr: any) {
//     console.log(arr);
//     return arr;
// }
// with generics
// function logString(arg: string) {
//     console.log(arg);
//     return arg;
// }
// function logNumber(arg: number){
//     console.log(arg);
//     return arg;
// }
// function logArray(arr: any[]) {
//     console.log(arr);
//     return arr;
// }
// -> generic usages
//eg
// function logAnything<T>(arr: T): T {
//     console.log(arr);
//     return arr;
// }
// logString('logged in');
// logNumber(1);
// logArray(["Hello", "World", 5]);
// logAnything([1, 2])
// logAnything(['logged in']);
//example 2
// interface HasAge {
//     age: number;
// }
// function getOldest<T extends HasAge>(people: T[]): T {
//     return people.sort((a, b) => a.age - b.age)[0];
// }
// const people: HasAge[] = [{ age: 30 }, { age: 45 }, { age: 80 }]
// getOldest(people); //{age: 80}
// getOldest(people).age; //80
// interface Player {
//     name: string;
//     age: number;
// }
// const players: Player[] = [
//     { name: 'John', age: 30 }, 
//     { name: 'Rocky', age: 45 }, 
//     { name: 'Veer', age: 80 }
// ];
// //Assertion
// // const person = getOldest(players) as Player; // as -> assertion :- it is used to forcefully use
// // person.name; // Veer
// //using generics
// const person = getOldest(people);
// person.age; 
// example 3
// real life scenerio
/*
interface IPost {
    title: string;
    id: number;
    description: string;
}

const fetchPostData = async (path: string): Promise<IPost[]> => {
    const response =  await fetch(`http://www.google.com${path}`);
    return response.json();
}


interface IUser {
    id: number;
    name: string;
    age: number;
}

const fetchUserData = async (path: string): Promise<IUser[]> => {
    const response =  await fetch(`http://www.google.com${path}`);
    return response.json();
}



//using Generics
const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
    const response = await fetch(`http:www.google.com/api${path}`);
    return response.json();
}

// IIFE Function or anonymous function
( async () => {
    // const posts = await fetchPostData('/posts');

    // const users = await fetchUserData('/users');

    const genericUsers = await fetchData<IUser[]>('/genericUsers');
    // genericUsers[0].

})()

*/
//-------> Structural  Typing / Duck Typing ----
// TypeScript  is a superset of JavaScript and uses structural typing, which means that the position of properties  
// Example 1
/*
interface ICredential {
    username: string;
    password: string;
    isAdmin?: boolean;
}


function login(credential: ICredential): boolean{
    console.log(credential);
    return true;
}

const user: ICredential = {
    username: 'John',
    password: 'John123',
    isAdmin: true
};

login(user);
*/
//example 2
// interface IAuth {
//     username: string;
//     password: string;
//     login(username: string, password: string): boolean;
// }
// const auth = {
//     username: 'Johnny',
//     password: 'Johnny123',
//     login(username: string, password: string) {
//         return true;
//     }
// }
//inference  - the type of variable can be inferred from its value (if it has a type annotation). 
// let x = "Hello"; //x is now known to be a string
// let num = 1;
