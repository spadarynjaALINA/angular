module.exports = {
  root: true,
  "plugins": ["import", "html"],

  overrides: [
    {
      files: ["*.ts"],

      parserOptions: {
         'parser': 'babel-eslint',
        "ecmaVersion": 6,
  "ecmaFeatures": {
    "experimentalObjectRestSpread": true
  },
        project: [
          "tsconfig.*?.json",

        ],
        createDefaultProgram: true
      },
      extends: [
        "plugin:@angular-eslint/recommended",
        'airbnb-typescript/base'
      ],
      rules: {
         "lines-between-class-members": "off",
    "class-methods-use-this": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-plusplus": "off",
    "no-console": "warn",
    "import/no-extraneous-dependencies": ["off", { "devDependencies": ["**/*.test.tsx", "**/*.spec.js"] }],
    "import/extensions": 0,
    "max-len": ["warn", { "code": 12000 }],
    "indent": [
      "warn",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "@typescript-eslint/indent": [
      "warn",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "import/prefer-default-export": "off",
    "no-param-reassign": [
      "error",
      {
        "props": false
      }
    ]
      },

    },
    {
    files: ['src/**/*.spec.ts', 'src/**/*.d.ts'],
    parserOptions: {
      project: './src/tsconfig.spec.json',
    },
   
    extends: ['plugin:jasmine/recommended'],

    plugins: ['jasmine'],
    env: { jasmine: true },

    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
    },
  }

  ]
}
