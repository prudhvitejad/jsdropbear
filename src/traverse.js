/*
  This design follows the visitor pattern, allowing users to define behavior when entering or exiting specific node types.
  
  1. traverseNode({ node, parent, visitor })
    Looks up visitor[node.type].
    If an enter method exists, it calls it.
    Then recursively traverses node.arguments (if they exist).
    After recursion, calls exit (if defined).

  2. traverseArray({ array, parent, visitor })
    Just a helper that runs traverseNode for every node in an array.

  3. traverse(node, visitor)
    Entrypoint: starts traversal at the root node.
  
  Eg: Assume we have below AST.

    {
      type: 'CallExpression',
      name: 'add',
      arguments: [
        { type: 'NumericLiteral', value: '2' },
        {
          type: 'CallExpression',
          name: 'subtract',
          arguments: [
            { type: 'NumericLiteral', value: '4' },
            { type: 'NumericLiteral', value: '2' }
          ]
        }
      ]
    }
    
  We could write a visitor like this:
    
    const visitor = {
      CallExpression: {
        enter({ node }) {
          console.log(`Entering Call: ${node.name}`);
        },
        exit({ node }) {
          console.log(`Exiting Call: ${node.name}`);
        }
      },
      NumericLiteral: {
        enter({ node }) {
          console.log(`Number: ${node.value}`);
        }
      }
    };

  Calling traverse(ast, visitor) would give you:

    Entering Call: add
    Number: 2
    Entering Call: subtract
    Number: 4
    Number: 2
    Exiting Call: subtract
    Exiting Call: add
*/
const traverseNode = ({ node, parent, visitor }) => {
  const methods = visitor[node.type];

  if (methods && methods.enter) {
    methods.enter({ node, parent });
  }

  if (node.arguments) {
    traverseArray({ array: node.arguments, parent: node, visitor });
  }

  if (methods && methods.exit) {
    methods.exit({ node, parent });
  }
};

const traverseArray = ({ array, parent, visitor }) => {
  array.forEach(node => {
    traverseNode({ node, parent, visitor });
  });
};

/**
 * Implements the Visitor Pattern to walk through the AST nodes.
 * Provides the mechanism to go through each node and run enter() or exit() callbacks based on the node type. 
 */
const traverse = (node, visitor) => {
  traverseNode({ node, visitor });
};

module.exports = { traverse };

// const visitor = {
//   VariableDeclaration: {
//     enter({ node, parent }) {},
//     exit() {}
//   }
// }
