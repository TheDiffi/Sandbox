const catsContainer = document.getElementById("cats-container");

var cuteness = 1;

catsContainer.addEventListener("click", function () {
	if (cuteness > 30) {
		window.location.href = "https://www.reddit.com/r/cats/";
	} else {
		document.getElementsByClassName("cat-card active")[0].className = "cat-card";
		createNewCat();
		cuteness++;
	}
});

function createNewCat() {
	//create a variable to store a random number between -10 and 10
	var randomRot = Math.floor(Math.random() * 40) - 20;
	//generate Text
	const overlayText = generateOverlayText(cuteness);
	console.log(overlayText);

	
	var cat = document.createElement("div");
	cat.className = "cat-card active";
	const newUrl = "https://cataas.com/cat?ver=" + new Date().getTime();
	cat.innerHTML =
		'<img src="' +
		newUrl +
		'" alt="Cat" class="image"> <div class="overlay"><div class="text-cat">' +
		overlayText +
		"</div></div>";
	cat.style = "transform: translate(-50%, -50%) rotate(" + randomRot + "deg);";
	catsContainer.appendChild(cat);
}

function generateOverlayText(cuteness) {
		if (cuteness > 0 && cuteness < 5) {
			return "Getting cuter...";
		} else if (cuteness > 5 && cuteness < 10) {
			return "MORE Cuteness...";
		} else if (cuteness >= 10 && cuteness < 15) {
			return "MOOOOORE CUTENESS!!!";
		} else if (cuteness >= 15) {
			return "AAAAAAAAHHHHHHHHHHHH";
		} else if (cuteness > 30) {
			return "r/Cats!";
		}

		return "CATS!";
}
