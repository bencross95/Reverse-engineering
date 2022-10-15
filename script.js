
function openTab(evt, tabName) {
  // console.log(tabName);
  var i, x, tablinks;
  x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("tab-button-on", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " tab-button-on";

  // if 'tabName' is 'info' then add class 'tab-button-on'

  // if (tabName == 'info') {
  //   console.log("info manual");
  // } else {
  //   console.log("not info");
  // }

};
