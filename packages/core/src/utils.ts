export const createValidJSVarName = (str: string) =>
  `_${str.replace(/[^a-z0-9+]+/gi, "")}`;
