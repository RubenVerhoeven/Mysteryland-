var eersteStreepjesButton = document.querySelector("section.streepjes li:nth-of-type(1) button");

eersteStreepjesButton.addEventListener("click", function() {
  let expanded = eersteStreepjesButton.getAttribute("aria-expanded");

  if (expanded === "false") {
    eersteStreepjesButton.setAttribute("aria-expanded", "true");
  } else {
    eersteStreepjesButton.setAttribute("aria-expanded", "false");
  }
});

