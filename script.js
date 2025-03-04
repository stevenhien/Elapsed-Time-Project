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
        return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    }
    
    // Calculate days remaining until Mar 31, 2025
    function calculateDaysRemaining() {
        const endDate = new Date("2025-03-31");
        const currentDate = new Date();
        const timeDifference = endDate - currentDate;
        return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    }
    
    let daysElapsed = calculateDaysElapsed();
    let daysRemaining = calculateDaysRemaining();
    
    elapsedParagraph.textContent = `Days elapsed since Feb 19, 2025: ${daysElapsed}`;
    //remainingParagraph.textContent = `Days remaining until Mar 31, 2025: ${daysRemaining}`;
    
    // Insert paragraphs after the h1 element
    headerTitle.insertAdjacentElement("afterend", elapsedParagraph);
    elapsedParagraph.insertAdjacentElement("afterend", remainingParagraph);
    
    // Update the counters every day
    setInterval(() => {
        daysElapsed = calculateDaysElapsed();
        daysRemaining = calculateDaysRemaining();
        elapsedParagraph.textContent = `Days elapsed since Feb 19, 2025: ${daysElapsed}`;
        // remainingParagraph.textContent = `Days remaining until Mar 31, 2025: ${daysRemaining}`;
    }, 1000 * 60 * 60 * 24);

    percentUsed = daysElapsed / (daysElapsed+daysRemaining) * 100
    headerTitle.textContent = percentUsed +"%";
});