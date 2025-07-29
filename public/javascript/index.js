const submitButton = document.getElementById("submit")
const preview = document.getElementById("preview")

submitButton.addEventListener("click", (event) => {
    event.preventDefault()
    handleFiles()
})

function handleFiles() {

    const files = document.getElementById("txt-input").files
    if (!files[0].type.startsWith("text")) {
        console.error("Wrong filetype!!")
        window.alert("Tipo errado de arquivo!")
        return;
    }
    const text = document.createElement("p")
    text.classList.add("obj")
    text.file = files[0]
    preview.appendChild(text)


    const reader = new FileReader();
    reader.onload = (e) => {
        text.innerText = e.target.result
    }
    reader.readAsText(files[0])

}

