export const unescapeLineBreaks = (string: string) => {
  return string.replace(/\\n/g, '\n');
};
