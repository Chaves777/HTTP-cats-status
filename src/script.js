const URL = "https://http.cat"
const btnCat = document.getElementById("getCat")
const statusInput = document.getElementById("statusCode")
const catContainer = document.getElementById("catContainer")


function fetchCat() {
    const statusCode = statusInput.value.trim()
    if (!statusCode) {
        alert("Digite um código HTTP!")
        return
    }

    const imageUrl = `${URL}/${statusCode}`

    const img = new Image()
    img.src = imageUrl

    img.addEventListener("load", function () {
        catContainer.innerHTML = `<img src="${imageUrl}" alt="HTTP Cat" width="400">`
    })
    
}

btnCat.addEventListener("click", fetchCat)
img()

