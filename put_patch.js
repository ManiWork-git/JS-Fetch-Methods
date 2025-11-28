//PUT
// Entire object is replaces as is!
let options3 = {
  method: "PUT",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    id: 4,
    name: "Vivek",
  }),
};

fetch("http://localhost:3000/students/4", options3)
  .then((res) => {
    if (res.ok) console.log(res.status, res.statusText);
    else console.log(res.status, "Something went wrong");
  })
  .catch((err) => console.log(err));

//PATCH
// only intended fields are updated

let options4 = {
  method: "PATCH",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    age: 23,
  }),
};

fetch("http://localhost:3000/students/4", options4)
  .then((res) => {
    if (res.ok) console.log(res.status, res.statusText);
    else console.log(res.status, "Something went wrong");
  })
  .catch((err) => console.log(err));
