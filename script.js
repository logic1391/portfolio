document.documentElement.classList.add("js");
document.getElementById("year").textContent = new Date().getFullYear();

// Appearance: always opens in day mode; a dark choice lasts for this visit only
const root = document.documentElement;
document.getElementById("themeToggle").addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
  try { sessionStorage.setItem("theme", root.dataset.theme); } catch (e) {}
});

// Copy email
const copyBtn = document.getElementById("copyBtn");
copyBtn.addEventListener("click", () => {
  const email = document.getElementById("emailText").textContent.trim();
  const done = () => { copyBtn.textContent = "Copied"; setTimeout(() => (copyBtn.textContent = "Copy"), 1800); };
  const fallback = () => {
    const r = document.createRange(); r.selectNodeContents(document.getElementById("emailText"));
    const s = getSelection(); s.removeAllRanges(); s.addRange(r);
    copyBtn.textContent = "Press Ctrl+C";
  };
  if (navigator.clipboard) navigator.clipboard.writeText(email).then(done, fallback); else fallback();
});

// Sections ease into place as they arrive (always visible)
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
  }), { threshold: 0.06 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

// Headline phrase that swaps every few seconds
const phrases = ["reliable backends", "clean interfaces", "AI agent benchmarks", "products people use"];
const rotWord = document.querySelector("#rotator .rot-word");
let pi = 0;
if (rotWord && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  setInterval(() => {
    rotWord.classList.remove("in"); rotWord.classList.add("out");
    setTimeout(() => {
      pi = (pi + 1) % phrases.length;
      rotWord.textContent = phrases[pi];
      rotWord.classList.remove("out"); rotWord.classList.add("in");
    }, 380);
  }, 2800);
}

// Nav gains a backdrop once the page scrolls
const shell = document.getElementById("navShell");
const onNav = () => shell.classList.toggle("scrolled", scrollY > 8);
addEventListener("scroll", onNav, { passive: true }); onNav();
