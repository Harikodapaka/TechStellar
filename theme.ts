'use client';

import { createTheme, MantineColorsTuple, rem } from '@mantine/core';

const tsRed: MantineColorsTuple = [
  '#ffeaec',
  '#fcd5d6',
  '#f2a9ab',
  '#ea797e',
  '#e35257',
  '#df393e',
  '#de2b31',
  '#c51e24',
  '#b1161f',
  '#9b0918',
];

const tsGrey: MantineColorsTuple = [
  '#f5f5f5',
  '#e7e7e7',
  '#cdcdcd',
  '#b2b2b2',
  '#9a9a9a',
  '#8b8b8b',
  '#848484',
  '#717171',
  '#656565',
  '#575757',
];

export const theme = createTheme({
  /* Put your mantine theme override here */
  fontFamily: 'Greycliff CF, sans-serif',
  primaryColor: 'tsRed',
  colors: {
    tsRed,
    tsGrey,
  },
  headings: {
    sizes: {
      h1: {
        fontSize: rem(60),
      },
      h2: { fontSize: rem(50) },
      h3: { fontSize: rem(40) },
      h4: { fontSize: rem(34) },
    },
  },
});
