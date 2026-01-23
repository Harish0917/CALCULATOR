let output = document.getElementById("input")

function DisplayBtnValues(BtnValue){
    output.value += BtnValue
}

let Clear = document.getElementById("Clear")
Clear.addEventListener("click",function(){
    output.value=" "
})

let Delete = document.getElementById("Delete")
Delete.addEventListener("click",function(){
    let userInput = output.value
    let Length = userInput.length
    output.value = userInput.slice(0,Length-1)
})

let Calculate = document.getElementById("calculate")
Calculate.addEventListener("click",function(){
    output.value = eval(output.value)
})
