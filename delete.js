// Delete one
// fetch("http://localhost:3000/students/4", {
//   method: "DELETE",
// })
//   .then((res) => {
//     if (res.ok) console.log(res.status, res.statusText, "Deleted Successfully");
//     else console.log(res.status, "Something went wrong");
//   })
//   .catch((err) => console.log(err));

// DELETE ALL Functionality

fetch("http://localhost:3000/students")
  .then((res) => res.json())
  .then((data) => {
    for (i = 0; i < data.length; i++) {
      fetch(`http://localhost:3000/students/${data[i].id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) console.log(res.status, "Successfully Deleted All");
          else console.log(res.status, "Something went wrong");
        })
        .catch((err) => console.log(err));
    }
  })
  .catch((err) => console.log(err));
