// prommise using .then and .catch
new Promise((res, rej) => {
    setTimeout(function () {
        let err = false;
        if (!err) {
          //passing data to then method
          res({ fName: "jai", lName: "Srivastava", age: 24 });
        } else {
          rej({ message: "Error Occured!" });
        }
      }, 1000);
})
  .then((data) => {
    console.log(data);
    //the returning data will carry towards next then
    return { fName: data.fName, lName: data.lName, age: data.age };
  })
  .then(({ fName, lName, age }) => {
    console.log(`My name is ${fName} ${lName} and I am ${age} years old.`);
  })
  .catch((err) => {
    console.log(new Error(err.message));
  })
  //it will always run wether we resolve the promise or reject it
  .finally(() => {
    console.log("its the finally function");
  });

//promise using async and await

const promise = new Promise((res, rej) => {
  setTimeout(function () {
    let err = false;
    if (!err) {
      //passing data to then method
      res({ fName: "Veeru", lName: "Srivastava", age: 24 });
    } else {
      rej({ message: "Error Occured! in this file" });
    }
  }, 1000);
});

async function result() {
  try {
    const result = await promise;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

result()

const fetch1 = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();
  console.log(data);
};
fetch1();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
