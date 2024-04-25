// fetchFact function with URL as paramter
function fetchFact(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => response.json()) 
        .then(data => resolve(data.text)) // to handle resolved response
        .catch(error => reject(error)); // to handle rejected response
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const todayFact = document.getElementById("todayFact"); // getting today fact content area's id
    const randomFact = document.getElementById("randomFact"); // getting random fact content area's id
    const todayBtn = document.getElementById("todayBtn"); // getting today fact button's id
    const randomBtn = document.getElementById("randomBtn"); // getting random fact button's id

    todayBtn.addEventListener("click", () => {
        // Calling fetchFact function with URL argument for today fact
        fetchFact("https://uselessfacts.jsph.pl/api/v2/facts/today?language=en") 
        .then(fact => {
            todayFact.textContent = fact; // Adding today fact into todayFact area
        })
        .catch(error => {
            // Adding error message into todayFact area if api unable to fetch datas
            todayFact.textContent = "Failed to fetch today's fact. Please try again later.";
            console.error("Error fetching today's fact:", error);
        });
    });

    randomBtn.addEventListener("click", () => {
        // Calling fetchFact function with URL argument for random fact
        fetchFact("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en") 
        .then(fact => {
            randomFact.textContent = fact; // Adding today fact into randomFact area
        })
        .catch(error => {
            // Adding error message into randomFact area if api unable to fetch datas
            randomFact.textContent = "Failed to fetch random fact. Please try again later.";
            console.error("Error fetching random fact:", error);
        });
    });
});