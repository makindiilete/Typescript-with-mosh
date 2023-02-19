// While Union types can make an object to be one of multiple types, Intersection types makes an object to be multiple types at the same time

type Animal = {
    canBreathe : boolean;
}

type Carnivores = {
    eatsMeats : boolean
}

// A wildAnimal is an Animal and also Carnivores
type WildAnimal = Animal & Carnivores;

// So we we define a lion and we give it a type of WildAnimal, we must implement all the properties of both Animal and Carnivores
let lion : WildAnimal = {
    canBreathe: true,
    eatsMeats: true
}