var ageEl = document.getElementById("age");

setInterval(() => {
	let time = (new Date() - new Date(960217232000)) / (1000 * 60 * 60 * 24 * 365.25); // milliseconds per year
	ageEl.innerText = time.toString().substring(0, 6);
}, 50);