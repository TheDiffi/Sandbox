//include sites to be displayed in the sandbox here
const sites = ["cats", "text_mask", "parallax", "AIPanorama"];
const iframe = document.getElementById("iframe");
let currentSite = "cats";

function setRandSite() {
	const availableSites = sites.filter((site) => site !== currentSite);
	currentSite = availableSites[Math.floor(Math.random() * (availableSites.length - 0.1))];
	iframe.setAttribute("src", "./" + currentSite);
}

function setNextSite() {
	const currentIndex = sites.indexOf(currentSite);
	currentSite = sites[(currentIndex + 1) % sites.length];
	iframe.setAttribute("src", "./" + currentSite);
}



function injectFooter(body){
	// Load the footer HTML from the "footer.html" file
	fetch("./footer.html")
	.then((response) => response.text())
	.then((html) => {
		// Append the footer HTML to the body of the page
		body.insertAdjacentHTML("beforeend", html);
	})
	.catch((error) => {
		// Handle any errors that occur while loading the footer
		console.error(error);
	});
}


setRandSite();