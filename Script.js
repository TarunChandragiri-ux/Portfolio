const navDialog = document.getElementById('nav-dialog');
function handleMenu() {
  navDialog.classList.toggle('hidden');
}


function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const options = {
      timeZone: 'Asia/Kolkata', // Time zone for India
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    };
    const formattedTime = new Intl.DateTimeFormat('en-US', options).format(now);
    timeElement.textContent = formattedTime;
  }
  
  // Update time every second
  setInterval(updateTime, 1000);
  
  // Call updateTime immediately to display time without delay
  updateTime();
  