# SquareRail
​
A new train is being developed which includes a sensor to detect passengers entering and exiting carriages to be aware of the comfort level of our customers.
​
We want to develop a simple chip to keep track of the available seats on the carriage.
The controller will emit assembly istructions that we need to execute.
​
The CPU has 3 registers: `a`, `b`, `c`
​
Example:
​
```assembly
mov 42 a
dec a
dec a
inc a
inc a
dec a
```
​
> We initialize at 42 seats.
> 2 passengers enter, then both leave and one new passenger enter.
> So we have 41 available seats.
​
`mov x y` copies x (either an integer or the value of a register) into register y.
`inc x` increases the value of register x by one.
`dec x` decreases the value of register x by one.
​
## On demand, total spare capacity
​
The train has 2 carriages.
If we assume we are keeping track of the available seats of the two carriages in register `a` and `b`,
we want to be able **on demand** to get the total of available seats on the whole train on the register `c`.
​
We have an extra istruction we can use:
`jnz x y` jumps to an instruction y away (positive means forward; negative means backward), but only if x is not zero.
The jnz instruction moves relative to itself: an offset of -1 would continue at the previous instruction, while an offset of 2 would skip over the next instruction.