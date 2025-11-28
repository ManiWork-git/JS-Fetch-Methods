// POST Method
let options = {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    id: 1,
    name: "Sharon",
    age: 23,
  }),
};
fetch("http://localhost:3000/students", options)
  .then((res) => {
    if (res.ok) {
      console.log(res.status, res.statusText);
      console.log(
        "New Student " + JSON.parse(options.body).name + " has been added"
      );
    } else {
      console.log(res.status + " something went wrong");
    }
  })
  .catch((err) => console.log(err));

// //POST ALL

const newStudents = [
  {
    id: 2,
    name: "Roshan",
    age: 23,
  },
  {
    id: 3,
    name: "Harshith",
    age: 24,
  },
  {
    id: 4,
    name: "Sankeerth",
    age: 23,
  },
];

let options2 = {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
};

for (i = 0; i < newStudents.length; i++) {
  let body = newStudents[i];
  options2.body = JSON.stringify(body);
  fetch(`http://localhost:3000/students/`, options2)
    .then((res) => {
      if (res.ok) console.log(res.status, res.statusText);
      else console.log(res.status, "Something went wrong");
    })
    .catch((err) => console.log(err));
}
