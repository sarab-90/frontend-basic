 var myForm = document.getElementsByClassName("UserInput")[0]
 var myInput = document.getElementsByClassName("input")[0]
 var myName = document.getElementsByClassName("myName")[0]





myForm.addEventListener('submit',function (e) {
    e.preventDefault()
    console.log(e)
    myName.innerHTML = myInput.value
    myInput.value = ""
    myName.style.color = "green"
    myName.style.fontweight = "bold"
    myName.style.textAlign = "center"
})


var myForm2 = document.getElementsByClassName('sumation')[0]
var myInput1 = document.getElementById('num1')
var myInput2 = document.getElementById('num2')
var myResult = document.getElementsByClassName('result')[0]

myForm2.addEventListener('submit',function(e){
    e.preventDefault()
    console.log(e)

    myResult.innerHTML = parseInt(myInput1.value) / parseInt(myInput2.value)
    myInput1.value = ""
    myInput2.value = ""
    myResult.style.color = "green"
    myResult.style.fontweight = "bold"
    myResult.style.textAlign = "center"
    myResult.style.fontfamily = "arial"

})