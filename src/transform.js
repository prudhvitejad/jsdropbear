const { traverse } = require('./traverse');

/**
 * 
 * Takes an AST node (usually the root). Walks the tree using traverse(...). When it encounters a CallExpression with a name that exists in specialForms, it calls the corresponding function(like If node.name === 'define', it transforms the node from a CallExpression to a VariableDeclaration).

  * Eg:
  * Before transform:
  * {
  *   type: 'CallExpression',
  *   name: 'define',
  *   arguments: [
  *     { type: 'Identifier', name: 'x' },
  *     { type: 'NumericLiteral', value: 10 }
  *   ]
  * }

  * After transform:
  * {
  *   type: 'VariableDeclaration',
  *   identifier: { type: 'Identifier', name: 'x' },
  *   assignment: { type: 'NumericLiteral', value: 10 }
  * }
 * @returns Returns the transformed/modified AST, which is easier to evaluate or compile later.
 */
const transform = node => {
  traverse(node, {
    CallExpression: {
      enter({ node }) {
        if (specialForms[node.name]) {
          specialForms[node.name](node);
        }
      },
    },
  });
  return node;
};

// CallExpression
//    - name (define)
//    - arguments (identifier, assignment)

// VariableDeclaration

const specialForms = {
  define(node) {
    const [identifier, assignment] = node.arguments;
    node.type = 'VariableDeclaration';
    node.identifier = identifier;
    node.assignment = assignment;
    delete node.name;
    delete node.arguments;
  },
};

module.exports = { specialForms, transform };
