
import Person from './person';
document.getElementById("form-id").addEventListener("submit", handleForm);

function handleForm(event) {
    event.preventDefault();
    document.getElementById("result").innerText = null;
    let firstName = document.getElementById("nameID");
    let earthAge = parseInt(document.getElementById("ageID").value);
    let pastAge = parseInt(document.getElementById("pastAgeID").value);
    let futureAge = parseInt(document.getElementById("futureAgeID").value);
    let person = new Person(firstName, earthAge, pastAge, futureAge);
    let planet = getSelectedPlanet();  
    
    let planetAge = person.calculateAge(planet);
    let yearsPassed = person.calculateYearsPassed(planet);
    let yearsUntil = person.calculateYearsUntil(planet);


    let greeting = `<h2>Hello ${firstName.value}!</h2>`;
    let ageMessage = `<p>Your age on ${planet} is ${planetAge}!</p>`;
    let passedMessage = `<p>It's been ${yearsPassed} ${planet} years since you lost your first tooth!</p>`;
    let untilMessage = `<p>You have ${yearsUntil} ${planet} years till you can celebrate your ${futureAge}th birthday!</p>`;

    let resultDiv = document.getElementById("result");
    resultDiv.classList.remove("hidden");
    resultDiv.innerHTML = greeting + ageMessage + passedMessage + untilMessage;

}

function getSelectedPlanet() {
    const planetRadios = document.getElementsByName("planetList");
    for (let i = 0; i < planetRadios.length; i++) {
        if (planetRadios[i].checked) {
            return planetRadios[i].id.replace("ID", "");
        }
    }
    return null;
}