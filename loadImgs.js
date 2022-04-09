
function LoadImgs(id, folder) {
	console.log(`loading images from ${folder} into ${id}`);
	
    let element = document.getElementById(id);
    var xhr = new XMLHttpRequest();

    xhr.open("GET", folder, true);
    xhr.responseType = 'document';
    xhr.onload = () => {
        if (xhr.status === 200) {
            var elements = xhr.response.getElementsByTagName("a");
            for (x of elements) {
                if ( x.href.match(/\.(jpe?g|png|gif)$/) ) { 

                    let template = loadImgHTML(element, "imgTemplate.html", x.href);
                } 
            };
        } 
        else {
            alert('Request failed. Returned status of ' + xhr.status);
        }
    }
    xhr.send();
}

function loadImgHTML(element, filename, href){
	console.log(`loading file ${href} with template ${filename} into ${element}`);

	let xhttp;
	let file = filename;

	if (file){
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if (this.readyState == 4){
				if (this.status == 200) 
                {
                    let htmlTemplate = this.responseText;
                    let htmlFiilledTemplate = htmlTemplate.replace('somePath', href);
                    element.innerHTML += htmlFiilledTemplate;
                };
				if (this.status == 404) {element.innerHTML = "<h2>404 No page found</h2>";}
			}
		}
		xhttp.open("GET", filename, true);
		xhttp.send();
		return xhttp;
	}
}