//Wait for DOM content to load
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault(); //Prevent form from submitting to server
    
    //Get form field values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    //Basic validation
    if(name === "" || email === "" || message === "") {
      alert("Please fill in all detials");
      return;
    }

    //Confirmation message
    alert("Thanks you for reaching out! Your message has been sent successfully.");

    //Clear form fields
    form.reset();

  })
})
