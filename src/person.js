// export class Person {
//     constructor(firstName, earthAge, pastAge, futureAge){
//         this.firstName = firstName;
//         this.earthAge = earthAge;
//         this.pastAge = pastAge;
//         this.futureAge = futureAge;
//         this.planetYears = {
//             Mercury: 0.24,
//             Venus: 0.62,
//             Mars: 1.88,
//             Jupiter: 11.86,
//             Saturn: 29.46,
//             Uranus: 84.02,
//             Neptune: 164.8
//         };
//     }
//     calculateAge(planet){
//         let planetAge;
//         if (Object.prototype.hasOwnProperty.call(this.planetYears, planet)){
//             planetAge = (this.earthAge / this.planetYears[planet]).toFixed(2);
//             return parseFloat(planetAge);
//         } else {
//             return "Invalid planet!";
//         }
        
//     }
    
//     calculateYearsPassed(planet) {
//         let yearsPassed;
//         if (Object.prototype.hasOwnProperty.call(this.planetYears, planet)) {
//             let ageDiff = this.earthAge - this.pastAge;
//             yearsPassed = (ageDiff / this.planetYears[planet]).toFixed(2);
//             return parseFloat(yearsPassed);
//         } else {
//             return "Invalid planet!";
//         } 
//     }
    
//     calculateYearsUntil(planet) {
//         let yearsUntil;
//         if (Object.prototype.hasOwnProperty.call(this.planetYears, planet)) {
//             let ageDiff = this.futureAge - this.earthAge;
//             yearsUntil = (ageDiff / this.planetYears[planet]).toFixed(2);
//             return parseFloat(yearsUntil);
//         } else {
//             return "Invalid planet!";
//         }
//     }   
// }
export class Person {
    constructor(firstName, earthAge, pastAge, futureAge){
        this.firstName = firstName;
        this.earthAge = earthAge;
        this.pastAge = pastAge;
        this.futureAge = futureAge;
        this.planetYears = {
            Mercury: 0.24,
            Venus: 0.62,
            Mars: 1.88,
            Jupiter: 11.86,
            Saturn: 29.46,
            Uranus: 84.02,
            Neptune: 164.8
        };
    }
    calculateAge(planet){
        let planetAge;
        if (Object.prototype.hasOwnProperty.call(this.planetYears, planet)){
            planetAge = (this.earthAge / this.planetYears[planet]).toFixed(2);
            return parseFloat(planetAge);
        } else {
            return "Invalid planet!";
        }
        
    }
    
    calculateYearsPassed(planet) {
        let yearsPassed;
        if (Object.prototype.hasOwnProperty.call(this.planetYears, planet)) {
            let ageDiff = this.earthAge - this.pastAge;
            yearsPassed = (ageDiff / this.planetYears[planet]).toFixed(2);
            return parseFloat(yearsPassed);
        } else {
            return "Invalid planet!";
        } 
    }
    
    calculateYearsUntil(planet) {
        let yearsUntil;
        if (Object.prototype.hasOwnProperty.call(this.planetYears, planet)) {
            let ageDiff = this.futureAge - this.earthAge;
            yearsUntil = (ageDiff / this.planetYears[planet]).toFixed(2);
            return parseFloat(yearsUntil);
        } else {
            return "Invalid planet!";
        }
    }   
}