//enemy types:
//Brendan : boss
//Enemy : default
//HashTable: hashtable
//Dildo : a dildo??
var m = Mission("mission1");
m.add(HashTable(0.2,-0.2));
m.add(HashTable(0.4,-0.2));
m.add_wave("normal");
m.add(FrenchGuy(0.4,-1));
m.add_wave("boss");
