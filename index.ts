export const akerman = (m: number, n: number): number => {
  if (m == 0) {
    return n + 1;
  } else if (n == 0) {
    return akerman(m - 1, 1);
  }
  return akerman(m - 1, akerman(m, n - 1));
};
