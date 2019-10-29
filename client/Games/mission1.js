//enemy types:
//Brendan : boss
//Enemy : default
//HashTable: hashtable
//Dildo : a dildo??

var m = Mission("mission1");
m.add(FrenchGuy(0.4,-0.2));
m.add_wave("boss");
m.add(HashTable(0.2,-0.2));
m.add(HashTable(0.4,-0.2));
m.add_wave("normal");
m.add(Dildo(0.2,-0.4));
m.add(Dildo(0.4,-0.4));
m.add(Dildo(0.9,0));
m.add(Dildo(0.7,0));
m.add(RedBlack(0.2,-0.2));
m.add(RedBlack(0.4,-0.2));
m.add_wave("normal");
m.add(Dildo(0.2,-0.5));
m.add(Dildo(0.4,-0.-0.5));
m.add(Dildo(0.9,-0.5));
m.add(Dildo(0.7,-0.5));
m.add_wave("normal");
m.add(Graph(0.6,-0.3));
m.add(Graph(0.6,-0.2));
m.add(Graph(0.6,-0.1));
m.add(Graph(0.6,0));
m.add(Graph(0.2,-0.3));
m.add(Graph(0.2,-0.2));
m.add(Graph(0.2,-0.1));
m.add(Graph(0.2,0));
m.add_wave("normal");


