export class Person {
    constructor(firstName, earthAge, pastAge){
        this.firstName = firstName;
        this.earthAge = earthAge;
        this.pastAge = pastAge;
    }
    calculateAge(planet){
        let planetAge;
        if (planet === "Mercury"){
            planetAge = (this.earthAge * 0.24).toFixed(2);
        } else if (planet === "Venus") {
            planetAge = (this.earthAge * 0.62).toFixed(2);
        } else if (planet === "Mars"){
            planetAge = (this.earthAge * 1.88).toFixed(2);
        } else if (planet === "Jupiter"){
            planetAge = (this.earthAge * 11.86).toFixed(2);
        } else {
            return "Invalid planet!"
        }
        return parseFloat(planetAge)
    }
    
    calculateYearsPassed(planet) {
        let yearsPassed;
        if (planet === "Mercury") {
            yearsPassed = ((this.earthAge - this.pastAge) * 0.24).toFixed(2);
            return parseFloat(yearsPassed);
        
        } else {
            return "Invalid planet!"
        }
            
    }
        
}

    

