import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        ignores: [
            '.next',
            '.next/**',
            'out',
            'out/**',
            'node_modules',
            'node_modules/**',
            'dist',
            'dist/**',
            '**/*.d.ts',
            '**/*.d.mts',
            '**/*.config.js',
            '**/*.config.cjs',
            '**/*.config.mjs',
            'jest.setup.cjs',
        ],
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.{ts,tsx}'],
        rules: {
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],
            '@typescript-eslint/no-explicit-any': 'warn',
        },
    },
);