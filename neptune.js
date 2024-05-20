var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

var image = document.getElementById("img");
var paragraph = document.getElementById("content");
var image = document.getElementById("img");

paragraph.textContent = "Neptune, the enigmatic ice giant, resides in the outer realms of our solar system. Its brilliant azure hue, tumultuous storms, and intricate ring system are a testament to its profound mysteries. A 164-year sojourn around the Sun adds to its celestial allure.";

var contentMap = {
    div1: "Neptune, the enigmatic ice giant, resides in the outer realms of our solar system. Its brilliant azure hue, tumultuous storms, and intricate ring system are a testament to its profound mysteries. A 164-year sojourn around the Sun adds to its celestial allure.",

    div2: "Beneath Neptune's ethereal facade lies a concealed wonder: a core of rock and metal surrounded by layers of icy, pressurized water, methane, and ammonia. This distant giant beckons exploration of its hidden realms.",

    div3: "Neptune's geology is a captivating tableau of swirling azure storms and icy wonders. Its turbulent atmosphere conceals mysteries of dynamic winds, while moon Triton reveals geysers and frozen plains, presenting a celestial canvas of intrigue and beauty."
};


//Function to add active to all buttons
function handleButtonClick(button) {
    // Remove the "active" class from all buttons
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');

    // Add the "active" class to the clicked button
    button.classList.add('active');
}

// Add click event listeners to the buttons
btn1.addEventListener('click', () => {
    handleButtonClick(btn1);
});

btn2.addEventListener('click', () => {
    handleButtonClick(btn2);
});

btn3.addEventListener('click', () => {
    handleButtonClick(btn3);
});



function changeImageSource(newSource) {
    image.src = newSource;
}

// Event listeners for buttons
btn1.addEventListener('click', () => {
    changeImageSource('./img/planet-neptune.svg');
});

btn2.addEventListener('click', () => {
    changeImageSource('./img/planet-neptune-internal.svg');
});

btn3.addEventListener('click', () => {
    changeImageSource('./img/neptune_geology.png');
});



function changeParagraphContent(newContent) {
    paragraph.textContent = newContent;
}

// Event listeners for buttons
btn1.addEventListener('click', () => {
    changeParagraphContent('Neptune, the enigmatic ice giant, resides in the outer realms of our solar system. Its brilliant azure hue, tumultuous storms, and intricate ring system are a testament to its profound mysteries. A 164-year sojourn around the Sun adds to its celestial allure.');
});

btn2.addEventListener('click', () => {
    changeParagraphContent('Beneath Neptune ethereal facade lies a concealed wonder: a core of rock and metal surrounded by layers of icy, pressurized water, methane, and ammonia. This distant giant beckons exploration of its hidden realms.');
});

btn3.addEventListener('click', () => {
    changeParagraphContent('Neptune geology is a captivating tableau of swirling azure storms and icy wonders. Its turbulent atmosphere conceals mysteries of dynamic winds, while moon Triton reveals geysers and frozen plains, presenting a celestial canvas of intrigue and beauty.');
});









// Function to remove the "active" class from all divs
function removeAllActiveClasses() {
    div1.classList.remove("active");
    div2.classList.remove("active");
    div3.classList.remove("active");
}

// Function to handle the click event
function handleDivClick(event) 
{
  // Remove the "active" class from all divs
    removeAllActiveClasses();

    // Add the "active" class to the clicked div
    event.target.classList.add("active");
}

// Function to change the content of the paragraph
function changeParagraphOnClick(event) {
    // Get the ID of the clicked div
    var clickedDivId = event.target.id;
    
    // Get the corresponding content from the map
    var content = contentMap[clickedDivId];
    
    // Change the content of the paragraph
    paragraph.textContent = content;
}

// Add click event listeners to each div
div1.addEventListener("click", handleDivClick);
div2.addEventListener("click", handleDivClick);
div3.addEventListener("click", handleDivClick);
div1.addEventListener("click", changeParagraphOnClick);
div2.addEventListener("click", changeParagraphOnClick);
div3.addEventListener("click", changeParagraphOnClick);






// Define image URLs for each div
var imageUrls = 
{
    div1: "./img/planet-neptune.svg",
    div2: "./img/planet-neptune-internal.svg",
    div3: "./img/neptune_geology.png"
};

// Function to change the displayed image
function changeImageOnClick(event) 
{
    // Get the ID of the clicked div
    var clickedDivId = event.target.id;
    // Get the corresponding image URL from the map
    var imageUrl = imageUrls[clickedDivId];

    // Change the source of the displayed image
    image.src = imageUrl;
}

// Add click event listeners to each div
div1.addEventListener("click", changeImageOnClick);
div2.addEventListener("click", changeImageOnClick);
div3.addEventListener("click", changeImageOnClick);



// -----------------------------nav bar----------------------------------------
// const navLinks = document.querySelectorAll('.nav-link');


// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         // Remove the "active" class from all links
//         navLinks.forEach(otherLink => {
//             otherLink.classList.remove('active');
//         });
        
//         // Add the "active" class to the clicked link
//         link.classList.add('active');
//     });
// });


// const anchors = document.querySelectorAll('a');
// const selectedPlanetText = document.getElementById('selectedPlanet');

// anchors.forEach((anchor) => {
//     anchor.addEventListener('click', (e) => {
//         e.preventDefault();
//         const planetName = anchor.id;
//         selectedPlanetText.textContent = planetName;
//     });
// });

window.onload = function(){
    const mobile_menu = document.querySelector('.mobileview');
    const menu_btn = document.querySelector('.hamburger');
    menu_btn.addEventListener('click',function(){
        menu_btn.classList.toggle('isactive'); 
        mobile_menu.classList.toggle('isactive');
    })
}
