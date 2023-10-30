let slideshow = document.getElementById("slideshow");

window.onmousedown = function (e) {
	let startX = e.clientX;
	let lastPos = parseFloat(slideshow.dataset.lastPos);
    let newPos = lastPos;

	window.onmousemove = function (e) {
		let deltaX = e.clientX - startX;
		let relativeMove = (deltaX / window.innerWidth) * 100;
		newPos = Math.max(Math.min(lastPos + relativeMove * 1.7, 100), -100);

		//slideshow.style.left = newPos + "%";
        console.log(newPos);
		slideshow.animate(
			{
				left: newPos + "%",
			},
			{ duration: 800, fill: "forwards", easing: "ease-out" }
		);

		for (const image of slideshow.getElementsByClassName("image")) {
			image.style.objectPosition = (newPos + 100) / 2 + "% 50%";
			/* slideshow.animate(
				{
					objectPosition: (newPos + 100) / 2 + "% 50%",
				},
				{ duration: 800, fill: "forwards", easing: "ease-out" }
			); */
		}
	};

	window.onmouseup = function () {
		window.onmousemove = null;
		window.onmouseup = null;

        slideshow.dataset.lastPos = newPos || 50;
	};
};
