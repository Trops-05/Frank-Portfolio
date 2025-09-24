const contactForm = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

if(contactForm){
  contactForm.addEventListener("submit", function(e){
    e.preventDefault();

    feedback.style.color = "blue";
    feedback.textContent = "Sending message...";

    const formData = new FormData(contactForm);

    fetch("send_email.php", {
      method: "POST",
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      feedback.style.color = data.includes("success") ? "green" : "red";
      feedback.textContent = data.replace("success", "").replace("error", "");
      contactForm.reset();
    })
    .catch(err => {
      feedback.style.color = "red";
      feedback.textContent = "Failed to send message.";
    });
  });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });
});
