import nodePath from 'node:path'
import { fileURLToPath } from 'node:url'
import { FlatCompat } from '@eslint/eslintrc'
import eslintParserTypeScript from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
import eslintPluginReadableTailwind from 'eslint-plugin-readable-tailwind'
import security from 'eslint-plugin-security'
import sonarjs from 'eslint-plugin-sonarjs'
import tailwind from 'eslint-plugin-tailwindcss'
import unicorn from 'eslint-plugin-unicorn'
import prettierConfig from 'eslint-config-prettier'
import unusedImports from 'eslint-plugin-unused-imports'

const __filename = fileURLToPath(import.meta.url)
const __dirname = nodePath.dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: {}
})

const eslintConfig = [
    ...compat.extends(
        'eslint:recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
        'next/core-web-vitals',
        'next/typescript',
        'plugin:tailwindcss/recommended'
    ),
    {
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            parser: eslintParserTypeScript,
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: __dirname
              }
        },
        plugins: {
            'eslint-plugin-import': importPlugin,
            'unused-imports': unusedImports,
            sonarjs: sonarjs,
            unicorn: unicorn,
            security: security,
            prettier: prettier,
            'readable-tailwind': eslintPluginReadableTailwind,
            tailwind: tailwind
        },
        settings: {
            react: {
                version: 'detect'
            },
            tailwindcss: {
                callees: ['cn'],
                config: 'tailwind.config.ts',
                cssFiles: ['**/*.css', '**/*.scss', '**/*.sass'],
                removeDuplicates: true,
                whitelist: []
            }
        },
        rules: {
            ...prettierConfig.rules,
            ...sonarjs.configs.recommended.rules,
            ...unicorn.configs.recommended.rules,
            ...security.configs.recommended.rules,
            ...eslintPluginReadableTailwind.configs.warning.rules,
            ...eslintPluginReadableTailwind.configs.error.rules,
            ...tailwind.configs['flat/recommended'].rules,
            'readable-tailwind/sort-classes': 'off',
            'no-console': 'warn',
            'no-floating-decimal': 'error',
            'no-sequences': 'error',
            curly: 'off',
            'no-lonely-if': 'error',
            'one-var-declaration-per-line': 'error',
            '@next/next/no-img-element': 'error',
            'react-hooks/rules-of-hooks': 'off',
            'unicorn/prefer-global-this': 'off',
            'unicorn/prefer-default-parameters': 'off',
            'unicorn/no-null': 'off',
            'func-style': 'error',
            'no-debugger': 'warn',
            'no-empty': 'error',
            semi: ['warn', 'never'],
            'newline-before-return': 'error',
            'newline-after-var': 'error',
            'space-in-parens': 'error',
            'react/jsx-wrap-multilines': 'off',
            'react/no-unescaped-entities': 0,
            'unicorn/prevent-abbreviations': 'off',
            'unicorn/prefer-module': 'off',
            '@typescript-eslint/no-require-imports': 'off',
            "@typescript-eslint/consistent-type-exports": "error",
            "@typescript-eslint/consistent-type-imports": "error",
            quotes: [
                'error',
                'single',
                {
                    allowTemplateLiterals: false,
                    avoidEscape: true
                }
            ],
            'array-callback-return': 'off',
            'unicorn/filename-case': [
                'error',
                {
                    cases: {
                        camelCase: true,
                        kebabCase: true
                    }
                }
            ],
            'prettier/prettier': [
                'warn',
                {
                    printWidth: 80,
                    trailingComma: 'none',
                    tabWidth: 4,
                    semi: false,
                    singleQuote: true,
                    jsxSingleQuote: true,
                    arrowParens: 'always',
                    bracketSameLine: false
                }
            ],
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index'
                    ],
                    pathGroups: [
                        {
                            pattern: '@shared/**',
                            group: 'internal',
                            position: 'after'
                        },
                        {
                            pattern: '@entities/**',
                            group: 'internal',
                            position: 'after'
                        },
                        {
                            pattern: '@features/**',
                            group: 'internal',
                            position: 'after'
                        },
                        {
                            pattern: '@widgets/**',
                            group: 'internal',
                            position: 'after'
                        },
                        {
                            pattern: '@pages/**',
                            group: 'internal',
                            position: 'after'
                        },
                        {
                            pattern: '@app/**',
                            group: 'internal',
                            position: 'after'
                        }
                    ],
                    pathGroupsExcludedImportTypes: ['builtin'],
                    'newlines-between': 'never',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true
                    }
                }
            ],
            'unused-imports/no-unused-imports': 'warn',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_'
                }
            ]
        },
        ignores: ["eslint.config.mjs", "stylelint.config.cjs", "postcss.config.mjs"],
    }
]

export default eslintConfig
