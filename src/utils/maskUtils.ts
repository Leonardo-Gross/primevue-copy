import { INPUT_MASK_PATTERN } from '@Enums';

export function maxDigitsByMask(mask: INPUT_MASK_PATTERN): number {
  switch (mask) {
    case INPUT_MASK_PATTERN.CELLPHONE: return 11;
    case INPUT_MASK_PATTERN.CPF: return 11;
    case INPUT_MASK_PATTERN.DATE: return 8;
    case INPUT_MASK_PATTERN.PHONE: return 10;
    default: return 100;
  }
}
