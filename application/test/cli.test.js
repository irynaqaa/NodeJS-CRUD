// Unit tests for the CLI
const { runCLI } = require('../cli');

describe('CLI Tests', () => {
    it('should accept correct parameters', () => {
        const result = runCLI(['--test', 'testFile.js']);
        expect(result).toBe(true);
    });
});