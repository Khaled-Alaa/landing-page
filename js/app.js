/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/* Define Global Variables */
var menu = document.querySelector("ul");
var sections = document.querySelectorAll("h2");
/* End Global Variables*/

/* Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */


// build the nav
for (const section of sections) {
  var item = document.createElement("li");
  const coordinate = offset(section);
  item.addEventListener("click", function () {
    removeActivte(document.querySelectorAll("li"));
    this.setAttribute("class", "active_item");
    window.scrollTo({ top: coordinate.top - 200, behavior: "smooth" });
  });
  item.textContent = section.innerText;
  menu.appendChild(item);
}
// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

function offset(element) {
  var rect = element.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

// Set sections as active

function removeActivte(items) {
  for (const li of items) {
    li.setAttribute("class", "");
  }
}

