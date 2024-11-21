

const input = document.querySelector("#main-input")

const novoh2 = document.querySelector(".novop")

function cliqueiNoBotão(){
    alert("Botão clicado com sucesso!")
}



function digiteiNoImput(){
    console.log("Digitei no input")
}

function digiteiNoImput(){
    console.log(input.value)
}

function cliqueiNoBotão(){
    alert(input.value)
    novoh2.innerHTML = input.value
}