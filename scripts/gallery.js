pictures = [
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
]

const gallery = document.getElementById("gallery")

pictures.map(picture => {
    const container = document.createElement("div")

    container.classList.add("slide")

    container.innerHTML = `
        <img src="${picture}" class="w-[300px] mx-[10px] h-[200px] object-cover"/>
    `
    console.log(container.innerHTML)
    gallery.append(container)
})