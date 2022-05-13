const speakers = [
    {
        name: "Hafidh Zouahi",
        description: "Computer Science Engineer, with A Keen interest in Security",
        picture: "https://scontent.falg2-2.fna.fbcdn.net/v/t1.6435-9/106904416_834570883950575_2444049961754063289_n.jpg?_nc_cat=105&ccb=1-6&_nc_sid=174925&_nc_eui2=AeFW8hpOv6JebeeWXDJz1DMfG6o0E_yHUOsbqjQT_IdQ62uikP860q0J_3xXljtCE0lgkjPzK4Hrki1cZdKlMXJR&_nc_ohc=4fiklAcP0LQAX86d0uQ&tn=_TZPD1ds9n9MCXVP&_nc_ht=scontent.falg2-2.fna&oh=00_AT8eU_lFipWPOXfmjOtTsfbFc94Av-6y6viL7HmK7ENihw&oe=62A15686",
        twitter: "",
        facebook: "",
        linkedin: ""
    },
    {
        name: "Hafidh Zouahi",
        description: "Computer Science Engineer, with A Keen interest in Security",
        picture: "https://scontent.falg2-2.fna.fbcdn.net/v/t1.6435-9/97486730_798197284254602_7987556761491996672_n.jpg?_nc_cat=109&ccb=1-6&_nc_sid=174925&_nc_eui2=AeHV2pKWoeJzQiuLuRaMOTuGn1Rvvwqjr76fVG-_CqOvvnQ_UkxA7nE1gtQwuwqAWcsNuMbFQ9v-Onb6hgLmfhUB&_nc_ohc=OHmkZOGt-g4AX_qrZp6&tn=_TZPD1ds9n9MCXVP&_nc_ht=scontent.falg2-2.fna&oh=00_AT9Fx3WsNdcv0LXTpbsu--uggcm0qz54Kz1Hli0IG3ItSA&oe=62A2385B",
        twitter: "",
        facebook: "",
        linkedin: ""
    },
    {
        name: "Hafidh Zouahi",
        description: "Computer Science Engineer, with A Keen interest in Security",
        picture: "https://scontent.falg2-2.fna.fbcdn.net/v/t1.6435-9/68744730_581467415927591_5572816144978411520_n.jpg?_nc_cat=109&ccb=1-6&_nc_sid=174925&_nc_eui2=AeHFWhUAQtN-0cj1RHEbfy_xfSVFcLVWhIp9JUVwtVaEijDStxqNLVDq64KIqpxyz_G3KbTg0NRA0MtbY8co4-F2&_nc_ohc=tbMk9e9cSDoAX8f3rBY&_nc_ht=scontent.falg2-2.fna&oh=00_AT8BKYWVSzOvB4UnTMG-WrydV-rJNw0wDWYxfK8jNibmrw&oe=62A201FB",
        twitter: "",
        facebook: "",
        linkedin: ""
    }
]

const container = document.getElementById("speakers")

speakers.map(speaker => {
    const card = document.createElement("div")

    card.classList = "w-60 flex flex-col mx-auto gap-y-4 my-4"

    card.innerHTML = `
        <img class="w-full h-72 object-cover" src="${speaker.picture}"/>
        <div>
            <h4 class="text-xl">${speaker.name}</h4>
            <p class="font-thin text-sm">${speaker.description}</p>
            <div class="flex gap-x-4 mt-2">
                <a href="${speaker.twitter}">
                    <i class="fa fa-twitter"></i>
                </a>
                <a href="${speaker.facebook}">
                    <i class="fa fa-facebook"></i>
                </a>
                <a href="${speaker.linkedin}">
                    <i class="fa fa-linkedin"></i>
                </a>
            </div>
        </div>
    `

    container.append(card)
})