document.getElementById("year").textContent = new Date().getFullYear();
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

// Theme toggle (remembered per visitor)
const root = document.documentElement;
try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (e) {}
document.getElementById("themeToggle").addEventListener("click", () => {
  const light = root.dataset.theme ? root.dataset.theme === "light" : matchMedia("(prefers-color-scheme: light)").matches;
  root.dataset.theme = light ? "dark" : "light";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
});

// Mobile menu
const links = document.getElementById("navLinks");
const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", () => menuBtn.setAttribute("aria-expanded", links.classList.toggle("open")));
links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") { links.classList.remove("open"); menuBtn.setAttribute("aria-expanded", false); }
});

// Rotating words in the headline
const words = ["full-stack apps", "REST APIs", "eval pipelines", "ML web apps"];
const rot = document.getElementById("rotator");
let wi = 0;
if (!reduceMotion) setInterval(() => {
  const cur = rot.querySelector(".rot-word");
  cur.classList.add("out");
  setTimeout(() => {
    wi = (wi + 1) % words.length;
    cur.textContent = words[wi];
    cur.classList.remove("out"); cur.classList.add("in");
    setTimeout(() => cur.classList.remove("in"), 500);
  }, 340);
}, 2600);

// Live local time in Varanasi
const clock = document.getElementById("clock");
const tick = () => {
  try { clock.textContent = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata" }).format(new Date()); } catch (e) {}
};
tick(); setInterval(tick, 15000);

// Cursor-following glow on cards
document.querySelectorAll(".glow").forEach((el) => {
  el.addEventListener("pointermove", (e) => {
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  });
});

// Scroll progress bar + active nav link
const bar = document.getElementById("progress");
const navAs = [...links.querySelectorAll("a")];
const sections = navAs.map((a) => document.querySelector(a.getAttribute("href")));
const onScroll = () => {
  const h = document.documentElement.scrollHeight - innerHeight;
  bar.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
  let active = -1;
  sections.forEach((s, i) => { if (s && s.getBoundingClientRect().top < innerHeight * 0.4) active = i; });
  navAs.forEach((a, i) => a.classList.toggle("active", i === active));
};
addEventListener("scroll", onScroll, { passive: true }); onScroll();

// Copy email
const copyBtn = document.getElementById("copyBtn");
copyBtn.addEventListener("click", () => {
  const email = document.getElementById("emailText").textContent.trim();
  const done = () => { copyBtn.textContent = "Copied ✓"; setTimeout(() => (copyBtn.textContent = "Copy"), 1800); };
  const fallback = () => {
    const r = document.createRange(); r.selectNodeContents(document.getElementById("emailText"));
    const s = getSelection(); s.removeAllRanges(); s.addRange(r);
    copyBtn.textContent = "Press Ctrl+C";
  };
  if (navigator.clipboard) navigator.clipboard.writeText(email).then(done, fallback); else fallback();
});

// Sections settle into place as they scroll in (always visible)
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
  }), { threshold: 0.06 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}
