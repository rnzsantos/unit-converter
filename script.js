const unitTxt = document.querySelector(".header__txt"),
  unitLength = document.querySelector(".unit__length"),
  unitVolume = document.querySelector(".unit__volume"),
  unitMass = document.querySelector(".unit__mass");

function convert() {
  const measurement = unitTxt.value;
  
  let metersToFeet = measurement * 3.281,
    feetToMeters = measurement / 3.281,
    litersToGallons = measurement / 3.785,
    gallonsToLiters = measurement * 3.785,
    kilosToPounds = measurement * 2.205,
    poundsToKilos = measurement / 2.205;

  unitLength.textContent = `${measurement} meters = ${metersToFeet.toFixed(
    3
  )} feet | ${measurement} feet = ${feetToMeters.toFixed(3)} meters`;

  unitVolume.textContent = `
  ${measurement} liters = ${litersToGallons.toFixed(
    3
  )} gallons | ${measurement} gallons = ${gallonsToLiters.toFixed(3)} liters`;

  unitMass.textContent = `
  ${measurement} kilos = ${kilosToPounds.toFixed(
    3
  )} pounds | ${measurement} pounds = ${poundsToKilos.toFixed(3)} kilos`;
}
convert();

unitTxt.addEventListener("input", convert);
