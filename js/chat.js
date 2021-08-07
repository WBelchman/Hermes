window.addEventListener('DOMContentLoaded', () => {

    document.addEventListener("keypress", handle_keypress)
  })

const handle_keypress = (key) => {
    if (key.which == 13) {
        let cb = document.getElementById("chatbox")

        send_msg(cb.value)
        setTimeout(() => {cb.value = null}, 1) // Kinda wack
    }
}

const send_msg = async (chat) => {
    console.log(chat)
}