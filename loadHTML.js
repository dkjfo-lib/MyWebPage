function loadHTML(id, filename){
	console.log(`loading file ${filename} into ${id}`);

	let xhttp;
	let element = document.getElementById(id);
	let file = filename;

	if (file){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if (this.readyState == 4){
				if (this.status == 200) {element.innerHTML = this.responseText;}
				if (this.status == 404) {element.innerHTML = "<h2>404 No page found</h2>";}
			}
		}
		xhttp.open("GET", filename, true);
		xhttp.send();
	}
}