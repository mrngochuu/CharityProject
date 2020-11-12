function showMenu() {
	var menu = document.getElementById("menu");
	var content = document.getElementById("content");

	if(content.className == "col-lg-9") {
		menu.style.display = "none";
		content.className = "col-lg-12";
	} else {
		menu.style.display = "block";
		content.className = "col-lg-9"
	}
}


function readMore() {
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("myBtn");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "đọc thêm";
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "ẩn";
	  moreText.style.display = "inline";
	}
  }
