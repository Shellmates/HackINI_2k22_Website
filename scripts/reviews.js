const reviews = [
    {
        name: "Malik MABROUKI",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsa cumque veritatis praesentium omnis deserunt quas, quaerat vel iste fugit doloribus atque obcaecati incidunt nisi hic itaque maxime molestias perspiciatis."
    },
    {
        name: "Walid BERROUK",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsa cumque veritatis praesentium omnis deserunt quas, quaerat vel iste fugit doloribus atque obcaecati incidunt nisi hic itaque maxime molestias perspiciatis."
    },
    {
        name: "Aziz TAKOUCHE",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsa cumque veritatis praesentium omnis deserunt quas, quaerat vel iste fugit doloribus atque obcaecati incidunt nisi hic itaque maxime molestias perspiciatis."
    }
]

const reviewsContainer = document.getElementById("reviews")

reviews.map((review,index) => {
    const reviewCard = document.createElement("div")

    reviewCard.classList = "w-60 flex flex-col items-center mx-auto justify-between gap-y-2 my-4"

    reviewCard.innerHTML = `
        <h4 class="text-2xl md:text-3xl">${review.name}</h4>
        <p class="text-justify font-light md:text-lg">${review.details}</p>
    `

    reviewsContainer.append(reviewCard)
})