const locat = document.getElementById("clickbutton");

function gotLocation(position){

}
function failLocation(){
  console.log("Unable to get location");
}

locat.addEventListener("click", async () =>{
  navigator.geolocation.getCurrentPosition(gotLocation, failLocation);
});