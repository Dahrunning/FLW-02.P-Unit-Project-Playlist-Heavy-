// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
let images = ["https://upload.wikimedia.org/wikipedia/en/9/97/DittoNewJeans.jpg", "https://i.scdn.co/image/ab67616d00001e0287f53da5fb4ab1171766b2d5", "https://i.scdn.co/image/ab67616d0000b273b88a1e33abc02c7c919c909b", "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Everything_Goes_On_single_cover.jpg/220px-Everything_Goes_On_single_cover.jpg"];
let songNames = ["Ditto", "After Like", "Cinderella", "Everything Goes On",];
let artists = ["NewJeans", "IVE", "DECO*27", "Porter Robinson",];
let songLinks = ["https://www.youtube.com/watch?v=-g9I2neQR7w", "https://www.youtube.com/watch?v=CVxTT38_J4c", "https://www.youtube.com/watch?v=adGhT_-JbZI", "https://www.youtube.com/watch?v=eEFVxI9lqjU",];




//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

  // task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.

  let userImg = image.value;
  let userSong = songName.value;
  let userArtist = artist.value;
  let userLink = songLink.value;


  // task 10: use `.push()` to add each input value to the correct array.

  images.push(userImg);
  songNames.push(userSong);
  artists.push(userArtist);
  songLinks.push(userLink);
}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";

}




function displaySongInfo() {
  // task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.

  for (let i = 0; i < images.length; i++) {
    displayImage.insertAdjacentHTML('beforeend', `<p><img src=${images[i]}></p>`)
  }

  for (let j = 0; j < songNames.length; j++) {
    displaySong.insertAdjacentHTML('beforeend', `<p>${songNames[j]}</p>`)
  }

  for (let i = 0; i < artists.length; i++) {
    displayArtist.insertAdjacentHTML('beforeend', `<p>${artists[i]}</p>`)
  }

  for (let i = 0; i < songLinks.length; i++) {
    displayLink.insertAdjacentHTML('beforeend', `<a href="${songLinks[i]}"> Link ! Click Me ! </a>`)
  }

};



// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  emptyDisplay();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
