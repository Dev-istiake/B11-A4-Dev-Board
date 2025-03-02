document.getElementById("change-theme").addEventListener("click", function (e) {
   let randomBgColor = Math.floor(Math.random() * 16777216).toString(16);
   document.getElementById(
      "main-body"
   ).style.backgroundColor = `#${randomBgColor}`;
});
