// Normally d type of 'document.getElementById()' is HTMLElement | null but we can be specific on the type of HTMLElement we want to work with so we can get better code completion.
const phone = document.getElementById("phone") as HTMLInputElement;

phone.value;

//Method two : Instead of
const phoneTwo = <HTMLInputElement>document.getElementById("phone");
