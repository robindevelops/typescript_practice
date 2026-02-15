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

// ✅ Method 1: Inline Object Type (for function parameters)
function createUser({ name, email, isPaid }: { name: string; email: string; isPaid: boolean }) {
    console.log(`User: ${name}, Email: ${email}, Paid: ${isPaid}`);
}

createUser({ name: "alyan", email: "alyan@example.com", isPaid: true })



//
export { }
