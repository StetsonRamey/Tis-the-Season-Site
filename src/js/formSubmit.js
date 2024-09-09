document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    const submitBtn = document.querySelector(
      '.contact-submit input[type="submit"]',
    );
    submitBtn.disabled = true;
    submitBtn.pointerEvents = "none";

    // setup the loader and add it
    const loader = document.createElement("div");
    loader.classList.add("loader");
    submitBtn.parentNode.appendChild(loader);
  });
