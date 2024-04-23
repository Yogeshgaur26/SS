// Shop Now button click event
document.getElementById('shop-now-btn').addEventListener('click', () => alert('You clicked the "Shop Now" button!'));

// Search form submission and product filtering
document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");

    searchForm.addEventListener("submit", event => {
        event.preventDefault();
        const searchTerm = searchInput.value.trim().toLowerCase();
        document.querySelectorAll(".product").forEach(product => {
            const productName = product.querySelector("h3").textContent.toLowerCase();
            product.style.display = productName.includes(searchTerm) ? "block" : "none";
        });
    });
});