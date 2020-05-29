//html ids for the input boxes
var firstName = document.getElementById('fName');
var lastName = document.getElementById('lName');
var email = document.getElementById('emailA');
var heard = document.getElementById('fromWho');
//html ids to paste on screen under form box
var F = document.getElementById('FirstN');
var L = document.getElementById('LastN');
var E = document.getElementById('Email');
var X = document.getElementById('Heard');

//function that pastes from input boxes to <p>
function changeName(f,l,e,x)
{
    f.innerHTML = firstName.value;
    l.innerHTML = lastName.value;
    e.innerHTML = email.value;
    x.innerHTML = heard.value;
}


//html ids for the main images
var Main = document.getElementById('mainImage');
var Pono = document.getElementById('ponca');
var Cong = document.getElementById('congo');
var WHouse = document.getElementById('house');
var Lake = document.getElementById('lake');

function swappableImage(image)
{
    Main.src = image.src
}

// function newImages()
// {
//     Pono.src = "images/band.png"
//     Cong.src = "images/detroit.jpeg"
//     WHouse.src = "images/meHiking.jpeg"
//     Lake.src = "images/ship.jpeg"
// }

// var newimage = document.getElementById('mainImage').addEventListener("click",newImages);

//These are the main Images on the broswer
var displayedImages = [Pono,Cong,WHouse,Lake];

//These are the first set of images
var displayImage1 = 
    [
    "images/PoncaVeiw.jpeg",
    "images/Congres.jpeg",
    "images/whiteHouse.jpeg",
    "images/lakeMichigan.jpeg"
    ];

//These are the second set of images
var displayImage2 = 
[
"images/band.png",
"images/detroit.jpeg",
"images/meHiking.jpeg",
"images/ship.jpeg"
]

//Takes variable one and sets it equal to variable two
function arraySwapImage(_array1, array2)
{
    _array1.src = array2;
}

//This changes the main set of images to the first set of images
function primaryImages()
{
    for (var i = 0; i < displayImage1.length; i++)
    {
        arraySwapImage(displayedImages[i],displayImage1[i]);
    }  
}
//This changes the main set of images to the second set of images
function secondaryImages()
{
    for (var i = 0; i < displayImage2.length; i++)
    {
        arraySwapImage(displayedImages[i],displayImage2[i]);
    }      
}


//Sets a click function for chooseImageArray
document.getElementById('mainImage').addEventListener('click',chooseImageArray);

/*These were/are debuging lines to test */
// document.getElementById('mainImage').addEventListener('click',primaryImages);
// document.getElementById('mainImage').addEventListener('click',secondaryImages);


//----------------Needs Work----------//
//Checks to see which set of images are displayed and changes to oppisite set for the click event

var _firstImage = displayedImages[0];
function chooseImageArray()
{
    //doesn't work :(
    if(displayedImages[0].src == displayImage1[0]){
        secondaryImages();
    }
    else if(displayedImages[0].src == displayImage2[0]){
        primaryImages();
    }
    else 
    {
        console.log(displayedImages[0].src);
        console.log(displayImage1[0]);
    }
}
//--------------------------------------//


var imageNum = -1;
setInterval(imageInterval,3000)



function timedSwappableImage(image)
{
    Main.src = image;
}

function imageInterval()
{
    imageNum += 1;
    timedSwappableImage(displayedImages[imageNum].src);
    
    if (imageNum == 3) 
    {
        //from line 101
        chooseImageArray();
        imageNum = -1;
    }
    else {"error"}
    
}