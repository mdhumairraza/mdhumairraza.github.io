
let logo = document.querySelector(".logo");
logo.addEventListener("mouseover", () => {
  "H" == logo.innerHTML ? (logo.innerHTML = "R") : (logo.innerHTML = "H");
});
let scroll =
  window.requestAnimationFrame ||
  function (e) {
    window.setTimeout(e, 1e3 / 60);
  },
  elementToShow = document.querySelectorAll(".show_on_scroll");
function loop() {
  elementToShow.forEach((e) => {
    isElementInViewport(e)
      ? e.classList.add("is_visible")
      : e.classList.remove("is_visible");
  }),
    scroll(loop);
}
function isElementInViewport(e) {
  var t = e.getBoundingClientRect();
  return (
    t.top <= 0 ||
    (t.bottom >= window.innerHeight && t.top <= window.innerHeight) ||
    (t.top >= 0 && t.bottom <= window.innerHeight + 10)
  );
}
loop();
let cardContainer = document.querySelector(".right_section"),
  linkedin = document.querySelector(".linkedin"),
  linked_profile = document.querySelector(".linkedin .profile_section"),
  linkedin_profile_i = document.querySelector(
    ".linkedin .profile_section img"
  ),
  linked_profile_img = document.querySelector(".linkedin>img"),
  github_profile = document.querySelector(".github .profile_section"),
  github_profile_i = document.querySelector(".github .profile_section img"),
  github_profile_img = document.querySelector(".github>img"),
  github_stats = document.querySelector(".github .stats_section"),
  linkedin_stats = document.querySelector(".linkedin .stats_section"),
  github = document.querySelector(".github"),
  linkedinTag = document.querySelector(
    ".hero_section .container .linkedin .tag"
  ),
  githubTag = document.querySelector(
    ".hero_section .container .github .tag"
  ),
  hoverIcon = document.querySelector(
    ".hero_section .container .hover_icon"
  );
linkedin.addEventListener("mouseover", () => {
  (linkedin.style.flexBasis = "90%"),
    (linkedin.style.zIndex = "2"),
    (github.style.zIndex = "1"),
    (linkedin_profile_i.style.transform = "translateY(-120px)"),
    (linkedin_stats.style.transform = "translateY(0px)"),
    (linked_profile_img.style.top = "0px"),
    (github.style.flexBasis = "10%"),
    (github_profile_i.style.transform = "translateY(220px)"),
    (github_profile_i.style.opacity = "0"),
    (github_profile_img.style.top = "200px"),
    (github_stats.style.transform = "translateY(270px)"),
    (linkedin.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)"),
    (github.style.clipPath =
      "polygon(0 55%, 100% 36%, 100% 100%, 0% 100%)"),
    (linkedinTag.style.transform = "rotate(-90deg) translateX(200px)"),
    (githubTag.style.transform = "rotate(-90deg) translateX(-200px)"),
    (hoverIcon.style.animationPlayState = "paused");
}),
  github.addEventListener("mouseover", () => {
    (linkedin.style.flexBasis = "10%"),
      (github.style.zIndex = "2"),
      (linkedin.style.zIndex = "1"),
      (linkedin_stats.style.transform = "translateY(270px)"),
      (linked_profile_img.style.top = "-100px"),
      (linkedin_profile_i.style.transform = "translateY(220px)"),
      (github.style.flexBasis = "90%"),
      (github_profile_img.style.top = "0px"),
      (github_profile_i.style.transform = "translateY(-120px)"),
      (github_profile_i.style.opacity = "1"),
      (github_stats.style.transform = "translateY(0px)"),
      (github.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)"),
      (linkedin.style.clipPath = "polygon(0 0, 100% 0, 100% 45%, 0 64%)"),
      (githubTag.style.transform = "rotate(-90deg) translateX(-200px)"),
      (linkedinTag.style.transform = "rotate(-90deg) translateX(200px)"),
      (hoverIcon.style.animationPlayState = "paused");
  });
let menu = document.querySelector(".hamburger"),
  header = document.querySelector("header"),
  heroSection = document.querySelector(".hero_section"),
  anyHeaderLinks = document.querySelectorAll("header a");
menu.addEventListener("click", () => {
  header.classList.toggle("show"), heroSection.classList.toggle("blur");
}),
  anyHeaderLinks.forEach((e) => {
    e.addEventListener("click", () => {
      header.classList.toggle("show"), heroSection.classList.toggle("blur");
    });
  });
let rightSection = document.querySelectorAll(".works .work .right_section"),
  description = document.querySelectorAll(
    ".works .work .right_section .description"
  ),
  leftSection = document.querySelectorAll(".works .work .left_section"),
  leftSectionContent = document.querySelectorAll(
    ".works .work .left_section .content"
  ),
  rightSectionImg = document.querySelectorAll(
    ".work_section .works .work .right_section img"
  ),
  width = document.body.clientWidth;
if (width > 768)
  for (let e = 0; e < rightSection.length; e++)
    rightSection[e].addEventListener("mouseover", () => {
      (rightSection[e].style.flexBasis = "100%"),
        (leftSection[e].style.flexBasis = "0%"),
        (leftSectionContent[e].style.opacity = "0");
    }),
      rightSection[e].addEventListener("mouseout", () => {
        (rightSection[e].style.flexBasis = "50%"),
          (leftSection[e].style.flexBasis = "50%"),
          (leftSectionContent[e].style.opacity = "1");
      }),
      leftSection[e].addEventListener("mouseover", () => {
        (rightSection[e].style.flexBasis = "50%"),
          (leftSection[e].style.flexBasis = "50%"),
          (leftSectionContent[e].style.opacity = "1"),
          (leftSection[e].style.backgroundColor = "white");
      });
else
  for (let e = 0; e < rightSection.length; e++)
    rightSection[e].addEventListener("mouseover", () => {
      (rightSection[e].style.flexBasis = "70%"),
        (leftSection[e].style.flexBasis = "30%"),
        (leftSectionContent[e].style.opacity = "1");
    }),
      rightSection[e].addEventListener("mouseout", () => {
        (rightSection[e].style.flexBasis = "30%"),
          (leftSection[e].style.flexBasis = "70%"),
          (leftSectionContent[e].style.opacity = "1");
      }),
      leftSection[e].addEventListener("mouseover", () => {
        (rightSection[e].style.flexBasis = "30%"),
          (leftSection[e].style.flexBasis = "70%"),
          (leftSectionContent[e].style.opacity = "1"),
          (leftSection[e].style.backgroundColor = "white");
      });


let calander = document.querySelector(".react-activity-calendar");