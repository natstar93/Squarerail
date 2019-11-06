
const input = process.stdin;
input.setEncoding('utf-8');

console.log("Please input a command. Enter blank to finish");

let CAPACITY_REMAINING = 0;
let carriages = {};

const COMMANDS = {
  INITIALISE: 'mov',
  INCREMENT: 'inc',
  DECREMENT: 'dec',
}

function mov(capacity, carriage) {
  carriages[carriage] = carriages[carriage] || {};
  carriages[carriage].CAPACITY_REMAINING = Number(capacity);
}

function inc(carriageName) {
  carriages[carriageName].CAPACITY_REMAINING += 1;
}

function dec(carriageName) {
  carriages[carriageName].CAPACITY_REMAINING -= 1;
}

function processCommand(command) {
  const registers = command.trim().split(' ');
  const [instruction, ...args] = registers;
  
  if(instruction === COMMANDS.INITIALISE) {
    mov(...args);
  }
  if(instruction === COMMANDS.INCREMENT) {
    inc(...args);
  }
  if(instruction === COMMANDS.DECREMENT) {
    dec(...args);
  }
};

input.on('data', function (data) {
  console.log('\nYou entered command: ' + data);
  processCommand(data);
  console.log('CAPACITY_REMAINING', carriages['a'].CAPACITY_REMAINING);
});

