document.addEventListener("DOMContentLoaded", function() {
    // Select the h1 element by its ID
    const headerTitle = document.getElementById("titlething");
    
    // Change the text content dynamically
    headerTitle.textContent = "Hello from JavaScript!";
    
    // Create paragraph elements
    const elapsedParagraph = document.createElement("p");
    const remainingParagraph = document.createElement("p");
    
    // Calculate days elapsed since Feb 19, 2025
    function calculateDaysElapsed() {
        const startDate = new Date("2025-02-19");
        const currentDate = new Date();
        const timeDifference = currentDate - startDate;
        console.log(timeDifference)
        return timeDifference / (1000 * 60 * 60 * 24);
    }
    
    // Calculate days remaining until Mar 31, 2025
    function calculateDaysRemaining() {
        const endDate = new Date("2025-03-31");
        const currentDate = new Date();
        const timeDifference = endDate - currentDate;
        return timeDifference / (1000 * 60 * 60 * 24);
    }
    
    function updateCounters() {
        let daysElapsed = calculateDaysElapsed();
        let daysRemaining = calculateDaysRemaining();
        let percentUsed = (daysElapsed / (daysElapsed + daysRemaining)) * 100;
        
        elapsedParagraph.textContent = `Days elapsed since Feb 19, 2025: ${daysElapsed.toFixed(2)}`;
        remainingParagraph.textContent = `Days remaining until Mar 31, 2025: ${daysRemaining.toFixed(2)}`;
        headerTitle.textContent = percentUsed.toFixed(4) + "%";
    }
    
    // Initial update
    updateCounters();
    
    // Insert paragraphs after the h1 element
    headerTitle.insertAdjacentElement("afterend", elapsedParagraph);
    elapsedParagraph.insertAdjacentElement("afterend", remainingParagraph);
    
    // Update the counters every minute
    setInterval(updateCounters, 1000);
});
