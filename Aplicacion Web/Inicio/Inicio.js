document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("map-button").addEventListener("click", function() {
    document.getElementById("modal").style.display = "block";
  });

  document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
  });
});