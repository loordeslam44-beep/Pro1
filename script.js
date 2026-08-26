function filterPlaces() {
    const search = document.getElementById("searchInput").value.toLowerCase();
    const location = document.getElementById("locationSelect").value.toLowerCase();
    const type = document.getElementById("typeSelect").value.toLowerCase();
    const rating = document.getElementById("ratingSelect").value;
    const open = document.getElementById("openNow").checked;

    document.querySelectorAll(".place").forEach(card => {
        const text = card.innerText.toLowerCase();

        const show =
            text.includes(search) &&
            (location == "all" || text.includes(location)) &&
            (type == "all" || text.includes(type)) &&
            (rating == "0" || text.includes(rating)) &&
            (!open || text.includes("open"));

        if (show) {
        card.style.display = "flex";
        } else {
        card.style.display = "none";
        }
        });
}

document.getElementById("applyBtn").onclick = filterPlaces;

document.getElementById("clearBtn").onclick = function () {
    document.getElementById("searchInput").value = "";
    document.getElementById("locationSelect").value = "all";
    document.getElementById("typeSelect").value = "all";
    document.getElementById("ratingSelect").value = "0";
    document.getElementById("openNow").checked = false;

    filterPlaces();
};