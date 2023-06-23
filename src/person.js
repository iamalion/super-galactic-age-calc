export class Person {
    constructor(firstName, earthAge, pastAge, futureAge){
        this.firstName = firstName;
        this.earthAge = earthAge;
        this.pastAge = pastAge;
        this.futureAge = futureAge;
    }
    calculateAge(planet){
        let planetAge;
        const planetYears = {
            Mercury: 0.24,
            Venus: 0.62,
            Mars: 1.88,
            Jupiter: 11.86,
        }
        if (planetYears.hasOwnProperty(planet)){
            planetAge = (this.earthAge / planetYears[planet]).toFixed(2);
        } else {
            return "Invalid planet!"
        }
        return parseFloat(planetAge)
    }
    
    calculateYearsPassed(planet) {
        let yearsPassed;
        if (planet === "Mercury") {
            yearsPassed = ((this.earthAge - this.pastAge) / 0.24).toFixed(2);
        } else if (planet === "Venus") {
            yearsPassed = ((this.earthAge - this.pastAge) / 0.62).toFixed(2);
        } else if (planet === "Mars") {
            yearsPassed = ((this.earthAge - this.pastAge) / 1.88).toFixed(2);
        } else if (planet === "Jupiter") {
            yearsPassed = ((this.earthAge - this.pastAge) / 11.86).toFixed(2);
        } else {
            return "Invalid planet!"
        }
        return parseFloat(yearsPassed)
          
    }
    
    calculateYearsUntil(planet) {
        let yearsUntil;
        if (planet === "Mercury") {
            yearsUntil = ((this.futureAge - this.earthAge) / 0.24).toFixed(2);
            return parseFloat(yearsUntil)
        } else if (planet === "Venus") {
            yearsUntil = ((this.futureAge - this.earthAge) / 0.62).toFixed(2);
            return parseFloat(yearsUntil)
        } else if (planet === "Mars") {
            yearsUntil = ((this.futureAge - this.earthAge) / 1.88).toFixed(2);
            return parseFloat(yearsUntil)
        } else if (planet === "Jupiter") {
            yearsUntil = ((this.futureAge - this.earthAge) / 11.86).toFixed(2);
            return parseFloat(yearsUntil)
        } else {
            return "Invalid planet!"
        }
    }

    
}
