let card = document.querySelector(".card")
let quote = document.getElementById("quote");
let btn = document.getElementById("btn");
let API = "https://api.quotable.io/random";

btn.onclick = () => {
    card.style.display = "block"
    fetch(API)
        .then(response => response.json())
        .then(data => {
            // console.log(data);   // content
            quote.textContent = `❝ ${data.content}❞` ;
        })
        .catch(() => alert("Error"));
};
