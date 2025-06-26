document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop form from refreshing

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const service = document.getElementById("service").value;

  alert(`Thank you, ${name}! Your ${service} is booked for ${date} at ${time}. We’ll call you on ${phone}.`);
  
  this.reset(); // clear form after booking
});