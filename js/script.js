var debugBtn = document.getElementById("debug-btn");

debugBtn.addEventListener("click", function() {
	var elements = document.querySelectorAll("*");
	for (var i = 0; i < elements.length; i++) {
		elements[i].classList.toggle("debug");
	}
});