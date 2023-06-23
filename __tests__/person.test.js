import { Person } from './../src/person.js'

describe('Person  ', () => {
    let person;

    beforeEach(() => {
        person = new Person("Lindsay", 36, 30, 50);
    });

    test('should create a person object with an Earth age property', () => {
        expect(person.firstName).toBe("Lindsay");
        expect(person.earthAge).toEqual(36);
    });

    test('should calculate the age of the person in Mercury, Venus, Mars, and Jupiter years', () => {
        expect(person.calculateAge("Mercury")).toEqual(150);
    });

    test('should return an invalid response if an invalid planet is entered', () => {
        expect(person.calculateAge("Pluto")).toBe("Invalid planet!");
    });

    test('should calculate the age of the person in Mercury, Venus, Mars, and Jupiter years', () => {
        expect(person.calculateAge("Venus")).toEqual(58.06);
    });

    test('should calculate the age of the person in Mercury, Venus, Mars, and Jupiter years', () => {
        expect(person.calculateAge("Mars")).toEqual(19.15);
    });

    test('should calculate the age of the person in Mercury, Venus, Mars, and Jupiter years', () => {
        expect(person.calculateAge("Jupiter")).toEqual(3.04);
    });

    test ('should determine how many years have passed on each planet since a past birthday', () => {
        expect(person.calculateYearsPassed("Mercury")).toEqual(25);
    });

    test ('should determine how many years have passed on each planet since a past birthday', () => {
        expect(person.calculateYearsPassed("Venus")).toEqual(9.68);
    });

    test ('should determine how many years have passed on each planet since a past birthday', () => {
        expect(person.calculateYearsPassed("Mars")).toEqual(3.19);
    });   
    
    test ('should determine how many years have passed on each planet since a past birthday', () => {
        expect(person.calculateYearsPassed("Jupiter")).toEqual(0.51);
    });

    test('should return an invalid response if an invalid planet is entered', () => {
        expect(person.calculateYearsPassed("Pluto")).toBe("Invalid planet!");
    });

    test ('should determine how many years have yet to pass until a future birthday', () => {
        expect(person.calculateYearsUntil("Mercury")).toEqual(58.33);
    });

    test ('should determine how many years have yet to pass until a future birthday', () => {
        expect(person.calculateYearsUntil("Venus")).toEqual(22.58);
    });

    test ('should determine how many years have yet to pass until a future birthday', () => {
        expect(person.calculateYearsUntil("Mars")).toEqual(7.45);
    });

    

    
})
