let msgs

const peer = new Peer()

peer.on('open', (id) => {
    console.log('My peer ID is: ' + id);
  });

window.api.receive("startup-connection", (id) => {
    let conn = peer.connect(id)

    conn.on('open', () => {
        console.log("open")
        conn.send("peepoo")
    })
})

peer.on('connection', (conn) => {
    console.log("connection")

    conn.on('data', (data) => {
        console.log("received: " + data)
    })
})

window.addEventListener('DOMContentLoaded', () => {

    msgs = document.getElementById("msgs")
    document.addEventListener("keypress", handle_keypress)
  })

const handle_keypress = (key) => {
    if (key.which == 13) {
        const cb = document.getElementById("chatbox")

        send_msg(cb.value)
        add_msg("handle", cb.value, "green")
        setTimeout(() => {cb.value = null}, 1) // Kinda wack but gets rid of leftover Enter
    }
}

const send_msg = async (chat) => {
    console.log(chat)
}

const add_msg = async (pref, chat, clr) => {
    const newmsg = document.createElement("div")
    const user = document.createElement("b")

    user.innerHTML = pref
    user.style.color = clr

    newmsg.append(user, ": " + chat)
    msgs.appendChild(newmsg)
    msgs.scrollTop = 100000
}