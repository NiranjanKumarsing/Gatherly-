var user = null;
var comms = ["Eco Warriors", "Tech Startups", "Hikers"];
var posts = [
  { name: "Alice", text: "Just planted 50 trees! 🌲", time: "2h ago" },
  {
    name: "John",
    text: "Anyone tried the new React compiler?",
    time: "4h ago",
  },
];

function go(id) {
  window.scrollTo(0, 0);

  var pages = document.querySelectorAll(".page");
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.remove("show");
  }

  var t = document.getElementById("p-" + id);
  if (t) t.classList.add("show");

  var ftr = document.getElementById("ftr");
  if (id == "dash" || id == "create" || id == "profile") {
    ftr.style.display = "none";
  } else {
    ftr.style.display = "block";
  }

  document.getElementById("m-menu").classList.remove("open");
}

function toggleMenu() {
  document.getElementById("m-menu").classList.toggle("open");
}

function logIn(e) {
  e.preventDefault();
  user = { name: "Alex" };
  document.getElementById("guest-nav").classList.add("hide");
  document.getElementById("user-nav").classList.remove("hide");
  go("dash");
  loadDash();
}

function logout() {
  user = null;
  document.getElementById("guest-nav").classList.remove("hide");
  document.getElementById("user-nav").classList.add("hide");
  go("home");
}

function createSpace(e) {
  e.preventDefault();
  var val = document.getElementById("space-name").value;
  if (val) {
    comms.push(val);
    go("dash");
    loadDash();
  }
}

function loadDash() {
  var cl = document.getElementById("c-list");
  var html = "";
  for (var i = 0; i < comms.length; i++) {
    html +=
      '<div class="chn-item"><div style="width:8px;height:8px;background:#34d399;border-radius:50%;"></div>' +
      comms[i] +
      "</div>";
  }
  cl.innerHTML = html;

  var fb = document.getElementById("feed-box");
  var phtml = "";
  for (var j = 0; j < posts.length; j++) {
    var p = posts[j];
    phtml +=
      '<div class="box" style="margin-bottom:15px;">' +
      '<div style="display:flex; gap:10px; margin-bottom:5px;"><strong>' +
      p.name +
      '</strong><span style="color:#888; font-size:0.9rem;">' +
      p.time +
      "</span></div>" +
      "<p>" +
      p.text +
      "</p>" +
      "</div>";
  }
  fb.innerHTML = phtml;
}

window.onscroll = function () {
  var els = document.querySelectorAll(".anim-up");
  for (var i = 0; i < els.length; i++) {
    var rect = els[i].getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      els[i].style.opacity = "1";
      els[i].style.transform = "translateY(0)";
    }
  }
};

var styles = document.createElement("style");
styles.innerHTML =
  ".anim-up { opacity: 0; transform: translateY(20px); transition: 0.6s; }";
document.head.appendChild(styles);
