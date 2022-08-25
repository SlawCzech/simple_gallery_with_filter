
const picsRef = document.querySelectorAll("#gallery img");
const hideRef = document.querySelector("#hideButton");
const showRef = document.querySelector("#showButton");
const inputRef = document.querySelector("input");

hideRef.addEventListener("click", function(){
    let inputValue = inputRef.value;
    inputRef.value = "";
    picsRef.forEach(item => {
        const datasets = item.dataset;
        let index = item.dataset.tag.indexOf(inputValue);
        if (index > -1){item.classList.add("invisible")}
    })
});

showRef.addEventListener("click", function(){
    let inputValue = inputRef.value;
    inputRef.value = "";
    picsRef.forEach(item => {
        const datasets = item.dataset;
        let index = item.dataset.tag.indexOf(inputValue);
        if (index > -1){item.classList.remove("invisible")}
    })
});