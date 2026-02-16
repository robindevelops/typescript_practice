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

export { }
