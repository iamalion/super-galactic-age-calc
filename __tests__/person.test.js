import { Person } from './../src/person.js'

describe('Person  ', () => {

    test('should create a person object with an Earth age property', () => {
        const person = new Person("Lindsay",36);
        expect(person.firstName).toBe("Lindsay");
        expect(person.earthAge).toEqual(36);
    });

    test('should calculate the age of the person in Mercury, Venus, Mars, and Jupiter years', () => {
        const person = new Person ("Lindsay", 36);
        expect(person.calculateAge("Mercury")).toEqual(8.64)
    })

    test('should return an invalid response if an invalid planet is entered', () => {
        const person = new Person ("Lindsay", 36);
        expect(person.calculateAge("Pluto")).toBe("Invalid planet!");

    })
})
