var tigger = { character: "Tigger" };
var pooh = { character: "Winnie the Pooh" };
var bees = {character:"Bees"};
var piglet = {character:"Piglet"};
var owl = {character:"Owl"};
var christopher = {character:"Christopher Robin"};
var rabbit = {character:"Rabbit"};
var gopher = {character:"Gopher"};
var kanga = {character:"Kanga"};
var eeyore = {character:"Eeyore"};
var heffalump = {character:"Heffalumps"};

tigger.north = pooh;
pooh.south = tigger;

piglet.east = tigger.north;
tigger.north.west = piglet;

bees.west = piglet.east;
tigger.north.east = bees;

rabbit.south = pooh.east;
bees.north = rabbit;

christopher.south.west = pooh.west;
pooh.north = christopher;

owl.east = bees.north.west;
christopher.west = owl;

gopher.west = pooh.north.west;
rabbit.east = gopher;

kanga.south = piglet.north.east;
owl.east.north = kanga;

eeyore.south = christopher.north;
kanga.north = eeyore;

heffalump.west.south = rabbit.west.north;
kanga.north.east = heffalump;

