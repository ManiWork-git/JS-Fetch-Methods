// Get method with different APIs

// Fetch from api and display only the quotes
fetch("https://dummyjson.com/quotes")
  .then((res) => res.json())
  .then((data) => {
    for (i = 0; i < data.quotes.length; i++) {
      console.log(data.quotes[i].quote);
    }
  })
  .catch((err) => console.log(err));

/*
Fetch todos from the api and display,
todos and their completion status
*/

fetch("https://dummyjson.com/todos")
  .then((res) => res.json())
  .then((data) => {
    for (i = 0; i < data.todos.length; i++) {
      let todo = data.todos[i];
      let status = todo.completed ? "completed" : "pending";
      console.log(`Todo Name : ${todo.todo}`);
      console.log(`status : ${status}`);
    }
  })
  .catch((err) => console.log(err));

// Fetch from the api and count total pictures in it

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((res) => res.json())
  .then((data) => {
    console.log("Total Pictures : " + data.length);
  })
  .catch((err) => console.log(err));

// Fetch from the api and display pokemon details

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((res) => res.json())
  .then((data) => {
    console.log("Pokemon Details :- ");
    console.log("Name : " + data.name);
    console.log("Weight : " + data.weight);
    console.log("Abilities :-");
    for (i = 0; i < data.abilities.length; i++) {
      let abilityName = data.abilities[i].ability.name;
      console.log(`ability(${i + 1}) : ${abilityName}`);
    }
  })
  .catch((err) => console.log(err));
