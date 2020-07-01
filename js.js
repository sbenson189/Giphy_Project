// Generated GIF Contained (gifGenContainer) - Where the GIFs will be appended.
let gifLocation = document.querySelector("#gifGenContainer")

// Search Bar
const searchBar = document.querySelector("#searchBar")


// GetGIF Button
const getGIFButton = document.querySelector("#searchButton")
const gifSubmitForm = document.querySelector("#gifSubmitForm")

// Clear Button - Clears all of the generated GIFs off of the page.
const clearButton = document.querySelector("#clear")
const clearButtonContainer = document.querySelector("#clearButtonContainer")

// Listens for submit from the form and saves the value of the search entry to be sent to the API. Then calls the GET request function (getGIFS).
gifSubmitForm.addEventListener ("submit", function (event) {
    event.preventDefault();
    searchInput = searchBar.value
    getGIFS(searchInput)
})


// GET function that accepts the searchInput that the user selected and sends a GET request to the API.
async function getGIFS (searchInput) {
    try {
        returnedGIFS = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=DkYGkvzPJawK9qM0EleRDKhbQzETFsyf&q=${searchInput}&limit=25&offset=0&rating=PG-13&lang=en`)
        imageData = returnedGIFS.data
        indexCount = imageData.data.length                  // Contains the number of data objects in the array.
        num = Math.floor(Math.random () * indexCount)        // Generates random number based on the number of returned data objects.
        imageGIFS = imageData.data[num].images.original.url
        createdGIFImage = document.createElement("img")
        createdGIFImage.setAttribute("src", imageGIFS)
        createdGIFImage.setAttribute("width", "200px")
        createdGIFImage.setAttribute("height", "200px")
        gifLocation.append(createdGIFImage)
        searchBar.value = ""
    } 
    catch (error) {
        alert ("Could Not Get GIF!!")
    }
}

clearButtonContainer.addEventListener("click", function (event) {
    if (event.target = "#clear") {
     gifLocation.innerHTML = "" 
    }
    
})
































// async function getGIFS(searchInput) {
//     let returnedGIFS = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=DkYGkvzPJawK9qM0EleRDKhbQzETFsyf&q=${searchInput}&limit=25&offset=0&rating=PG-13&lang=en`)
//     console.log(returnedGIFS.data)
// }
