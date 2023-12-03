# Advent of Code

Welcome to my solutions for [Advent of Code](https://adventofcode.com/). These solutions are written in JavaScript using a functional programming approach.

## Getting Started

1. **Clone the repository**

   ```SHELL
   git clone git@github.com:assadk88/advent-of-code.git
   ```

2. **Navigate to the repository's directory**

   ```SHELL
   cd advent-of-code
   ```

3. **Install the necessary dependencies**

   ```SHELL
   npm install
   ```

## Usage

Challenges can be found in the `src/` directory, where they are organised by year and then day.

Challenges are structured so that the solution (`main.js`) and its associated input (`input.js`) are defined separately. These are both imported into `main.test.js`. You can then perform a test to verify that the program is producing the correct output.

### Verifying solutions by year

To execute the tests for a given year perform:

```SHELL
# npm run test:<year>
npm run test:2023
```

### Verifying solutions by specific challenge

To execute the test associated with a specific challenge, you must specify its file path. For example to execute the test for the first challenge in 2023's Advent of Code you would perform:

```
NODE_OPTIONS=--experimental-vm-modules npx jest test --runTestsByPath src/2023/01/main.test.js
```
