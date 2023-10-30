//include sites to be displayed in the sandbox here
sites = ["cats", "text_mask", "parallax"];

// Get the name of the current project folder
const lastSite = window.location.search.substring(1);

// Remove the current project from the projects array
const availableSites = sites.filter((sites) => sites !== lastSite);

function randSandboxSite() {
	return "./" + availableSites[Math.floor(Math.random() * (availableSites.length - 0.1))];
}

function nextSandboxSite() {
	// get the index of the current project
	const currentIndex = availableSites.indexOf(lastSite) || 0;

	return "./" + availableSites[currentIndex + 1];
}
