//include sites to be displayed in the sandbox here
sites = ["cats", "text_mask"];

// Get the name of the current project folder
const lastSite = window.location.search.substring(1);

// Remove the current project from the projects array
const availableSites = sites.filter((sites) => sites !== lastSite);

function randSandboxSite() {
	return "./" + availableSites[Math.floor(Math.random() * (availableSites.length - 0.1))];
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