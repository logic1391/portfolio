document.documentElement.classList.add("js");
document.getElementById("year").textContent = new Date().getFullYear();

// Appearance toggle: light by default, dark only when chosen (remembered per visitor)
const root = document.documentElement;
try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (e) {}
document.getElementById("themeToggle").addEventListener("click", () => {
  const dark = root.dataset.theme === "dark";
  root.dataset.theme = dark ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
});

// Underline the nav link for the section in view
const navAs = [...document.querySelectorAll("#navLinks a")];
const targets = navAs.map((a) => document.querySelector(a.getAttribute("href")));
const onScroll = () => {
  let i = -1;
  targets.forEach((s, j) => { if (s && s.getBoundingClientRect().top < innerHeight * 0.45) i = j; });
  navAs.forEach((a, j) => a.classList.toggle("active", j === i));
};
addEventListener("scroll", onScroll, { passive: true }); onScroll();

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

// Sections settle into place as they arrive (always visible)
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
