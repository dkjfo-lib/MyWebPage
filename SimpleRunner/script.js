var character = document.getElementById("character");
var block = document.getElementById("block");
function doJump(){
	if (character.classList != "imJump"){
		character.classList.add("imJump");
		setTimeout(function(){
			character.classList.remove("imJump");
		}, 500);
	}
}

var checkDead = setInterval(function () {
	var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	if (blockLeft<70 && blockLeft>30 &&characterTop>=130){
		block.style.animation = "none";
		block.style.display = "none";
		alert("you lose.")
	}
},10);