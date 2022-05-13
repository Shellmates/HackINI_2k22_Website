const days = [
    {
        day: "Day 01",
        date: "May 19th",
        activities: [
            {
                time: "00:00",
                activity: "Conferance/Workshop"
            },
            {
                time: "00:00",
                activity: "Conferance/Workshop"
            },
            {
                time: "00:00",
                activity: "Conferance/Workshop"
            }
        ]
    },
    {
        day: "Day 02",
        date: "May 20th",
        activities: [
            {
                time: "00:00",
                activity: "Conferance/Workshop"
            },
            {
                time: "00:00",
                activity: "Conferance/Workshop"
            },
            {
                time: "00:00",
                activity: "Conferance/Workshop"
            },
            {
                time: "00:00",
                activity: "Conferance/Workshop"
            }
        ]
    },
    {
        day: "Day 03",
        date: "May 21th",
        activities: [
            {
                time: "00:00",
                activity: "Conferance/Workshop"
            },
            {
                time: "00:00",
                activity: "Conferance/Workshop"
            }
        ]
    }
]

agenda = document.getElementById("agenda")

days.map(day => {
    const container = document.createElement("div")

    container.classList="flex md:gap-x-16 lg:gap-x-32"

    const titleContainer = document.createElement("div")

    titleContainer.classList = "w-36"

    titleContainer.innerHTML = `
        <h4 class="uppercase font-bold title-gradient text-lg md:text-3xl">${day.day}</h4>
        <h5 class="title-gradient text-base md:text-xl lg:text-2xl">${day.date}</h5>
    `

    container.append(titleContainer)

    agenda.append(container)

    const activitiesContainer = document.createElement("div")

    activitiesContainer.classList = "md:text-lg lg:text-xl xl:text-2xl grad flex flex-col gap-y-2"

    day.activities.map(activity => {
        const activityContainer = document.createElement("div")

        activityContainer.innerHTML = `
            ${activity.time} Activity : ${activity.activity}
        `
        activitiesContainer.append(activityContainer)
    })

    container.append(activitiesContainer)
})