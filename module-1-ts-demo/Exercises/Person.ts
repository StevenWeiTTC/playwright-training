class Person {
    // Properties
    private name: string;
    private age: number;
    private email: string;

    // Constructor
    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    sayHello(): void {
        console.log("Hello I'm " + name );
    }
}