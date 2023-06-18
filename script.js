let apiUrl = `https://randomuser.me/api/`;
let elementsWhereWeDisplayData = document.querySelector(`.frontendApiDataToDisplay`);
let imageToDisplay = document.querySelector(`.imageToDisplay`);

fetch(apiUrl).then(resp => resp.json()).then(data => {
    let randomuser = data.results[0];
    imageToDisplay.src = randomuser.picture.large;
    elementsWhereWeDisplayData.innerHTML = randomuser.name.first + ` ` + randomuser.name.last;
});

let nasaAPIkey = `CwT97V0rv5h71P9USOIkWpS2qu3toeGlkYX4vrSx`;
let nasaUrl = `https://api.nasa.gov/planetary/apod?api_key=${nasaAPIkey}`;

let nasadiv = document.querySelector(`.nasaImageToDisplay`);
let nasaImage = document.querySelector(`img.nasa`);

fetch(nasaUrl).then(resp => resp.json()).then(data => {
    let imageUrl = data.hdurl;
    let imageTitle = data.title;
    nasadiv.innerHTML = imageTitle;
    nasaImage.src = imageUrl;
});