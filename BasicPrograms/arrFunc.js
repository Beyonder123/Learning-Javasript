var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}

console.log('\n');

arrOfKeys.push('price');
drone.price = 3000;
for (var i = 0; i < arrOfKeys.length; i++){
    console.log(drone[arrOfKeys[i]]);
}
