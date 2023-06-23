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
            return parseFloat(planetAge)
        } else {
            return "Invalid planet!"
        }
        
    }
    
    calculateYearsPassed(planet) {
        let yearsPassed;
        const planetYears = {
            Mercury: 0.24,
            Venus: 0.62,
            Mars: 1.88,
            Jupiter: 11.86,
        }
        if (planetYears.hasOwnProperty(planet)) {
            let ageDiff = this.earthAge - this.pastAge;
            yearsPassed = (ageDiff / planetYears[planet]).toFixed(2);
            return parseFloat(yearsPassed)
        } else {
            return "Invalid planet!"
        } 
    }
    
    calculateYearsUntil(planet) {
        let yearsUntil;
        const planetYears = {
            Mercury: 0.24,
            Venus: 0.62,
            Mars: 1.88,
            Jupiter: 11.86,
        };

        if (planetYears.hasOwnProperty(planet)) {
            let ageDiff = this.futureAge - this.earthAge;
            yearsUntil = (ageDiff / planetYears[planet]).toFixed(2);
            return parseFloat(yearsUntil)
        } else {
            return "Invalid planet!"
        }
    }   
}
