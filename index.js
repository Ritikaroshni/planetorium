var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

var image = document.getElementById("img");
var paragraph = document.getElementById("content");
var image = document.getElementById("img");

paragraph.textContent = "Third Planet from the Sun and only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun,physical properties and geological history have allowed life to evolve and thrive.";

var contentMap = {
    div1: "Third Planet from the Sun and only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun,physical properties and geological history have allowed life to evolve and thrive.",

    div2: "Earth's interior like that of the other terrestrial planets is divided into layers by their chemical or physical(rheological) properties. The outer layer is a chemically distinct silicate solid crust which is underlain by a highly viscous solid.",

    div3: "Earth's geology is the study of its structure, composition, and processes that have shaped its surface over billions of years. It encompasses the study of rocks, minerals, plate tectonics, earthquakes, volcanoes, and the evolution of landscapes."
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
    changeImageSource('./img/planet-earth.svg');
});

btn2.addEventListener('click', () => {
    changeImageSource('./img/planet-earth-internal.svg');
});

btn3.addEventListener('click', () => {
    changeImageSource('./img/earth-geology.png');
});



function changeParagraphContent(newContent) {
    paragraph.textContent = newContent;
}

// Event listeners for buttons
btn1.addEventListener('click', () => {
    changeParagraphContent('Third Planet from the Sun and only known planet to harbor life. About 29.2% of Earths surface is land with remaining 70.8% is covered with water. Earths distance from the Sun,physical properties and geological history have allowed life to evolve and thrive.');
});

btn2.addEventListener('click', () => {
    changeParagraphContent('Earths interior like that of the other terrestrial planets is divided into layers by their chemical or physical(rheological) properties. The outer layer is a chemically distinct silicate solid crust which is underlain by a highly viscous solid.');
});

btn3.addEventListener('click', () => {
    changeParagraphContent('Earths geology is the study of its structure, composition, and processes that have shaped its surface over billions of years. It encompasses the study of rocks, minerals, plate tectonics, earthquakes, volcanoes, and the evolution of landscapes.');
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
    div1: "./img/planet-earth.svg",
    div2: "./img/planet-earth-internal.svg",
    div3: "./img/earth-geology.png"
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


window.onload = function(){
    const mobile_menu = document.querySelector('.mobileview');
    const menu_btn = document.querySelector('.hamburger');
    menu_btn.addEventListener('click',function(){
        menu_btn.classList.toggle('isactive'); 
        mobile_menu.classList.toggle('isactive');
    })
}
