interface IPerson {
    name: string;
    age: number;
    email: string;
    sayHello(): void;
}

class Person implements IPerson {

    // Properties
    name: string;
    age: number;
    email: string;

    // Constructor
    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    sayHello(): void {
        console.log("Hello " + name)};
    }

    const person = new Person("Steven", 18, "test@email.com");
    const person1 = new Person("Bob", 19, "test1@email.com");
    const person2 = new Person("Mary", 20, "test2@email.com");

    person.sayHello();
    person1.sayHello();
    person2.sayHello();

