const locate = document.getElementById("clickbutton");
const display = document.getElementById("display");

async function getData(lat, long){
  const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=690648a6f9e24fe981f152713242702&q=${lat},${long}&aqi=yes`);
  return await promise.json();
}


async function gotLocation(position){
  const results = await getData(position.coords.latitude, position.coords.longitude);
  console.log(results);
  display.innerText = `${results.location.name}, ${results.location.region} - ${results.location.country}`
}

function failLocation(){
  console.log("Unable to get location");
}
locate.addEventListener("click", async () =>{
  navigator.geolocation.getCurrentPosition(gotLocation,failLocation);
});