var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};
var vehicles = [vehicle1, vehicle2, vehicle3];
function findVehicle(name, list){
  for(var i in list){
    if(list[i].type == name){
      return list[i].storedAt;
    }
  }
}
console.log(findVehicle("Submarine", vehicles));