window.addEventListener('DOMContentLoaded', () => {

    document.querySelector("#connectbtn").addEventListener("click", get_connection)
    document.addEventListener("keypress", handle_keypress)
  })

const get_connection = async () => {
    const id = document.getElementById("con_id").value

    console.log("Entered: " + id)
    // validate

    const element = document.getElementById("connectdiv")
    element.innerHTML = "<p>Connecting...</p>"

    window.location = "../html/chat.html"
}

const handle_keypress = (key) => {
    if (key.which == 13){
        document.getElementById("connectbtn").click();
    }
}
