function render(document: any) {
  // No compile error whatsoever bcos we have declared our param to be of type any which means anything will pass
  // but if ds methods does not exist on 'document', d app will crash
  document.move();
  document.fly();
  document.whatEver();
}

// if we still dont know the particular type and yet we want to be safe with what we are calling, we can then use the 'unknown' type
// ds will raise error when we call properties and methods from an unknown type bcos since we say we dont know the type, we need to first check if what we want to call exist

function renderUnknown(document: unknown) {
  if (typeof document === "string") {
    document.toUpperCase();
  }
  document.move();
  document.fly();
  document.whatEver();
}
