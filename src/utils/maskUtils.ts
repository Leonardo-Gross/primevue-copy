import { INPUTMASKPATTERN } from '@Enums';

export function maxDigitsByMask(mask: INPUTMASKPATTERN): number {
  switch (mask) {
    case INPUTMASKPATTERN.CELLPHONE: return 11;
    case INPUTMASKPATTERN.CPF: return 11;
    case INPUTMASKPATTERN.DATE: return 8;
    case INPUTMASKPATTERN.PHONE: return 10;
    default: return 100;
  }
}
