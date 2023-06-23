import { Person } from './../src/person.js'

describe('Person  ', () => {
    let person;

    beforeEach(() => {
        person = new Person("Lindsay", 36, 30)
    });

    test('should create a person object with an Earth age property', () => {
        expect(person.firstName).toBe("Lindsay");
        expect(person.earthAge).toEqual(36);
    });

    test('should calculate the age of the person in Mercury, Venus, Mars, and Jupiter years', () => {
        expect(person.calculateAge("Mercury")).toEqual(8.64)
    });

    test('should return an invalid response if an invalid planet is entered', () => {
        expect(person.calculateAge("Pluto")).toBe("Invalid planet!");
    });

    test('should calculate the age of the person in Mercury, Venus, Mars, and Jupiter years', () => {
        expect(person.calculateAge("Venus")).toEqual(22.32)
    });

    test('should calculate the age of the person in Mercury, Venus, Mars, and Jupiter years', () => {
        expect(person.calculateAge("Mars")).toEqual(67.68)
    });

    test('should calculate the age of the person in Mercury, Venus, Mars, and Jupiter years', () => {
        expect(person.calculateAge("Jupiter")).toEqual(426.96)
    });

    test ('should determine how many years have passed on each planet since a past birthday', () => {
        expect(person.calculateYearsPassed("Mercury")).toEqual(1.44)
    });

    test ('should determine how many years have passed on each planet since a past birthday', () => {
        expect(person.calculateYearsPassed("Venus")).toEqual(3.72)
    });    
})
