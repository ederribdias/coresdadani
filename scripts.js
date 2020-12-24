// Make Cards
const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const videos = [{
        title: "Flip Through: Romantic Country The Second Tale | Japanese Coloring Book By Eriy",
        duration: "6 min",
        thumb: "https://i.ytimg.com/vi/eeWXzz_MOu8/hqdefault.jpg",
        video_id: "eeWXzz_MOu8"
    },
    {
        title: "Flip Through: Romantic Country The Third Tale | Japanese Coloring Book by Eriy",
        duration: "6 min",
        thumb: "https://i.ytimg.com/vi/hiJw3NZshi0/hqdefault.jpg",
        video_id: "hiJw3NZshi0"
    }
    /*,
        {
            title: "Array: Higher Order Functions | Mayk Brito",
            duration: "54 min",
            thumb: "https://i.ytimg.com/vi/rAzHvYnQ8DY/hqdefault.jpg",
            video_id: "rAzHvYnQ8DY"
        },
        {
            title: "O que é API? REST e RESTful? | Mayk Brito",
            duration: "33 min",
            thumb: "https://i.ytimg.com/vi/ghTrp1x_1As/hqdefault.jpg",
            video_id: "ghTrp1x_1As"
        },
        {
            title: "Desvendando a variável this no Javascript | Mayk Brito",
            duration: "48 min",
            thumb: "https://i.ytimg.com/vi/GSqR2i-Pq6o/hqdefault.jpg",
            video_id: "GSqR2i-Pq6o"
        },
        {
            title: "Como usar Git e Github na prática: Guia para iniciantes | Mayk Brito",
            duration: "33 min",
            thumb: "https://i.ytimg.com/vi/2alg7MQ6_sI/hqdefault.jpg",
            video_id: "2alg7MQ6_sI"
        }*/
];

videos.map(video => {
    const cardClone = card.cloneNode(true);
    cardClone.setAttribute("id", video.video_id);
    cardClone.querySelector("img").src = video.thumb;
    cardClone.querySelector(".title").innerHTML = video.title;
    cardClone.querySelector(".info > p.text--medium").innerHTML =
        video.duration;
    sectionCards.appendChild(cardClone);
});

card.remove();

// Modal actions
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = [...document.querySelectorAll(".cards .card")];

cards.forEach(card => {
    card.addEventListener("click", () => {
        modal.querySelector(
            "iframe"
        ).src = `https://www.youtube.com/embed/${card.getAttribute("id")}`;
        modalOverlay.classList.add("active");
        modal.classList.add("active");
        document.querySelector("body").style.overflow = "hidden";
    });
});

document.querySelector(".close-modal").addEventListener("click", () => {
    modalOverlay.classList.remove("active");
    modal.classList.remove("active");
    modal.querySelector("iframe").src = ``;
    document.querySelector("body").style.overflow = "initial";
});