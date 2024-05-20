var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

var image = document.getElementById("img");
var paragraph = document.getElementById("content");
var image = document.getElementById("img");

paragraph.textContent = "Mercury, our solar system's innermost planet, exhibits extreme temperatures, from scorching days to freezing nights due to its thin atmosphere. Its surface features craters, cliffs, and plains, fascinating scientists for exploration.";

var contentMap = {
    div1: "Mercury, our solar system's innermost planet, exhibits extreme temperatures, from scorching days to freezing nights due to its thin atmosphere. Its surface features craters, cliffs, and plains, fascinating scientists for exploration.",

    div2: "Mercury's internal structure consists of a solid iron-nickel core, accounting for about 60% of its mass. Surrounding this core is a partially molten silicate mantle. A thin crust, marked by impact craters, covers the surface.",

    div3: "Mercury's geology is characterized by a variety of features such as impact craters, extensive plains, and prominent scarps or cliffs. These formations suggest a complex history shaped by volcanic activity, tectonic forces."
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
    changeImageSource('./img/planet-mercury.svg');
});

btn2.addEventListener('click', () => {
    changeImageSource('./img/planet-mercury-internal.svg');
});

btn3.addEventListener('click', () => {
    changeImageSource('./img/mercury_geology.png');
});



function changeParagraphContent(newContent) {
    paragraph.textContent = newContent;
}

// Event listeners for buttons
btn1.addEventListener('click', () => {
    changeParagraphContent('Mercury, our solar system innermost planet, exhibits extreme temperatures, from scorching days to freezing nights due to its thin atmosphere. Its surface features craters, cliffs, and plains, fascinating scientists for exploration.');
});

btn2.addEventListener('click', () => {
    changeParagraphContent('Mercury internal structure consists of a solid iron-nickel core, accounting for about 60% of its mass. Surrounding this core is a partially molten silicate mantle. A thin crust, marked by impact craters, covers the surface.');
});

btn3.addEventListener('click', () => {
    changeParagraphContent('Mercury geology is characterized by a variety of features such as impact craters, extensive plains, and prominent scarps or cliffs. These formations suggest a complex history shaped by volcanic activity, tectonic forces.');
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
    div1: "./img/planet-mercury.svg",
    div2: "./img/planet-mercury-internal.svg",
    div3: "./img/mercury_geology.png"
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
