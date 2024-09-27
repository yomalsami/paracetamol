document.getElementById('doseForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const dose = 15;  // Default dose is 15 mg/kg
    const syrupConcentration = 120; // 120 mg in 5 mL

    if (weight) {
        const totalDose = weight * dose;  // Total dose in mg
        const volumeInMl = (totalDose / syrupConcentration) * 5; // Volume in mL

        // Display the total dose and the volume of syrup
        document.getElementById('result').innerHTML = `
            <p>Total dose: ${totalDose.toFixed(2)} mg</p>
            <p>Volume of syrup required: ${volumeInMl.toFixed(2)} mL</p>
        `;
    } else {
        document.getElementById('result').textContent = 'Please enter a valid weight.';
    }
});
