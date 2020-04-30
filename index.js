const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

// remember the StateMachine lecture
// https://bootcamp.burlingtoncodeacademy.com/lessons/cs/state-machines
let states = {
  'roomOne': { canChangeTo: [ 'roomTwo' ] },
  'roomTwo': { canChangeTo: [ 'roomThree' ] },
  'roomThree': { canChangeTo: [ 'roomOne' ] }
};

let currentState = "green";

function enterState(newState) {
  let validTransitions = states[currentState].canChangeTo;
  if (validTransitions.includes(newState)) {
    currentState = newState;
  } else {
    throw 'Invalid state transition attempted - from ' + currentState + ' to ' + newState;
  }
}

start();

async function start() {
  const welcomeMessage = `182 Main St.
You are standing on Main Street between Church and South Winooski.
There is a door here. A keypad sits on the handle.
On the door is a handwritten sign.`;
  let answer = await ask(welcomeMessage);
  console.log('Now write your code to make this work!');
  process.exit();
}

///basicc framework started below

//define location coordinates (repeat this for each room now)...
let roomOne = {
  name: 'Bedroom',
  n : false,
  e : 'roomTwo',
  s : 'roomFour',
  w : false,
  say: 'welcome to your bedroom!',
  inventory: '',
  health: 0
}

let roomTwo = {
  name: 'Living Room',
  n : false,
  e : 'roomTwo',
  s : 'roomFour',
  w : false,
  say: 'welcome to your living room!',
  inventory: '',
  health: 3
}

let roomThree = {
  name: 'Outside',
  n : false,
  e : 'roomTwo',
  s : 'roomFour',
  w : false,
  say: 'welcome to outside!',
  inventory: '',
  health: 3
}

let roomFour = {
  name: 'Car',
  n : false,
  e : 'roomTwo',
  s : 'roomFour',
  w : false,
  say: 'welcome to your car!',
  inventory: '',
  health: 3
}

let roomFive = {
  name: 'Grocery Store',
  n : false,
  e : 'roomTwo',
  s : 'roomFour',
  w : false,
  say: 'welcome to the gocery store!',
  inventory: 'food',
  health: 3
}

let roomSix = {
  name: 'Restaurant for Takeout',
  n : false,
  e : 'roomTwo',
  s : 'roomFour',
  w : false,
  say: 'welcome to your favorite restaurant!',
  inventory: 'tacos',
  health: 3
}

//other four rooms would be defined w coordinates
//room look up object with key values that point to those objects (repeat this for each room now)
let roomLookup = {//lookup table to ref objects 
'Bedroom': roomOne,
'Living Room': roomTwo,
'Outside': roomThree,
'Car': roomFour,
'Grocery Store': roomFive,
'Restaurant for Takeout': roomSix
}

//state machines to determine room flow based on above coordinates(repeat this for each room now)
let states = {
  'roomOne': {canChangeTo: ['e', 'w']}, //define rooms here...would apply for each using line119 room coordinates
};

let currentState = 'Bedroom';//initial room at start of game

function enterState(direction) {
let validTransitions = states[currentState].canChangeTo;///room youre in, where youre going, points to state machine lookup table
if validTransitions.includes(direction)) {
currentState = roomLookup[currentState][direction];//any time you're referencing aa var, use brackets not dots
return currentState;

}else {
  return false
}}

//pass current state locally

async function walk(room) {
  console.log('You are at ${roomLookup[room].name}')
  let direction = await ask('which way would you like to go?'\n)

  //rest of game functionality here
  //if player enters direction, game determines if possible
  let newRoom = enterState(direction, room);//recursive function
  while(!newRoom) {
    console.log('There is nothing in that direction\n')
    let direction = await ask ('which way do you want to go?';
    newRoom = enterState(direction, room);
}
await walk(newRoom)
  }
  }
}



//Inventories & Health:
let playerInventory = {
  items: ['mask', ],

  addInventory: function (items) {
      this.inventory.push(items)
  },
  checkInventory: function () {
      console.log('You have these items in your bag:\n' + items)
      this.inventory.forEach(function (items)) { console.log(items) }
  }
}

//add health here
let playerHealth = {
  health: [],

  addLife: function (health) {
      this.life.push(health)
  },
  checkLife: function () {
      console.log('You have' + health + 'points')
      this.health(function (health)) { console.log(health) }
  }
}

//gameprompts
async function startGame() {

  console.log('You are in a quarantine lockdown. What would you like to do?')
  if (input === )


  let outsideAnswer = console.log('Let"s go outside! Would you like to walk the dog or do an outdoor workout?');
  if (outsideAnswer === 'walk the dog');
    //figure out inventory starting position



    //state machines to determine room flow
    let states = {
        'room1': canChangeTo: ['room2', 'room3']}, //define rooms here

    };

    let currentState = 'Bedroom';

    function enterState(newState) {
      letvalidTransitions = states[currentState].canChangeTo;
      currentState = newState;
      else return { false
      };
    }

    
  




    