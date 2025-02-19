# jsdropbear
jsdropbear is a simple and basic custom programming language interpreter built in JavaScript. It supports basic arithmetic operations, variable declarations, and a REPL (Read-Eval-Print Loop) for interactive programming. The interpreter evaluates expressions written in Dropbear's syntax and outputs the result.

---

![Image](./resources/diagram.png "jsdropbear interpreter workflow")

---

## 🚀 Features
- Custom **REPL (Read-Eval-Print Loop)** for interactive JavaScript execution.
- **Lexical Analysis** to tokenize the input source code.
- **Parsing** using a **Recursive Descent Parser** via Babel’s `@babel/parser`.
- **AST (Abstract Syntax Tree) Generation** using Babel’s powerful tooling.
- **Code Evaluation** with custom interpreters.
- **Error Handling** for syntax and runtime errors.
- Interactive CLI using **Inquirer** for enhanced user experience.

---

## How to Run:

1. Install dependencies

```bash
npm install
```

2. Running a Program

```bash
node bin/dropbear run examples/example.dbr
```

3. Using the REPL
```bash
node src/repl.js (or) node bin/dropbear
```

4. Install jest to run the Test-cases
```bash
npm install --save-dev jest
```

5. To run the Test-cases

```bash
npm test (or) npx jest (or) ./node_modules/.bin/jest
```
---

## Project Structure

```bash
+-- bin/
¦   +-- dropbear            # Main executable for running programs or starting REPL
+-- examples/
¦   +-- example.dbr         # Example Dropbear program
+-- src/
¦   +-- evaluate.js         # Evaluator for interpreting AST
¦   +-- identify.js         # Token identification logic
¦   +-- index.js            # Central module to export core functions
¦   +-- parse-and-evaluate.js # Chain of functions for tokenization, parsing, and evaluation
¦   +-- parse-program.js    # Program parsing logic
¦   +-- parse.js            # Token parsing into AST
¦   +-- repl.js             # REPL implementation
¦   +-- special-forms.js    # Special forms like define
¦   +-- standard-library.js # Standard library (e.g., math functions)
¦   +-- to-javascript.js    # Convert AST to JavaScript code
¦   +-- tokenize.js         # Tokenizer for input
¦   +-- transform.js        # AST transformation (e.g., handling define)
¦   +-- traverse.js         # AST traversal utilities
+-- tests/
¦   +-- evaluate.test.js    # Unit tests for evaluate.js
¦   +-- parse-program.test.js # Unit tests for parse-program.js
¦   +-- parse.test.js       # Unit tests for parse.js
¦   +-- special-forms.test.js # Unit tests for special-forms.js
¦   +-- to-javascript.test.js # Unit tests for to-javascript.js
¦   +-- tokenize.test.js    # Unit tests for tokenize.js
¦   +-- transform.test.js   # Unit tests for transform.js
¦   +-- traverse.test.js    # Unit tests for traverse.js
+-- .babelrc                # Babel configuration for transpiling JavaScript
+-- .gitignore              # Git ignore rules
+-- .prettierrc             # Prettier configuration for code formatting
+-- package-lock.json       # Lock file for dependencies
+-- package.json            # Project metadata and dependencies
```

---

