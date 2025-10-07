import { tokens } from '@fedorovskyi/theme';

export function spacing(value: number) {
  return `calc(${tokens.spacing} * ${value})`;
}
