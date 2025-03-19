document.getElementById("siderealForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const birthdate = new Date(this.birthdate.value);
  const sign = getSiderealSign(birthdate);
  document.getElementById("result").innerHTML = `<h3>Your Sidereal Sign: ${sign}</h3>`;
});

function getSiderealSign(date) {
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;

  // Simplified sidereal sign chart
  if ((month == 4 && day >= 14) || (month == 5 && day <= 14)) return "Aries";
  if ((month == 5 && 