document.getElementById("form-id").addEventListener("submit", handleForm)

function handleForm(event) {
    event.preventDefault();
    document.getElementById("result").innerText = null;
    let firstName = document.getElementById("nameID");
    let earthAge = parseInt(document.getElementById("ageID").value);
    let pastAge = parseInt(document.getElementById("pastAgeID").value);
    let futureAge = parseInt(document.getElementById("futureAgeID").value);
    let person = new Person(firstName, earthAge, pastAge, futureAge);
    let planet = getSelectedPlanet(); 
    let result = person.calculateAge(planet); 
    const pTag = document.createElement("p");
    pTag.append(`Your new planet age is: ${result}!`)
    document.getElementById("result").appendChild(pTag);
}

function getSelectedPlanet() {
  const planetRadios = document.getElementsByName("planetList");
  for (let i = 0; i < planetRadios.length; i++) {
    if (planetRadios[i].checked) {
      return planetRadios[i].value;
    }
  }
  return null;
}






