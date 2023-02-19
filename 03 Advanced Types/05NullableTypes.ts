const greet = (name : string) => {
    console.log(name.toUpperCase())
}

greet(null) // ds will not raise compile error in javascript but will crash the app because U cannot call toUpperCase() on null

// We can make d function accept string or null or undefine and the conditionally validate d passed arg b4 we do something
const greet2 = (name: string | null | undefined) => {
if (name) console.log(name.toUpperCase())
    else console.log('Holla')
}

greet2(null);
