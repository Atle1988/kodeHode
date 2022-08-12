//  <-----------------------------------------> The Function's for the Code <----------------------------------------->
// The array with pepole fact's store in a object
const people = [
    {
      name: "Thomas",
      male: true,
      age: 23,
      hobbies: ["cycling", "football", "pool"],
    },
    {
      name: "Susan",
      male: false,
      age: 26,
      hobbies: ["jogging", "travelling", "dancing", "movies", "coffee"],
    },
    {
      name: "Monica",
      male: false,
      age: 21,
      hobbies: ["skateboarding", "guitar", "concerts"],
    },
    {
      name: "Avery",
      male: true,
      age: 28,
      hobbies: ["coding", "games", "memes", "electronics"],
    },
    {
      name: "Phillip",
      male: true,
      age: 24,
      hobbies: ["boxing", "wrestling", "mma", "gym"],
    },
    {
      name: "Chris",
      male: true,
      age: 20,
      hobbies: ["cycling", "football", "pool", "tv"],
    },
    {
      name: "Claire",
      male: false,
      age: 27,
      hobbies: ["jogging", "travelling"],
    },
    {
      name: "Stephanie",
      male: false,
      age: 26,
      hobbies: ["writing", "piano", "books", "opera"],
    },
    {
      name: "Herman",
      male: true,
      age: 31,
      hobbies: ["gym", "weights"],
    },
    {
      name: "Trevor",
      male: true,
      age: 19,
      hobbies: ["parkour"],
    },
  ];
  
  // Task 1
  const filteredPeople = people.filter( (e) => {
    // destructing the map element's
    const {hobbies, age} = e
    // if the age is 26 or heigher but less or equale to 28 and the person have 3 or more hobbies? return the person fact's to the filteredPeople variable
    return age >= 26 && age <= 28 && hobbies.length >= 3 
  });   
  console.log(filteredPeople)

  //Task 2
  const filteredPeople2 = people.filter( (e) => {
    // destructing the map element's
    const {name, male} = e;
    // if the persons name have exact 6 letter, and it is a male. Return the persons fact to the filteredPeople2 variable
    return name.length === 6 && male 
  })
  console.log(filteredPeople2)

  // Task 3
  const filteredPeople3 = people.filter( (e) => {
    // destructing the map element's
    const {hobbies} = e;
    // if the person have gym as a hobbie. return all the fact to the filteredPeople3 variable
    return hobbies.includes("gym") 
  }) 
  console.log( filteredPeople3 )
   
//  <-----------------------------------------> The Code for displaying it to the HTML <----------------------------------------->

  // The textarea id for displaying my function's
  const textarea = document.querySelector("#textarea")

  // Onclick addventListner for pepole with 3 hobbies and in age of 26 to 28  ( Task 1 )
  document.querySelector("#radio-age").addEventListener("click", () => {
    textarea.textContent = filteredPeople.map( e => `Name: ${e.name}${'\n'} Age: ${e.age}${'\n'} Hobbies: ${e.hobbies}${'\n'}`).join("\n")
  })

  // Onclick addventListner for man with name length of 6 letters ( Task 2 )
  document.querySelector("#manWithSixLetters").addEventListener("click", () => {
    textarea.textContent = filteredPeople2.map( e => `Name: ${e.name}${'\n'}`).join("\n")
  })

  // Onclick addventListner for pepole that have "gym" as a hobbie ( Task 3 )
  document.querySelector("#gym").addEventListener("click", () => {
    textarea.textContent = filteredPeople3.map( e => `Name: ${e.name}${'\n'} Hobbie: ${e.hobbies}${'\n'}`).join("\n")
  })

  // theArray
  function theArray(){
    textarea.textContent = people.map( e => `Name: ${e.name}${'\n'} Age: ${e.age}${'\n'}  Male: ${e.male}${'\n'} Hobbies: ${e.hobbies}${'\n'}`).join("\n")
   
  }