//your JS code here. If required.
const data = [
    {
        img: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        text: "Explore The World"
    },
    {
        img: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        text: "Wild Forest"
    },
    {
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
        text: "City on Winter"
    },
    {
        img: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
        text: "Mountain Cloud"
    },
    {
        img: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        text: "Sunny Beach"
    }
];

const container = document.getElementById("container");

// generate all panels dynamically
data.forEach((item, index) => {
    const panel = document.createElement("div");
    panel.className = "panel";
    panel.id = `panel-${index + 1}`;
    panel.style.backgroundImage = `url(${item.img})`;

    panel.innerHTML = `<p class="img-text">${item.text}</p>`;
    container.appendChild(panel);
});

// default first active
document.getElementById("panel-1").classList.add("active");

// add click event
const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener("click", () => {
        removeActive();
        panel.classList.add("active");
    });
});

function removeActive() {
    panels.forEach(p => p.classList.remove("active"));
}
