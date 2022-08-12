// The input's id
const charA = document.querySelector("#charA")
const charB = document.querySelector("#charB")
   
// Textarea id
const textarea = document.querySelector("#text")
 
// Swap Btn, addEventListner when clicked
document.querySelector("#sawpBtn").addEventListener("click",() => {
  // textarea.value = the return from the doubleSwap function with inputs value as parameters
  textarea.value = doubleSwap(charA.value.toLowerCase(), charB.value.toLowerCase())
  console.log(charA.value.toLowerCase())
})

const doubleSwap = (charA, charB) => {
   // Make a copy of the textarea and store it in a newarray. So it will be possible to use the map function.
   const newArray = [...textarea.value.toLowerCase()]

   // If the map.element is equale to charA return the charB letter
   // If the map.element is equale to the charB return the charA letter
   // Else if the map.element is not equale to charA or charB return the map.element letter
   // Display all elements from the array. (with nothing between them)
   return newArray.map( e => e === charA ? charB : e === charB ? charA : e).join("")
}