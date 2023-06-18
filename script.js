let apiUrl = `https://randomuser.me/api/`;
let elementsWhereWeDisplayData = document.querySelector(`.frontendApiDataToDisplay`);
let imageToDisplay = document.querySelector(`.imageToDisplay`);

fetch(apiUrl).then(resp => resp.json()).then(data => {
    let randomuser = data.results[0];
    console.log(randomuser)
    imageToDisplay.src = randomuser.picture.large;
    elementsWhereWeDisplayData.innerHTML = randomuser.name.first + ` ` + randomuser.name.last;
});