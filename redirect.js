//include sites to be displayed in the sandbox here
sites = ["cats", "text_mask"]
function randSandboxSite() {
    return "./" + sites[Math.floor(Math.random() * sites.length)];
}