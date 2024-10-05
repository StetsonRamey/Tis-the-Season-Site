// Check if the 'contact-form' exists before attaching the event listener
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  console.log(contactForm);
  contactForm.addEventListener("submit", function (event) {
    const submitBtn = document.querySelector(
      '.contact-submit input[type="submit"]',
    );
    submitBtn.disabled = true;
    submitBtn.style.pointerEvents = "none"; // Correct the syntax for disabling pointer events

    // setup the loader and add it
    const loader = document.createElement("div");
    loader.classList.add("loader");
    submitBtn.parentNode.appendChild(loader);
  });
}

// Check if the 'qr-code-form' exists before attaching the event listener
const qrCodeForm = document.getElementById("qr-code-form");
if (qrCodeForm) {
  console.log(qrCodeForm);
  qrCodeForm.addEventListener("submit", function (event) {
    const submitBtn = document.querySelector(
      '.contact-submit input[type="submit"]',
    );
    submitBtn.disabled = true;
    submitBtn.style.pointerEvents = "none"; // Correct the syntax for disabling pointer events

    // setup the loader and add it
    const loader = document.createElement("div");
    loader.classList.add("loader");
    submitBtn.parentNode.appendChild(loader);
  });
}
