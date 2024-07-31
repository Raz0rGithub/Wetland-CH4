/** jquery **/
/* header */
$(document).ready(function () {
  $("#trueheader").load("./header.html");
});
/* footer */
$(document).ready(function () {
  $("#truefooter").load("./footer.html");
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