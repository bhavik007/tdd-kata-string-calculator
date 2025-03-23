# String Calculator TDD Kata

## Overview

This project is a simple implementation of the **String Calculator** kata using **Test-Driven Development (TDD)**.

## Features

- Perform calculations (addition) on numbers provided in a string format.
- Support for custom delimiters.
- Automatically detect and apply operations based on the delimiter.
- Handle negative numbers by throwing an exception listing all negatives.

## Requirements

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/bhavik007/tdd-kata-string-calculator.git
   cd tdd-kata-string-calculator
   ```

1. **Install dependencies:**

   ```bash
   npm install
   ```

1. **Run the tests:**

   ```bash
   npm run test
   ```

## Directory Structure

```bash
/tdd-kata-string-calculator
│
├── src
│   ├── StringCalculator.js
│   └── utils.js
│
├── test
│   └── StringCalculator.test.js
│
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```
