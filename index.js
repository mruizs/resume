var icon = document.getElementsByClassName("icon");
var navbar = document.querySelector("div.menu div.nav-bar");
var sec1 = document.querySelector("div.nav-bar div.sec1");
var sec2 = document.querySelector("div.nav-bar div.sec2");
var sec3 = document.querySelector("div.nav-bar div.sec3");
var skills = document.getElementById("skills");
var experience = document.getElementById("experience");
var education = document.getElementById("education");

for (let i = 0; i < icon.length; i++) {
  icon[i].addEventListener("click", function() {
    if (this.classList.contains("active")) {
      this.classList.remove("active");
      navbar.classList.remove("active");
    } else {
      this.classList.add("active");
      navbar.classList.add("active");
    }
  });
}

sec1.addEventListener("click", () => {
  skills.scrollIntoView({ behavior: "smooth" });
});

sec2.addEventListener("click", () => {
  experience.scrollIntoView({ behavior: "smooth" });
});

sec3.addEventListener("click", () => {
  education.scrollIntoView({ behavior: "smooth" });
});
