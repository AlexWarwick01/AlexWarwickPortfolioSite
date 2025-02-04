var ageEl = document.getElementById("age");
var javaExpEl = document.getElementById("javaExperience")
var oracleExpEl = document.getElementById("oracleDBExperience")

setInterval(() => {
	// For Age
	let time = (new Date() - new Date(960217232000)) / (1000 * 60 * 60 * 24 * 365.25); // milliseconds per year
	ageEl.innerText = time.toString().substring(0, 2);


	// For Experience in Java
	let javaExpTime = (new Date() - new Date(1562000279000)) / (1000 * 60 * 60 * 24 * 365.25); // milliseconds per year
	javaExpEl.innerText = javaExpTime.toString().substring(0, 4);
	oracleExpEl.innerText = javaExpTime.toString().substring(0, 4);
}, 50);