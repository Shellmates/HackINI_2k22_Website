const days = [
    {
        day: "Day 01",
        date: "May 26th",
        activities: [
            {
                time: "17:00",
                activity: "Check-in"
            },
            {
                time: "18:30",
                activity: "Opening ceremony"
            },
            {
                time: "19:30",
                activity: "CTF Start"
            },
            {
                time: "21:00",
                activity: "Dinner"
            }
        ]
    },
    {
        day: "Day 02",
        date: "May 27th",
        activities: [
            {
                time: "07:30",
                activity: "Breakfast"
            },
            {
                time: "09:00 - 10:30",
                activity: "Digital forensics"
            },
            {
                time: "11:00 - 12:30",
                activity: "Docker security"
            },
            {
                time: "12:30",
                activity: "Lunch break"
            },
            {
                time: "14:30 - 16:30",
                activity: "Cryptographic Vulnerabilities"
            },
            {
                time: "16:00",
                activity: "Coffee Break"
            },
            {
                time: "16:30 - 18:00",
                activity: "Intro to Binary Exploitation"
            },
            {
                time: "21:00",
                activity: "Dinner"
            }
        ]
    },
    {
        day: "Day 03",
        date: "May 28th",
        activities: [
            {
                time: "07:30",
                activity: "CTF end, Breakfast"
            },
            {
                time: "08:30",
                activity: "Closing ceremony"
            }
        ]
    }
]

agenda = document.getElementById("agenda")

days.map(day => {
    const container = document.createElement("div")

    container.classList="flex md:gap-x-16 lg:gap-x-32"

    const titleContainer = document.createElement("div")

    titleContainer.classList = "w-28 md:w-36"

    titleContainer.innerHTML = `
        <h4 class="uppercase font-bold title-gradient text-lg md:text-3xl">${day.day}</h4>
        <h5 class="title-gradient text-base md:text-xl lg:text-2xl">${day.date}</h5>
    `

    container.append(titleContainer)

    agenda.append(container)

    const activitiesContainer = document.createElement("div")

    activitiesContainer.classList = "md:text-lg lg:text-xl xl:text-2xl grad flex flex-col gap-y-2 w-3/5 md:w-auto"

    day.activities.map(activity => {
        const activityContainer = document.createElement("div")

        activityContainer.innerHTML = `
            ${activity.time} : ${activity.activity}
        `
        activitiesContainer.append(activityContainer)
    })

    container.append(activitiesContainer)
})