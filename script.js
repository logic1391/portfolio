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

  const cal = document.getElementById("ghCal");
  fetch(`https://github-contributions-api.jogruber.de/v4/${USER}?y=last`).then((r) => (r.ok ? r.json() : Promise.reject())).then((d) => {
    const days = d.contributions || [];
    if (!days.length) throw 0;
    const pad = new Date(days[0].date).getDay();
    cal.innerHTML = '<i style="visibility:hidden"></i>'.repeat(pad) + days.map((c) => `<i class="l${c.level}" title="${c.count} on ${c.date}"></i>`).join("");
    document.getElementById("ghTotal").textContent = days.reduce((s, c) => s + c.count, 0);
    document.getElementById("ghDays").textContent = days.filter((c) => c.count > 0).length + " active days";
    cal.parentElement.scrollLeft = cal.scrollWidth;
  }).catch(() => {
    document.querySelector(".gh-cal-head").hidden = true; document.querySelector(".cal-legend").hidden = true;
    cal.outerHTML = '<p class="cal-empty">Live contribution calendar: <a href="https://github.com/logic1391" target="_blank" rel="noopener">open my GitHub profile</a>.</p>';
  });
})();
