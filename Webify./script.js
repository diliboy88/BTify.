
// Main Apps
dragElement(document.getElementById("welcome"));
dragElement(document.getElementById("devices"));
// Custom Apps
dragElement(document.getElementById("changelog"));
dragElement(document.getElementById("iframe"));
dragElement(document.getElementById("browser"));
dragElement(document.getElementById("selfhosted"));

// Dragging Functionality
function dragElement(element) {
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  if (document.getElementById(element.id + "header")) {
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    element.onmousedown = startDragging;
  }

  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

setInterval(function () {
    document.querySelector("#timeElement").innerHTML = new Date().toLocaleString();
}, 1000);

function closeWindow(element) {
  element.style.display = "none";
}

function openWindow(element) {
  element.style.display = "flex";
  biggestIndex++;
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
}

var biggestIndex = 1;
var topBar = document.querySelector(".topbar");

function handleWindowTap(element) {
  biggestIndex++;
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
}

function addWindowTapHandling(element) {
  element.addEventListener("mousedown", () => handleWindowTap(element));
}

// Add tap handling to all windows
addWindowTapHandling(document.querySelector("#welcome"));
addWindowTapHandling(document.querySelector("#devices"));
addWindowTapHandling(document.querySelector("#changelog"));
addWindowTapHandling(document.querySelector("#iframe"));
addWindowTapHandling(document.querySelector("#browser"));
addWindowTapHandling(document.querySelector("#selfhosted"));

// Allows opening the app 
function handleIconTap(element) {
  if (element.id === "devicesIcon") {
    openWindow(document.querySelector("#devices"));
  } else if (element.id === "changelogicon") {
    openWindow(document.querySelector("#changelog"));
  } else if (element.id === "iframeicon") {
    openWindow(document.querySelector("#iframe"));
  } else if (element.id === "browsericon") {
    openWindow(document.querySelector("#browser"));
  } else if (element.id === "selfhosticon") {
    openWindow(document.querySelector("#selfhosted"));
  }
}

// omg so many variables
var welcomeScreen = document.querySelector("#welcome");
var welcomeScreenClose = document.querySelector("#welcomeclose");
var welcomeScreenOpen = document.querySelector("#welcomeopen");
var devicesScreen = document.querySelector("#devices");
var devicesScreenClose = document.querySelector("#devicesclose");
var devicesIcon = document.querySelector("#devicesIcon");
var changelogScreen = document.querySelector("#changelog");
var changelogScreenClose = document.querySelector("#changelogclose");
var changelogIcon = document.querySelector("#changelogicon");
var iframeScreen = document.querySelector("#iframe");
var iframeScreenClose = document.querySelector("#iframeclose");
var iframeIcon = document.querySelector("#iframeicon");
var browserScreen = document.querySelector("#browser");
var browserScreenClose = document.querySelector("#browserclose");
var browserIcon = document.querySelector("#browsericon");
var selfhostedScreen = document.querySelector("#selfhosted");
var selfhostedScreenClose = document.querySelector("#selfhostedclose");
var selfhostedIcon = document.querySelector("#selfhosticon");



// Event Listeners for buttons
welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});
welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});

devicesScreenClose.addEventListener("click", function() {
  closeWindow(devicesScreen);
});
devicesIcon.addEventListener("click", function() {
  handleIconTap(devicesIcon);
});

changelogScreenClose.addEventListener("click", function() {
  closeWindow(changelogScreen);
});
changelogIcon.addEventListener("click", function() {
  handleIconTap(changelogIcon);
});

iframeScreenClose.addEventListener("click", function() {
  closeWindow(iframeScreen);
});
iframeIcon.addEventListener("click", function() {
  handleIconTap(iframeIcon);
});

browserScreenClose.addEventListener("click", function() {
  closeWindow(browserScreen);
});
browserIcon.addEventListener("click", function() {
  handleIconTap(browserIcon);
});
  
selfhostedScreenClose.addEventListener("click", function() {
  closeWindow(selfhostedScreen);
});
selfhostedIcon.addEventListener("click", function() {
  handleIconTap(selfhostedIcon);
});
  







// The real magic when it comes to loading more JS content
fetch('../devices.json')
  .then(response => response.json())
  .then(data => {
    var content = document.querySelector("#devicesContent");
    content.innerHTML = "<h2>Connected Devices</h2>";
    data.forEach(device => {
      content.innerHTML += `<div style="border: 1px solid #c296f8ff; padding: 8px; margin: 8px; border-radius: 18px;">
        <h3>${device.name || device.UserHostName || device.PhysAddress}</h3>
        <p>IP: ${device.IPAddress || device.ip}</p>
        <p>MAC: ${device.PhysAddress || device.mac}</p>
        <p>Status: ${device.Active ? 'Active' : 'Inactive'}</p>
      </div>`;
    });
  })
  .catch(error => {
    document.querySelector("#devicesContent").innerHTML = "<p>Error loading devices.</p>";
  });

// Load changelog content
document.addEventListener("DOMContentLoaded", function() {
  var changelogContent = document.querySelector("#changelogContent");
  changelogContent.innerHTML = `
    <h2>Changelog</h2>
    <h3>Version 1.0.0</h3>
    <ul>
      <li>Initial release of BTify OS</li>
      <li>Added device viewing functionality</li>
      <li>Implemented draggable windows</li>
      <li>Added welcome screen</li>
    </ul>
    <h3>Version 0.9.0</h3>
    <ul>
      <li>Added changelog window</li>
      <li>Improved UI styling</li>
    </ul>
  `;
});

