module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-explicit-any": true,
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      2,
      { allow },
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
  },
  "no-console": [
    true,
    {
      allow: ["warn", "error"],
    },
  ],
};
