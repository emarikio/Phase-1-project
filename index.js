// Function for form submission
function submitJournal(event) {
    event.preventDefault();

    const mood = document.getElementById('mood').value;
    const day = document.getElementById('day-selector').value;
    const week = document.getElementById('Week-selector').value;
    const entry = document.getElementById('entry').value;

    

    let journalSubmit = {
        mood: mood,
        day: day,
        week: day,
        entry: entry
    };

    // Reset the form fields after submission
document.getElementById('mood').selectedIndex = 0;
document.getElementById('day-selector').selectedIndex = 0;
document.getElementById('Week-selector').selectedIndex = 0;
document.getElementById('entry').selectedIndex = ''; // => This clears the form after submission
}

// Event listener for the submission above
document.getElementById('journal-form').addEventListener('submit', submitJournal);



//Function to display the random quotes

function getQuote() {
    fetch("https://www.affirmations.dev/")
    .then((response) => response.json())
    .then((data) => {
        return(data);
    });
    let randomIndex = [Math.floor(Math.random() * getQuote.length)];
    alert(quote);
}

document.getElementById('quote').addEventListener('click', getQuote); // => This  is the event listener for the Quote Button