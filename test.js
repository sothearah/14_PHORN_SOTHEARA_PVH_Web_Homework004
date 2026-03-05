// 🔒🔒 Rest Parameter
function sum(...restPara){
  console.log(restPara);
}
sum(2, 3, 5, 6)

// 🔒🔒 Spread Operator
function multi(x, y, z){
  console.log("parameter: ",x, y, z)
  console.log(x * y)
}

let arr = [3, 4]
let obj = { 
  name: "Lyhov",
  age: 18,
  gender: "male"
}

let obj1 = { 
  name: "Makara",
  age: 20,
}

let {name:a, age} = obj1;
console.log(a, age)

Object.defineProperty(obj, "password", {
  value: "123",
  enumerable: false
})

let person = {...obj, ...obj1, ...obj}
console.log("Person: ",person)


// 🔒🔒 Destructuring
let array = ["Lyhov", "Makara", "Sathim"]
let [lyhov, ,makara] = arr;

let people = [
  { name: "lyhov", age: 18},
  { name: "makara", age: 20}
]

function updateName(people, old_name, new_name){
  console.log(people[1].name == old_name)
  // let newPeople = people.map((e) => {
  //   if(e.name == old_name){
  //     return {...e, name: new_name}
  //   }
  //   else
  //     return e;
  // })

  people.forEach((e) => {
    if(e.name == old_name){
      e.name = new_name
    }
    else
      e;
  }
  )

  console.log(people)
}

updateName(people, "makara", "sathim")
console.log(people)


console.log(lyhov, makara)

let user = {
  name: "lyhov",
  age: 18,
}

console.log(Object.entries(user))
for(let [key, value] of Object.entries(user)){
  console.log(`key: ${key}, value: ${value}`)
}

let userMap = new Map();
userMap.set("name", "Jonh");
userMap.set("age", 18);

console.log(userMap)

delay_Greeting();

function delay_Greeting() {
  setTimeout(function () {
    console.log("Hello, Ninja!");
  }, 0);
}

console.log("Start");
console.log("End");



async function myFunction() {
  return fdajfa;
}
myFunction().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
function myDisplayer(para){
	console.log(para.toString().includes("Error") ? para.message : para);
}



// 🔒🔒 Promise
const isTrue = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isTrue) {
      resolve("Data loaded successfully!");
    } else {
      reject("Connection failed!");
    }
  }, 2000);
});

console.log(promise);
promise.then((data) => console.log(data)).catch((err) => console.log(err));

const animals = [
  { name: "dog", type: "thin" },
  { name: "cat", type: "fat" },
  { name: "cow", type: "thin" },
  { name: "pig", type: "fat" },];
//* Group by type
const result = Object.groupBy(animals, ({ type }) => type != "fat" ? "thin" : "fat");
console.log("result ", result); console.log("thin", result["thin"]);


// 🔒🔒 JSON Demo
async function postMovie(params) {
  console.log(JSON.stringify(params))

  const res = await fetch(
    "https://6614c87c2fc47b4cf27cfba4.mockapi.io/movie/movi",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params), //convert javascript object to json
    },
  );
  console.log(res)
  const jsonToJavaScriptObj = await res.json();
  console.log("result: ", jsonToJavaScriptObj);
}
postMovie({ id: 16, name: "fadfa Movie" });
