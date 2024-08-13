/** jquery **/
/* header */
$(document).ready(function () {
  $("#trueheader").load("./header.html");
  $("#truefooter").load("./footer.html");
  $.getJSON("https://api.countapi.xyz/hit/ch4visualiser/home", function (response) { // View Counter - CountAPI
    $("#visits").text(response.value);
  });
});

/* footer */
$(document).ready(function () {
});
/* Flux maps */
$(document).ready(function () {
  const mediaQuery1 = window.matchMedia('(min-width: 1700px)');
  const mediaQuery2 = window.matchMedia('(min-width: 1400px)');
  const mediaQuery3 = window.matchMedia('(min-width: 1050px)');
  const mediaQuery4 = window.matchMedia('(min-width: 700px)');

  function updateImage() {
    let src;

    switch (true) {
      case mediaQuery1.matches:
        src = './charts/flux-yearly/yearly1000.html';
        break;
      case mediaQuery2.matches:
        src = './charts/flux-yearly/yearly800.html';
        break;
      case mediaQuery3.matches:
        src = './charts/flux-yearly/yearly600.html';
        break;
      case mediaQuery4.matches:
        src = './charts/flux-yearly/yearly400.html';
        break;
      default:
        src = './charts/flux-yearly/yearly200.html';
        break;
    }

    $('#flux-global').load(src);
  }

  // Initial call
  updateImage();

  // Add listeners
  mediaQuery1.addListener(updateImage);
  mediaQuery2.addListener(updateImage);
  mediaQuery3.addListener(updateImage);
  mediaQuery4.addListener(updateImage);
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