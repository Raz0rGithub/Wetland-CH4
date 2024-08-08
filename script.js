/** jquery **/
/* header */
$(document).ready(function () {
  $("#trueheader").load("./header.html");
});
/* footer */
$(document).ready(function () {
  $("#truefooter").load("./footer.html");
});
/* Flux maps */
$(document).ready(function () {
  $("#flux-global").load("./charts/flux-yearly/yearly.html");
});
$(document).ready(function () {
  $("#flux-global-1").load("./charts/flux-yearly/yearly1440.html");
});
$(document).ready(function () {
  $("#flux-global-2").load("./charts/flux-yearly/yearly1080.html");
});
$(document).ready(function () {
  $("#flux-global-3").load("./charts/flux-yearly/yearly720.html");
});
$(document).ready(function () {
  $("#flux-global-4").load("./charts/flux-yearly/yearly480.html");
});
$(document).ready(function () {
  $("#flux-global-5").load("./charts/flux-yearly/yearly360.html");
});


function resize(x) {
  if (x.matches) { // If media query matches
    $("#flux-global").load("./charts/flux-yearly/yearly.html");
  }
  else if (x1.matches) {
    $("#flux-global").load("./charts/flux-yearly/yearly1440.html");
  }
  else if (x2.matches) {
    $("#flux-global").load("./charts/flux-yearly/yearly1080.html");
  }
  else if (x3.matches) {
    $("#flux-global").load("./charts/flux-yearly/yearly720.html");
  }
  else if (x4.matches) {
    $("#flux-global").load("./charts/flux-yearly/yearly480.html");
  }
  else if (x5.matches) {
    $("#flux-global").load("./charts/flux-yearly/yearly360.html");
  }
}
// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 1440px)")
var x1 = window.matchMedia("(max-width: 1440px)")
var x2 = window.matchMedia("(max-width: 1080px)")
var x3 = window.matchMedia("(max-width: 720px)")
var x4 = window.matchMedia("(max-width: 480px)")
var x5 = window.matchMedia("(max-width: 360px)")
resize(x);
// Attach listener function on state changes
x.addEventListener("change", function () {
  resize(x);
});
x1.addEventListener("change", function () {
  resize(x1);
});
x2.addEventListener("change", function () {
  resize(x2);
});
x3.addEventListener("change", function () {
  resize(x3);
});


/** about.html **/
/* dropdown menu*/
const summaries = document.querySelectorAll('summary');

summaries.forEach((summary) => {
  summary.addEventListener('click', closeOpenedDetails);
});

function closeOpenedDetails() {
  summaries.forEach((summary) => {
    let detail = summary.parentNode;
    if (detail != this.parentNode) {
      detail.removeAttribute('open');
    }
  });
}

/** flux.html **/
/* tabs */
function openTab(evt, region) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(region).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();