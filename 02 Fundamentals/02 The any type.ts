//Any type is a type that can accepts any type of value. For Best practise, we should avoid using it because it defeats the whole purpose of type safety

let level;
level = 1;
level = "a";

// we can declare a var or params that we do not knw its type as 'any' to fix compiler errors..
function render(document: any) {
  console.log(document);
}
