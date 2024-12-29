const clock=document.getElementById('clock');

// Function to update the clock
function updateClock() {
  let date = new Date();

  // Use toLocaleTimeString with options for 12-hour format and AM/PM
  let time=date.toLocaleTimeString('en-US',{ hour:'numeric',minute:'numeric',second:'numeric',hour12:true });

  // Update the clock element
  clock.innerHTML=time;
}

// Update the clock every second
setInterval(updateClock,1000);
updateClock();// Initial call to avoid delay
