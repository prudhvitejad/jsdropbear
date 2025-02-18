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
node src/repl.js
```

