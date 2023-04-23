//include sites to be displayed in the sandbox here
sites = ["cats", "text_mask"];

// Get the name of the current project folder
const lastSite = window.location.search.substring(1);

// Remove the current project from the projects array
const availableSites = sites.filter((sites) => sites !== lastSite);

function randSandboxSite() {
	return "./" + availableSites[Math.floor(Math.random() * (availableSites.length - 0.1))];
}
