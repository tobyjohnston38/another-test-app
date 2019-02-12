// var goToShop = new Promise((resolve, reject) => {
//   console.log("Toby is heading to the shops!")
//   // setTimeout(() => {
//   // reject("The door was locked and Toby couldn' get out of the house")
//   resolve()
//   // }, 5000)
// })
//   .then(resolve =>
//     console.log("I bought these items!", ["toy", "bread", "coffee"])
//   )
//   .catch(errorMessage => console.error(errorMessage))
//   .then(() => console.log("now do some more stuff"))
//   .catch(errorMessage => console.error(errorMessage))

// console.log("Waiting for Toby to get back")

// function blah(a, b, ...rest) {
//   console.log(b)
//   // console.log(...rest)
// }

// blah("a")

// const asdf = {
//   a: "a",
//   b: "b",
//   c: "c"
// }

// const { a, b, c } = asdf

// console.log(a, b, c)

function blah() {
  return [1, 2, 3]
}

const [a, , c] = blah()
console.log(a, c)
