const characterInfo = document.querySelector('.character-info')
const searchButton = document.querySelector('#submit-search')
console.log('Kom ihåg att du kan använda console.log för felsökning!')


// Trigger getInfo function when button is clicked
searchButton.addEventListener('click', getInfo)


async function getInfo() {
    const baseUrl = 'https://swapi.dev/api/people/10/'
    const settings = {
        method: 'GET',
        contentType: 'application/json'
    }

    //Fetch data from the API
    const response = await fetch(baseUrl, settings)
    //Parse (examine) the JSON response
    const data = await response.json()

    //Extract info from the API data
    const characterName = data.name
    const characterHeight = data.height
    const characterMass = data.mass
    const characterHairColor = data.hair_color //OBS! Stavningen måste stämma med API datan
    const characterSkinColor = data.skin_color
    const characterEyeColor = data.eye_color
    const characterBirthyear = data.birth_year
    const characterGender = data.gender

//Display as a list
    characterInfo.innerText = `
    Name: ${characterName}
    Height: ${characterHeight}
    Mass: ${characterMass}
    Hair Color: ${characterHairColor}
    Skin Color: ${characterSkinColor}
    Eye Color: ${characterEyeColor}
    Birth Year: ${characterBirthyear}
    Gender: ${characterGender}

`;


    /* Display as text: characterInfo.innerText = ('Name: ' + characterName + ', Height: ' + characterHeight + ', Mass: ' + characterMass + ', Hair Color: ' + characterHairColor + ', Skin color: ' + characterSkinColor + ', Eye color: ' + characterEyeColor + ', Birth year: ' + characterBirthyear + ', Gender: ' + characterGender)*/
}


