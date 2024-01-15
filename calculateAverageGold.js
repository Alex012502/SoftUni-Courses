function calculateAverageGold(input) {
    let numberOfLocations = parseInt(input[0]);
    let currentIndex = 1;

    for (let i = 0; i < numberOfLocations; i++) {
        let expectedGold = parseFloat(input[currentIndex]);
        let numberOfDays = parseInt(input[currentIndex + 1]);
        let totalGold = 0;

        for (let j = 0; j < numberOfDays; j++) {
            totalGold += parseFloat(input[currentIndex + 2 + j]);
        }

        let averageGoldPerDay = totalGold / numberOfDays;
        currentIndex += numberOfDays + 2;

        if (averageGoldPerDay >= expectedGold) {
            console.log(`Good job! Average gold per day: ${averageGoldPerDay.toFixed(2)}.`);
        } else {
            let neededGold = (totalGold - expectedGold) - numberOfLocations;
            console.log(`You need ${neededGold.toFixed(2)} gold.`);
        }
    }
}

// Example input
calculateAverageGold(["2", "10", "3", "10", "10", "11", "20", "2", "20", "10"]);