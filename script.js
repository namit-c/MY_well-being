/*Declaring variables for tab buttons and their conten*/
const tabs = document.querySelectorAll('.tab-button')
const allCont = document.querySelectorAll(".tab-content")

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const num = tab.dataset.forTab;
    allCont.forEach(cont=>{
        //console.log(cont.classList.contains("tab-content:active"))
        if(cont.classList.contains("tab-content:active") == true){
            cont.classList.remove("tab-content:active");
            cont.classList.add("tab-content");
        }
    })
    const activate = document.querySelector('.tab-content[data-tab="' + num.toString() + '"]')
    activate.className += ":active";
  })
})

/*Initial state*/
function setup(){
  document.querySelector('.tab-content[data-tab="1"]').className +=":active";
}

setup()

//Reference: https://www.freecodecamp.org/news/creating-a-bare-bones-quote-generator-with-javascript-and-html-for-absolute-beginners-5264e1725f08/

var quotes = [
  "“Mental health…is not a destination, but a process. It’s about how you drive, not where you’re going.” – Noam Shpancer, PhD",
  "“The strongest people are those who win battles we know nothing about.” - Unknown",
  "“Don’t let your struggle become your identity.” – Unknown",
  "“Life doesn’t make any sense without interdependence. We need each other, and the sooner we learn that, the better for us all.”  — Erik Erikson"
]

console.log("HERE");
function newQuote(){
  var randomIndex = Math.floor(Math.random()*(quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomIndex];
}

