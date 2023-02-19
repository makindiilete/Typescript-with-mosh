// With ds operator '??' we can check for null and if yes, falls to a default value

let speed: number | null = null;

let ride = {
  speed: speed !== null ? speed : 30,
  anotherSpeed : speed ?? 30 // if speed is falsy (null, undefined etc), use d number 30
};
