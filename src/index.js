let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  getToys()
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  toyFormContainer.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target.image.value, e.target.name.value)
  })
});

function getToys() {
fetch "http://localhost:3000/toys")
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    data.map(t => renderToy(t))
  })
const toyBox = document.getElementById('toy-collection')
toyBox.append(toyCard)

}

function renderToy(toy){
  const toyCard = `<div class="card">
  <h2>${toy.name}</h2
  <img src=${toy.image} class="toy-avatar" />
  <p>${toy.likes} </p>
  <button class="like-btn">Like <3</button>
  </div>` 

  const toyBox = document.getElementById('toy-collection')
  toyBox.innerHTML += toyCard
}

function postToy(name, url){

  fetch("http://localhost:3000/toys", {
    method: "POST"
    headers: 

  "Content-Type": "application/json",
  "Accept": "application/json"
},

body: JSON.stringify({
  "name": name,
  "image": url,
  "likes": 0
})
})

then(function(response) {
  return response.json();
})
then(function (data) {
 renderToy(data)
})
}  
