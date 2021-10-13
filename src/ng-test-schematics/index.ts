import { strings } from '@angular-devkit/core';
import { apply, applyTemplates, chain, mergeWith, Rule, SchematicContext, Source, Tree, url } from '@angular-devkit/schematics';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
// export function ngTestSchematics(_options: any): Rule {
//   return (tree: Tree, _context: SchematicContext) => {
//     return tree;
//   };
// }

// function ngTestSchematics(_options: any): Rule {
//   return (tree: Tree, _context: SchematicContext) => {
//     const fileName = _options.fileName || 'default.js';
//     const content = 'console.log("Created with Schematics!");';
//
//     tree.create(fileName, content);
//
//     return tree;
//   };
// }

export function ngTestSchematics(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const rule = chain([
      createFile(_options),
      doSomethingElse(_options)
    ]);

    return rule(tree, _context);
  };
}

function createFile(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const source: Source = url('./files');
    const templateSource: Source = apply(source, [
      applyTemplates({
        ..._options,
        ...strings
      })
    ]);

    const rule: Rule = mergeWith(templateSource);

    return rule(tree, _context);
  };
}

function doSomethingElse(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    if (!_options.fileName) {
      const fileName = 'INFO_LOG.md';
      const content = 'Please check default.js and adjust the name!';

      tree.create(fileName, content);
    }

    return tree;
  };
}
