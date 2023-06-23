import { Person } from './../src/person.js'

describe('Person  ', () => {
    let person;

    beforeEach(() => {
        person = new Person("Lindsay", 36)
    });

    test('should create a person object with an Earth age property', () => {
        expect(person.firstName).toBe("Lindsay");
        expect(person.earthAge).toEqual(36);
    });

    test('should calculate the age of the person in Mercury, Venus, Mars, and Jupiter years', () => {
        expect(person.calculateAge("Mercury")).toEqual(8.64)
    })

    test('should return an invalid response if an invalid planet is entered', () => {
        expect(person.calculateAge("Pluto")).toBe("Invalid planet!");

    })
})
