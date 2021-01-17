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