# Advent of Code

Welcome to my solutions for [Advent of Code](https://adventofcode.com/). These solutions are written in JavaScript using a functional programming approach.

## Getting Started

1. **Clone the repository**

   Use Git to clone the repository to your local machine:

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

4. **Running tests**

   Verify that the setup is correct and nothing is broken:

   ```
   npm run test
   ```

## Usage

Challenges can be found in the `src/` directory. Where they are organised by year and then day in their own respective directories.

Challenges are structured so that the `main.js` program and its associated `input.js` are defined separately. These are both then imported into `main.test.js` where you can then perform a test to confirm that the program is returning the correct output.

### Verifying solutions

To perform the tests for a given year perform

```SHELL
# npm run test:<year>
npm run test:2023
```

To execute a specific test by file path perform:

```
NODE_OPTIONS=--experimental-vm-modules npx jest test --runTestsByPath src/2023/01/main.test.js
```
