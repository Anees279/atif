
// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
      duration: 1200,  // Optional: Customize animation duration (default: 400ms)
      easing: 'ease-in-out', // Optional: Customize easing
    });
  });
  document.querySelectorAll('.toggle-content').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default link behavior
      const serviceItem = this.closest('.service-item');
      serviceItem.classList.toggle('expanded');
      this.textContent = serviceItem.classList.contains('expanded') 
        ? 'Show less' 
        : 'Learn more';
    });
  });
  $(document).ready(function () {
    $('.services-slider.d-md-none').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
    });
  });
// testmonials
$(document).ready(function(){
  $('.slick-slider').slick({
    infinite: true,
    slidesToShow: 3, // Show 3 items at once on large devices
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 item on small devices
          slidesToScroll: 1
        }
      }
    ]
  });
});
// testmonial

// contact us
function handleSubmit() {
  // Get form elements
  const elements = [
      { id: "fname", element: document.getElementById("fname") },
      { id: "lname", element: document.getElementById("lname") },
      { id: "email", element: document.getElementById("email") },
      { id: "phone", element: document.getElementById("phone") },
      { id: "country", element: document.getElementById("country") },
      { id: "message", element: document.getElementById("message") },
  ];

  let allValid = true;

  // Validate fields and highlight empty ones
  elements.forEach(({ element }) => {
      if (!element.value.trim()) {
          element.classList.add("is-invalid");
          allValid = false;
      } else {
          element.classList.remove("is-invalid");
      }
  });

  if (!allValid) return;

  // Change button text if all fields are valid
  const submitButton = document.getElementById("submitButton");
  submitButton.innerHTML = "Thank you for contacting us!";
  submitButton.style.backgroundColor = "#007573";
  


  submitButton.disabled = true;

  // Revert button text after 5 seconds
  setTimeout(() => {
      submitButton.innerHTML = "Send Message";
      submitButton.disabled = false;
  }, 5000);
}
