pictures = [
    "https://res.cloudinary.com/shellmates-club/image/upload/v1641238403/bsides_site/gallery/IMG_20211109_171827_avn9cm.jpg",
    "https://res.cloudinary.com/shellmates-club/image/upload/v1641238202/bsides_site/gallery/IMG_5511_o5hdqb.jpg",
    "https://res.cloudinary.com/shellmates-club/image/upload/v1641160562/bsides_site/gallery/res-console.cloudinary_qdc7nk.jpg",
    "https://res.cloudinary.com/shellmates-club/image/upload/v1606914655/bsides_site/gallery/1_nzrxaa.jpg",
    "https://res.cloudinary.com/shellmates-club/image/upload/v1606914663/bsides_site/gallery/8_wwgcxb.jpg",
    "https://res.cloudinary.com/shellmates-club/image/upload/v1641238271/bsides_site/gallery/IMG_20210703_165444_lp9upj.jpg",
    "https://res.cloudinary.com/shellmates-club/image/upload/v1641238403/bsides_site/gallery/IMG_20211109_171827_avn9cm.jpg",
    "https://res.cloudinary.com/shellmates-club/image/upload/v1641238202/bsides_site/gallery/IMG_5511_o5hdqb.jpg",
    "https://res.cloudinary.com/shellmates-club/image/upload/v1641160562/bsides_site/gallery/res-console.cloudinary_qdc7nk.jpg",
    "https://res.cloudinary.com/shellmates-club/image/upload/v1606914655/bsides_site/gallery/1_nzrxaa.jpg",
]

const gallery = document.getElementById("gallery")

pictures.map(picture => {
    const container = document.createElement("div")

    container.classList.add("slide")

    container.innerHTML = `
        <img src="${picture}" class="w-[300px] mx-[10px] h-[200px] object-cover"/>
    `
    gallery.append(container)
})