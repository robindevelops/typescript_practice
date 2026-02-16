let greeting: string = "Hello"

console.log(greeting);
//funcation

function name(name: string): string {

    return `hello ${name}`;

}

const add = (a: number, b: number): number => {

    return a + b;
}

console.log(add(2, 3))

name("alyan shahid");


//Objects

function createUser({ name, email, isPaid }: { name: string; email: string; isPaid: boolean }) {
    console.log(`User: ${name}, Email: ${email}, Paid: ${isPaid}`);
}

createUser({ name: "alyan", email: "alyan@example.com", isPaid: true })


//Type Alias

type User = {
    name: string;
    email: string;
    isPaid: boolean;
}

function createUserWithType(user: User): void {
    console.log(`User: ${user.name}, Email: ${user.email}, Paid: ${user.isPaid}`);
}

createUserWithType({ name: "alyan", email: "alyan@example.com", isPaid: true })

// Array


const Fruits: string[] = []

const Vegetables: Array<string> = []

const users: User[] = [
    { name: "alyan", email: "alyan@example.com", isPaid: true },
    { name: "alyan", email: "alyan@example.com", isPaid: true },
    { name: "alyan", email: "alyan@example.com", isPaid: true },
]

console.log(users)

//Union Types

let syntax1: string[] | number[] = [1, 2, 3, 4, 5]

let sytanx2: (string | number)[] = [1, 2, 3, 4, "2"]


//Tuple

let user: [string, number, boolean] = ["alyan", 22, true]


//emums

const enum Role {
    admin = "admin",
    user = "user",
    guest = "guest"
}

const employee = {
    name: "alyan",
    email: "alyan@example.com",
    isPaid: true,
    role: Role.admin
}

console.log(employee)


//interface

interface user1 {
    name: string;
    email: string;
    isPaid: boolean;
    getcoupen(): number
}

const user1: user1 = {
    name: "alyan",
    email: "alyan@example.com",
    isPaid: true,
    getcoupen: () => {
        return 10;
    }
}






export { }
