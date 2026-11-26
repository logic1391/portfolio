document.getElementById("year").textContent = new Date().getFullYear();

// Appearance toggle (remembered per visitor)
const root = document.documentElement;
try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (e) {}
document.getElementById("themeToggle").addEventListener("click", () => {
  const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = dark ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
});

// Mobile menu
const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", () => menuBtn.setAttribute("aria-expanded", menu.classList.toggle("open")));
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") { menu.classList.remove("open"); menuBtn.setAttribute("aria-expanded", false); }
});

// Segmented nav: sliding highlight follows the section in view
const seg = document.getElementById("navSeg");
const ind = document.getElementById("segIndicator");
const segLinks = [...seg.querySelectorAll("a")];
const sections = segLinks.map((a) => document.querySelector(a.getAttribute("href")));
let current = -1;
const moveIndicator = (i) => {
  segLinks.forEach((a, j) => a.classList.toggle("active", j === i));
  if (i < 0) { ind.style.opacity = 0; return; }
  const a = segLinks[i];
  ind.style.width = a.offsetWidth + "px";
  ind.style.transform = `translateX(${a.offsetLeft}px)`;
  ind.style.opacity = 1;
};
const onScroll = () => {
  let i = -1;
  sections.forEach((s, j) => { if (s && s.getBoundingClientRect().top < innerHeight * 0.45) i = j; });
  if (i !== current) { current = i; moveIndicator(i); }
};
addEventListener("scroll", onScroll, { passive: true });
addEventListener("resize", () => moveIndicator(current));
onScroll();

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

// Stagger index for items that settle in one after another
document.querySelectorAll(".projects, .list, .xp-list, .contact").forEach((group) => {
  [...group.children].forEach((el, n) => el.style.setProperty("--n", n));
});

// Pointer-following sheen on glass surfaces
document.querySelectorAll(".glass").forEach((el) => {
  el.addEventListener("pointermove", (e) => {
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  });
});

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
