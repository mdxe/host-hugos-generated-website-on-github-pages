var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function convertDate(date_str) {
    temp_date = date_str.split("-");
    return months[Number(temp_date[1]) - 1] + " " + temp_date[2] + ", " + temp_date[0];
}

const urlParams = new URLSearchParams(window.location.search);
const timestamp = urlParams.get('setdate');

// If time parameter is set
if (timestamp) {
    const set_date = new Date(timestamp);
    const current_date = new Date();
    const time_difference = current_date.getTime() - set_date.getTime();
    const days_since = Math.floor(time_difference / (1000 * 60 * 60 * 24));
    
    document.getElementById('result').innerHTML                    = days_since;
    document.getElementById('result_from_date').innerHTML = convertDate(timestamp);
    document.getElementById('title').innerHTML = "Days Since " + convertDate(timestamp) + "?";
    document.getElementById('status_set').style.display           = 'block'; /* show reset button */
    document.getElementById('status_fireworks').style.display = 'block'; /* show fireworks animation */
    document.getElementById('status_unset').style.display       = 'none'; /* hide unset message */
    document.getElementById('start_date').value = timestamp;
//  fireworks.start();
}
// else, no date set
else {
}

document.getElementById('set_button').addEventListener('click', (e) => {
    window.location.href = '?setdate=' + document.getElementById('start_date').value;
});

document.getElementById('start_date').addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        e.preventDefault();
        window.location.href = '?setdate=' + document.getElementById('start_date').value;
    }
});

document.getElementById('reset_button').addEventListener('click', (e) => {
    window.location.href = 'index.html';
});

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = "block";

  addBtn.addEventListener("click", (e) => {
    // hide our user interface that shows our A2HS button
    //addBtn.style.display = "none";
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt = null;
    });
  });
});

let deferredPrompt;
const addBtn = document.querySelector(".add_to_home_screen");
//addBtn.style.display = "none";

//$('.demo').fireworks({
//    sound: true, // sound effect
//    opacity: 0.9,
//    width: '100%',
//    height: '100%'
//});
