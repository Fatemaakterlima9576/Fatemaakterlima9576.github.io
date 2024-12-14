function webdesign(){
    alert(" Do You want");
}


function webdevelop(){
  let result =  confirm("Do You want to Confrim");
document.write(result);    
}

function Teaching(){
    confirm("Do you want to Lern")
}



document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form from refreshing the page

      // Gather form data
      const firstName = document.getElementById('firstName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const topic = document.getElementById('topic').value;
      const message = document.getElementById('message').value.trim();
      const terms = document.getElementById('terms').checked;

      // Validate all fields
      if (firstName && lastName && email && phone && topic && message && terms) {
        alert('Message delivered successfully!');
        document.getElementById('contactForm').reset(); // Reset the form after submission
      } else {
        alert('Please fill out all fields and accept the terms.');
      }
    });

