// navbar menu responsive behavior code start
const openMenuBtn = document.querySelector("span#openNavMenuBtn");
const closeMenuBtn = document.querySelector("span#closeNavMenuBtn");
const navMenu = document.querySelector("nav ul");

function openNavMenu() {
  openMenuBtn.style.display = "none";
  closeMenuBtn.style.display = "block";
  navMenu.style.display = "block";
}
function closeNavMenu() {
  openMenuBtn.style.display = "block";
  closeMenuBtn.style.display = "none";
  navMenu.style.display = "none";
}

let lastWidth = window.innerWidth;
let hasReloaded = false;

window.addEventListener("resize", function () {
  const currentWidth = window.innerWidth;

  if (!hasReloaded && lastWidth < 768 && currentWidth >= 768) {
    hasReloaded = true;
    location.reload();
  }

  lastWidth = currentWidth;
});
// navbar menu responsive behavior code end

// calculator logic code start

const VARdisplay = document.querySelector("#display");
let result = VARdisplay.value;

{
  // const VARopenBracket = document.querySelector("#IDopen");
  // const VARcloseBracket = document.querySelector("#IDclose");
  // const VARbackspace = document.querySelector("#IDbackspace");
  // const VARclear = document.querySelector("#IDclear");
  // const VARseven = document.querySelector("#IDseven");
  // const VAReight = document.querySelector("#IDeight");
  // const VARnine = document.querySelector("#IDnine");
  // const VARdivide = document.querySelector("#IDdivide");
  // const VARfour = document.querySelector("#IDfour");
  // const VARfive = document.querySelector("#IDfive");
  // const VARsix = document.querySelector("#IDsix");
  // const VARmultiply = document.querySelector("#IDmultiply");
  // const VARone = document.querySelector("#IDone");
  // const VARtwo = document.querySelector("#IDtwo");
  // const VARthree = document.querySelector("#IDthree");
  // const VARsubtract = document.querySelector("#IDsubtract");
  // const VARzero = document.querySelector("#IDzero");
  // const VARdecimal = document.querySelector("#IDdecimal");
  // const VARequals = document.querySelector("#IDequals");
  // const VARadd = document.querySelector("#IDadd");
}

function bracketOpen() {
  VARdisplay.value += "(";
}

function bracketClose() {
  VARdisplay.value += ")";
}

function backspace() {
  // Remove the last character from the display
  VARdisplay.value = VARdisplay.value.slice(0, -1);
}

function clearDisplay() {
  VARdisplay.value = "";
}

function seven() {
  VARdisplay.value += "7";
}

function eight() {
  VARdisplay.value += "8";
}

function nine() {
  VARdisplay.value += "9";
}

function divide() {
  // Check if the last character is not a division sign
  if (
    !VARdisplay.value.endsWith("/") &&
    !VARdisplay.value.endsWith("*") &&
    !VARdisplay.value.endsWith("+") &&
    !VARdisplay.value.endsWith("-")
  ) {
    VARdisplay.value += "/";
  }
}

function four() {
  VARdisplay.value += "4";
}

function five() {
  VARdisplay.value += "5";
}

function six() {
  VARdisplay.value += "6";
}

function multiply() {
  // Check if the last character is not a multiplication sign
  if (
    !VARdisplay.value.endsWith("*") &&
    !VARdisplay.value.endsWith("/") &&
    !VARdisplay.value.endsWith("+") &&
    !VARdisplay.value.endsWith("-")
  ) {
    VARdisplay.value += "*";
  }
}

function one() {
  VARdisplay.value += "1";
}

function two() {
  VARdisplay.value += "2";
}

function three() {
  VARdisplay.value += "3";
}

function subtract() {
  // Check if the last character is not a subtraction sign
  if (
    !VARdisplay.value.endsWith("-") &&
    !VARdisplay.value.endsWith("/") &&
    !VARdisplay.value.endsWith("*") &&
    !VARdisplay.value.endsWith("+")
  ) {
    VARdisplay.value += "-";
  }
}

function zero() {
  VARdisplay.value += "0";
}

function decimal() {
  if (
    !VARdisplay.value.endsWith(".") &&
    !VARdisplay.value.endsWith("/") &&
    !VARdisplay.value.endsWith("*") &&
    !VARdisplay.value.endsWith("+") &&
    !VARdisplay.value.endsWith("-") &&
    !VARdisplay.value.endsWith("(") &&
    !VARdisplay.value.endsWith(")")
  ) {
    VARdisplay.value += ".";
  }
}

function equals() {
  try {
    result = VARdisplay.value;
    VARdisplay.value = eval(result);
  } catch (error) {
    VARdisplay.value = "Error";
    window.setTimeout(() => {
      VARdisplay.value = "";
    }, 1500);
  }
}

function add() {
  if (
    !VARdisplay.value.endsWith("/") &&
    !VARdisplay.value.endsWith("*") &&
    !VARdisplay.value.endsWith("+") &&
    !VARdisplay.value.endsWith("-")
  ) {
    VARdisplay.value += "+";
  }
}
