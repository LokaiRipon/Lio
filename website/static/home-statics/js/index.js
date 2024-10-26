const color_picks = document.querySelectorAll(".cls");

const activeElements = document.querySelectorAll(".active");

// firsty home icon to be orangered by default
// actually these are the items i want to have default colors when page loads
document.querySelector(".fa-house").style.color = "orangered";
const menuBar = document.querySelector(".fa-bars");

menuBar.style.color = "orangered";

menuBar.addEventListener("click", () => {
  console.log("You clicked the menu button");
});

const themeSettingsButton = document.querySelector(".fa-gear");

// adding the gear rotation animation using class list
themeSettingsButton.classList.add("rotate");

const topMenuWrapper = document.querySelector(".top-menu-wrapper");
const settingsThemes = document.querySelector(".settings");

themeSettingsButton.addEventListener("click", () => {
  //  WE REPLACE THE CLASS LISTS

  if (settingsThemes.style.display == "none") {
    topMenuWrapper.classList.add("toggled-top-menu-wrapper");
    topMenuWrapper.classList.add("slide-left");

    // adding styles to the themes component
    settingsThemes.style.display = "block";
    settingsThemes.classList.add("fade-in");
    // end of those styles
  } else {
    topMenuWrapper.classList.remove("toggled-top-menu-wrapper");
    topMenuWrapper.classList.remove("slide-left");

    // adding styles to the themes component
    settingsThemes.style.display = "none";
    settingsThemes.classList.replace("fade-in", "fade-out");
  }
  console.log("You clicked the theme settings button");
});

color_picks.forEach((colorDiv) => {
  colorDiv.addEventListener("click", () => {
    changeActiveColor(colorDiv.title);
    changePseudoElementStyles(colorDiv.title);
  });
});

color_picks.forEach((colorDiv) => {
  if (colorDiv.classList.contains("cls-1")) {
    colorDiv.style.backgroundColor = "orangered";
    colorDiv.title = "orangered";
  } else if (colorDiv.classList.contains("cls-2")) {
    colorDiv.style.backgroundColor = "#3276f4";
    colorDiv.title = "#3276f4";
  } else if (colorDiv.classList.contains("cls-4")) {
    colorDiv.style.backgroundColor = "#15b9f0";
    colorDiv.title = "deepskyblue";
  } else {
    colorDiv.style.backgroundColor = "hotpink";
    colorDiv.title = "hotpink";
  }
});

// function to change theme color for elenents in the webpage
const changeActiveColor = (color) => {
  if (color == "orangered") {
    activeElements.forEach((element) => {
      element.style.color = color;
    });
  } else if (color == "#3276f4") {
    activeElements.forEach((element) => {
      element.style.color = color;
    });
  } else if (color == "#15b9f0") {
    activeElements.forEach((element) => {
      element.style.color = color;
    });
  } else {
    activeElements.forEach((element) => {
      element.style.color = color;
    });
  }
  console.log(`You are using ${color} theme color`);
  document.querySelector(".btn").style.backgroundColor = color;
};

const colorSettings = document.querySelector("#settings");
const themeSettings = document.querySelector("#dark");

const containerFluid = document.querySelector(".container-fluid");

const contentContainer = document.querySelector(".content-wrapper");
const contentTextElements = contentContainer.querySelectorAll("h1, h2, p");
const sidebar = document.querySelector(".sidebar");
const sidebarTextElements = sidebar.querySelectorAll("li, a");

const menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click", () => {
  sidebar.style.display = "none";
  menuIcon.style.display = "block";
});

themeSettings.addEventListener("click", () => {
  if (containerFluid.classList.contains("bgBlack")) {
    containerFluid.classList.replace("bgBlack", "bgWhite");
    sidebar.classList.replace("bgBlack", "bgWhite");
    // <i class="fa-solid fa-moon"></i>
    themeSettings.classList.replace("fa-sun", "fa-moon");
    console.log("Theme changes to beige!");
    // changing the text elements in the content-wrapper container to black for readability
    contentTextElements.forEach((element) => {
      element.style.color = "black";
    });
    sidebarTextElements.forEach((element) => {
      element.style.color = "black";
    });
  } else {
    containerFluid.classList.replace("bgWhite", "bgBlack");
    sidebar.classList.replace("bgWhite", "bgBlack");
    themeSettings.classList.replace("fa-moon", "fa-sun");
    contentTextElements.forEach((element) => {
      element.style.color = "aliceblue";
    });
    sidebarTextElements.forEach((element) => {
      element.style.color = "white";
    });
    console.log("Theme changed to black!");
  }
});

// changing the styles of the ::before elemenets in css using js {these ::before and ::after elements are called pseudo elements }

function changePseudoElementStyles(color) {
  const element = document.querySelector(".top-tag");
  const beforeElement = window.getComputedStyle(element, "::before");
  const afterElement = window.getComputedStyle(element, "::after");

  // just getting the other elements
  const element2 = document.querySelector(".image-wrapper");
  const beforeElement2 = window.getComputedStyle(element2, "::before");
  const afterElement3 = window.getComputedStyle(element2, "::after");

  // creating a new style for the element
  const newStyle = `
    .top-tag::before {
    content: " ";
    position: absolute;
    top: 30px;
    left: -2rem;
    width: 40px;
    height: 30px;
    border-left: 5px solid ${color};
    border-bottom: 5px solid ${color};
  }

  .top-tag::after {
    content: " ";
    position: absolute;
    top: -20px;
    left: 5rem;
    width: 40px;
    height: 30px;
    border-right: 5px solid ${color};
    border-top: 5px solid ${color};
  }

    .image-wrapper::after {
      content: " ";
      position: absolute;
      top: 7rem;
      right: 19rem;
      width: 120px;
      height: 80px;
      border-left: 5px solid ${color};
      border-top: 5px solid ${color};
    }

    .image-wrapper::before {
      content: " ";
      position: absolute;
      top: 28.5rem;
      right: 10px;
      width: 120px;
      height: 80px;
      border-right: 5px solid ${color};
      border-bottom: 5px solid ${color};
    }
  `;

  // appending the new style to the window document

  const stylesheet = document.createElement("style");
  stylesheet.type = "text/css";
  stylesheet.innerText = newStyle;
  document.head.appendChild(stylesheet); // this is just the normal way of appending a created element to the html main doc , simple !s
}
