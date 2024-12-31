# TypeScript Bug: Premature Return in Loop

This repository demonstrates a common error in TypeScript where a `return` statement is placed inside a loop, causing the loop to terminate prematurely. 

The `bug.ts` file contains the buggy code, while `bugSolution.ts` provides the corrected version.

## Bug Description

A function `printNumbers2` aims to print numbers from 1 to n. However, due to a misplaced `return` statement inside the `for` loop, the function terminates after printing only the first number (1). This happens because the `return` statement immediately exits the function, regardless of whether the loop condition is met.

## Solution

The corrected version in `bugSolution.ts` moves the `return` statement outside the loop. This allows the loop to run to completion, printing all numbers from 1 to n. 

This example illustrates the importance of carefully considering the placement of control flow statements such as `return`, `break`, and `continue` within loops to ensure intended program behavior.