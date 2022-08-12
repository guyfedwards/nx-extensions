import { readJson, Tree } from '@nrwl/devkit';
import { createTestProject } from '../utils/testing';
import { libraryGenerator } from './library';
import { Linter } from '@nrwl/linter';

describe('application', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTestProject();
  });

  it('should add vite as a devDependency', async () => {
    await libraryGenerator(tree, {
      name: 'app',
      style: 'css',
      skipFormat: true,
      unitTestRunner: 'none',
      globalCss: false,
      linter: Linter.EsLint,
    });

    const packageJson = readJson(tree, 'package.json');
    expect(packageJson.devDependencies['vite']).toBeDefined();
  });
});
