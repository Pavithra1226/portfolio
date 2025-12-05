// Typed Roles Animation
(function() {
  const roles = ['SQL Developer', 'Data Analyst', 'Database Administrator'];
  const el = document.getElementById('typed-role');
  let idx = 0, char = 0, forward = true, wait = false;

  function step() {
    if(wait) return;
    const current = roles[idx];
    if(forward){
      el.textContent = current.slice(0, ++char);
      if(char === current.length) { wait = true; setTimeout(()=>{ forward=false; wait=false; }, 1400); }
    } else {
      el.textContent = current.slice(0, --char);
      if(char === 0) { forward = true; idx = (idx+1) % roles.length; }
    }
  }
  setInterval(step, 80);
})();

// Fade-in observer
const sections = document.querySelectorAll('section');
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add('visible'));
}, { threshold: 0.15 });
sections.forEach(s => obs.observe(s));

// Certificate popup
const certImages = document.querySelectorAll(".cert-img");
const popup = document.getElementById("cert-popup");
const popupImg = document.getElementById("popup-img");
const closePopup = document.getElementById("close-popup");

certImages.forEach(img => {
  img.addEventListener("click", () => {
    popup.style.display = "flex";
    popupImg.src = img.src;
  });
});
closePopup.addEventListener("click", () => popup.style.display = "none");

// Theme toggle
document.getElementById("theme-checkbox")
  .addEventListener("change", () => document.body.classList.toggle("light"));

// GitHub Popup
function openGitHubPopup(url) {
  let linkText = document.getElementById("githubLink");
  linkText.textContent = url;
  linkText.href = url;
  document.getElementById("githubPopup").style.display = "flex";
}
function closeGitHubPopup() {
  document.getElementById("githubPopup").style.display = "none";
}
function openGitHubPopup() {
  const videoURL = "https://www.youtube.com/embed/YOUR_VIDEO_ID"; // << Add your video link
  document.getElementById("projectVideo").src = videoURL;
  document.getElementById("videoPopup").style.display = "flex";
}

function closeVideoPopup() {
  document.getElementById("videoPopup").style.display = "none";
  document.getElementById("projectVideo").src = ""; // Stop video when closing
}

// GitHub link popup
function openGitHubPopup(link) {
  document.getElementById("githubLinkText").innerText = link;
  document.getElementById("githubLinkBtn").href = link;
  document.getElementById("githubPopup").style.display = "flex";
}
function closeGithubPopup() {
  document.getElementById("githubPopup").style.display = "none";
}

// Video popup
function openVideoPopup(videoFile) {
  document.getElementById("projectVideo").src = videoFile;
  document.getElementById("videoPopup").style.display = "flex";
}
function closeVideoPopup() {
  document.getElementById("videoPopup").style.display = "none";
  document.getElementById("projectVideo").pause();
  document.getElementById("projectVideo").src = "";
}
