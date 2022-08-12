// Input id
const inputEl = document.querySelector("#inputEl")
// Button id
const btnEl = document.querySelector("#btn-el")
// Text id
const textId = document.querySelector("#text")

// The Sumbit Btn's eventlistner onclick
btnEl.addEventListener("click", () => {
    // When the Btn  is clicked im making a array with the value of the input
    const stringArray = [...inputEl.value]

    // Becouse iv push'ed in sting element's to the array i have to parseInt all string  to convert them to numbers
    const intArray = stringArray.map( (e) => parseInt(e))
 
    // Then i can use the reduce function to add all numbers ( remember  1+0+1 is still 2 )
    const sum = intArray.reduce( (total, num) => total + num )

    // Then I render out the total sum to the HTML
    textId.textContent = sum
})


