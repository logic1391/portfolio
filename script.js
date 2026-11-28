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

// Project demos: slowly scroll each screenshot strip inside its browser frame
function setupDemos() {
  document.querySelectorAll(".demo").forEach((fig) => {
    const view = fig.querySelector(".demo-view"), img = view && view.querySelector("img");
    if (!img) return;
    const apply = () => {
      const shift = img.getBoundingClientRect().height - view.getBoundingClientRect().height;
      if (shift > 20) {
        fig.style.setProperty("--shift", -shift + "px");
        fig.style.setProperty("--dur", Math.max(10, shift / 45) + "s");
        fig.classList.add("scrolling"); fig.classList.remove("fit");
      } else { fig.classList.remove("scrolling"); fig.classList.add("fit"); }
    };
    if (img.complete) apply(); else img.addEventListener("load", apply);
    addEventListener("resize", apply);
  });
}
setupDemos();

// GitHub: live stats in the visitor's browser, with a factual fallback
(function github() {
  const USER = "logic1391";
  const LANG_COLORS = { JavaScript: "#e6c200", TypeScript: "#3178c6", Python: "#3572a5", HTML: "#e34c26", CSS: "#563d7c", Dart: "#00b4ab", Java: "#b07219", "C++": "#f34b7d" };
  const color = (l) => LANG_COLORS[l] || "#8e8e93";
  const SNAPSHOT = [
    { name: "portfolio", description: "This site.", pushed_at: "2026-11-27", html_url: "https://github.com/logic1391/portfolio" },
    { name: "PlayConnect", description: "Find colleagues who play your sport.", pushed_at: "2026-11-04", html_url: "https://github.com/logic1391/PlayConnect" },
    { name: "Project_Tracker", description: "Role-based project and task manager.", pushed_at: "2026-04-30", html_url: "https://github.com/logic1391/Project_Tracker" },
    { name: "Chunaav-Yatra", description: "Civic platform for first-time voters.", pushed_at: "2026-04-25", html_url: "https://github.com/logic1391/Chunaav-Yatra" },
  ];
  const ago = (d) => {
    const days = Math.floor((Date.now() - new Date(d)) / 864e5);
    if (days < 1) return "Pushed today"; if (days < 2) return "Pushed yesterday";
    if (days < 30) return `Pushed ${days} days ago`;
    return "Pushed " + new Date(d).toLocaleDateString("en-GB", { month: "short", year: "numeric" });
  };
  const esc = (s) => String(s || "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const renderRepos = (repos) => {
    document.getElementById("ghRepoList").innerHTML = repos.slice(0, 4).map((r) => `
      <a class="card gh-repo" href="${esc(r.html_url)}" target="_blank" rel="noopener">
        <div class="r-top"><h4>${esc(r.name)}</h4><span aria-hidden="true">↗</span></div>
        ${r.description ? `<p>${esc(r.description)}</p>` : ""}
        <div class="r-meta">${r.language ? `<span><i style="background:${color(r.language)}"></i>${esc(r.language)}</span>` : ""}<span>${ago(r.pushed_at)}</span></div>
      </a>`).join("");
  };
  renderRepos(SNAPSHOT);

  fetch(`https://api.github.com/users/${USER}`).then((r) => (r.ok ? r.json() : Promise.reject())).then((u) => {
    document.getElementById("ghRepos").textContent = u.public_repos;
    document.getElementById("ghSince").textContent = new Date(u.created_at).getFullYear();
    if (u.avatar_url) document.getElementById("ghAvatar").src = u.avatar_url;
  }).catch(() => { document.querySelector(".gh-stats").hidden = true; });

  fetch(`https://api.github.com/users/${USER}/repos?per_page=100&sort=pushed`).then((r) => (r.ok ? r.json() : Promise.reject())).then((repos) => {
    const own = repos.filter((r) => !r.fork);
    renderRepos(own);
    const counts = {};
    own.forEach((r) => { if (r.language) counts[r.language] = (counts[r.language] || 0) + 1; });
    const langs = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    const total = langs.reduce((s, [, n]) => s + n, 0) || 1;
    document.getElementById("ghLangCount").textContent = langs.length;
    document.getElementById("langBar").innerHTML = langs.map(([l, n]) => `<span style="width:${(n / total) * 100}%;background:${color(l)}"></span>`).join("");
    document.getElementById("langList").innerHTML = langs.map(([l, n]) => `<li><i style="background:${color(l)}"></i>${esc(l)}<b>${n}</b></li>`).join("");
  }).catch(() => { [".gh-label", "#langBar", "#langList"].forEach((s) => { const e = document.querySelector(s); if (e) e.hidden = true; }); });

})();

// Projects stack on every screen size: a card scrolls fully into view, pins,
// then the next one slides over it while it eases back
(function stackCards() {
  const cards = [...document.querySelectorAll(".work-card")];
  if (!cards.length) return;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const layout = () => {
    const base = innerWidth <= 960 ? 76 : 96;
    cards.forEach((c, i) => {
      const fit = innerHeight - c.offsetHeight - 16;
      c.style.top = Math.min(base + i * 12, fit) + "px";
    });
  };
  const onScroll = () => {
    if (reduce) return;
    cards.forEach((c, i) => {
      const next = cards[i + 1];
      if (!next) return;
      const top = c.getBoundingClientRect().top, ntop = next.getBoundingClientRect().top;
      const p = Math.min(1, Math.max(0, 1 - (ntop - top) / (innerHeight * 0.8)));
      c.style.transform = `scale(${1 - p * 0.06})`;
      c.style.filter = `brightness(${1 - p * 0.12})`;
    });
  };
  layout(); onScroll();
  addEventListener("resize", () => { layout(); onScroll(); });
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("load", layout);
})();

// Chakra watermarks in tiles and a slight 3D tilt
  (function(){
    // a different chakra in every tile, never the same as its neighbour
    const C=["konark-wheel","ashoka-chakra","sri-yantra","lotus-mandala","sudarshan","dharma-wheel","shatkona","muladhara"];
    document.querySelectorAll(".card, .work-card").forEach((t,i)=>t.style.setProperty("--chakra",`url(chakras/${C[(i*3)%C.length]}.svg)`));
    // slight 3D tilt toward the cursor (desktop pointers only)
    if (matchMedia("(hover: hover) and (pointer: fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".card:not(.work-card .card), .skill-card, .gh-repo, .xp, .contact").forEach((el)=>{
        el.classList.add("tilt");
        el.addEventListener("pointermove",(e)=>{const r=el.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
          const k=r.width>700?1.2:3;el.style.transform=`perspective(900px) rotateX(${(-y*k).toFixed(2)}deg) rotateY(${(x*k).toFixed(2)}deg) translateY(-3px)`;});
        el.addEventListener("pointerleave",()=>{el.style.transform="";});
      });
    }
  })();
