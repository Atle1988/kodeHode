// The Enter button 
btnEl = document.querySelector("#btn-el")
// The Input !
const inputEl = document.querySelector("#input-el")


// When the "Enter" button is clicked: doThis !
btnEl.addEventListener("click", () =>{
    // Kjør addTodo function
    if ( inputEl.value.match(/^ *$/) ) return
    addToDo()
   
})

// Vis keydown = enter FRA inputen field { gogo }
inputEl.addEventListener("keydown", (e) => {
    if ( inputEl.value.match(/^ *$/) ) return
    if ( e.key != "Enter" ){return}else{addToDo()}
})

function addToDo (){
    // vis inutEl.value === true {do this}
    if ( inputEl.value ){
        //Lager li element
        const li = document.createElement("li")
        // Lager en "p"
        const toToText = document.createElement("p")
        // Teksten inni "p" skal være input.value
        toToText.textContent = inputEl.value
        // Lager en delete knapp
        const del = document.createElement("button")
        del.textContent = "Delete" 

        // apender tekst og delete knappen til listen ("li")
        li.append(toToText,del)
        // Finner ul boksen fra html'en med id "list" og appender "li"
        document.querySelector("#list").append(li)

        // gjør inputen valuen til tom igjen
        inputEl.value = ""
         // Får focus på input fielden etter "enter" clicked.
        inputEl.focus()  

        // Gir komando til delete knappen når den bler trykket på
        del.addEventListener("click", () => {
             // fjerner listen og delete knappen. delete knappen skal være appendet til "p"
            li.remove()
        })

        // Lager addEventListnener til remove all btn
        const removeBtn = document.querySelector("#remove-btn")
        removeBtn.addEventListener("click", () => {
            // Finner ALL "li" og remover()
            document.querySelectorAll("li")
            li.remove()
        })
    }
}

// Når du klikker på siden med musa eller trykker TAB så går focus til input-fielden.
window.addEventListener("click",()=>{
    inputEl.focus() 
})



