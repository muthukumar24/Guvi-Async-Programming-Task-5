function fetchFact(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => response.json())
        .then(data => resolve(data.text))
        .catch(error => reject(error));
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const todayFact = document.getElementById("todayFact");
    const randomFact = document.getElementById("randomFact");
    const todayBtn = document.getElementById("todayBtn");
    const randomBtn = document.getElementById("randomBtn");

    todayBtn.addEventListener("click", () => {
        fetchFact("https://uselessfacts.jsph.pl/api/v2/facts/today?language=en")
        .then(fact => {
            todayFact.textContent = fact;
        })
        .catch(error => {
            todayFact.textContent = "Failed to fetch today's fact. Please try again later.";
            console.error("Error fetching today's fact:", error);
        });
    });

    randomBtn.addEventListener("click", () => {
        fetchFact("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")
        .then(fact => {
            randomFact.textContent = fact;
        })
        .catch(error => {
            randomFact.textContent = "Failed to fetch random fact. Please try again later.";
            console.error("Error fetching random fact:", error);
        });
    });
});