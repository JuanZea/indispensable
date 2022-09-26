export const fibonacci = (n: number): number => {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

export const getHeroInfo = (name: string) => {
  if (name == 'Batman') {
    return {
      name: 'Batman',
      age: 35,
      powers: ['money', 'intelligence'],
    };
  } else if (name == 'Superman') {
    return {
      name: 'Superman',
      age: 100,
      powers: ['flight', 'strength'],
    };
  } else {
    throw new Error('Hero not found');
  }
};

export const sayHello = (name: string) => console.log('Hello ', name);

export const akerman = (m: number, n: number): number => {
  if (m == 0) {
    return n + 1;
  } else if (n == 0) {
    return akerman(m - 1, 1);
  }
  return akerman(m - 1, akerman(m, n - 1));
};
