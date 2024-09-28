// Language Data for English, Sinhala, Tamil
const translations = {
    en: {
        heading: "Paracetamol Dose Calculator",
        weightLabel: "Child's Weight (kg):",
        calculateBtn: "Calculate Dose",
        note: "Note: Paracetamol syrup contains 120mg in 5mL.",
        credits: "Made with ❤️ by Dr. Yomal"
    },
    si: {
        heading: "පැරසිටමෝල් මාත්‍රාව ගණනය කරන්න",
        weightLabel: "ළමයාගේ බර (කි.ග්‍රෑ):",
        calculateBtn: "මාත්‍රාව ගණනය කරන්න",
        note: "සටහන: පැරසිටමෝල් සිරප් මිලිලීටර් 5ක පැරසිටමෝල් මිලිග්‍රෑම් 120ක් අඩංගු වේ.",
        credits: "මෙය ❤️ නිර්මාණය කළේ Dr. Yomal විසිනි"
    },
    ta: {
        heading: "பாராசிடமால் அளவை கணக்கிடுங்கள்",
        weightLabel: "குழந்தையின் எடை (கிலோ):",
        calculateBtn: "அளவை கணக்கிடுங்கள்",
        note: "குறிப்பு: 5மில்லி பாராசிடமால் திரவத்தில் 120மி.கி. உள்ளது.",
        credits: "❤️ உடன் உருவாக்கியவர் Dr. Yomal"
    }
};

// Function to update the UI based on the selected language
function updateLanguage(language) {
    document.getElementById('heading').textContent = translations[language].heading;
    document.getElementById('weightLabel').textContent = translations[language].weightLabel;
    document.getElementById('calculateBtn').textContent = translations[language].calculateBtn;
    document.getElementById('note').textContent = translations[language].note;
    document.getElementById('credits').textContent = translations[language].credits;
}

// Listen for language change
document.getElementById('language').addEventListener('change', function() {
    const selectedLanguage = this.value;
    updateLanguage(selectedLanguage);
});

// Default to English on load
updateLanguage('en');

// Handle form submission
document.getElementById('doseForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent form from refreshing the page

    // Fetch weight input
    const weight = parseFloat(document.getElementById('weight').value);
    const dose = 15;  // Default dose is 15 mg/kg
    const syrupConcentration = 120;  // 120 mg in 5 mL

    // Check if weight is valid
    if (!isNaN(weight) && weight > 0) {
        const totalDose = weight * dose;  // Calculate total dose in mg
        const volumeInMl = (totalDose / syrupConcentration) * 5;  // Calculate volume in mL

        // Display the total dose and the volume of syrup
        document.getElementById('result').innerHTML = `
            <p>Total dose: ${totalDose.toFixed(2)} mg</p>
            <p>Volume of syrup required: ${volumeInMl.toFixed(2)} mL</p>
        `;
    } else {
        document.getElementById('result').textContent = 'Please enter a valid weight.';
    }
});
