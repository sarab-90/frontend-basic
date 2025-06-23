function ClickToMove(){
    var BoxMovement = document.getElementById("BoxMovement")

    if (BoxMovement.style.left =="0px"){
        BoxMovement.style.left = "10px"
        return
    }
    else{
        BoxMovement.style.left = "0px"
    }
}