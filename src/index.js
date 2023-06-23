} else if (planet === "Venus") {
    yearsPassed = ((this.earthAge - this.pastAge) * 0.62).toFixed(2);
    return parseFloat(yearsPassed);
} else if (planet === "Mars") {
    yearsPassed = ((this.earthAge - this.pastAge) * 1.88).toFixed(2);
    return parseFloat(yearsPassed);
} else if (planet === "Jupiter") {
    yearsPassed = ((this.earthAge - this.pastAge) * 11.86).toFixed(2);
    return parseFloat(yearsPassed);

