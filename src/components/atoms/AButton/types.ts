enum POSITION {
  BOTTOM = 'bottom',
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
}

enum SEVERITY {
  CONTRAST = 'contrast',
  DANGER = 'danger',
  HELP = 'help',
  INFO = 'info',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCESS = 'success',
  WARN = 'warn',
}

enum SIZE {
  LARGE = 'large',
  NORMAL = 'normal',
  SMALL = 'small',
}

enum VARIANT {
  CONTAINED = 'contained',
  OUTLINED = 'outlined',
  TEXT = 'text',
}

type Position = POSITION.BOTTOM | POSITION.LEFT | POSITION.RIGHT | POSITION.TOP;

type Severity =
  | SEVERITY.CONTRAST
  | SEVERITY.DANGER
  | SEVERITY.HELP
  | SEVERITY.INFO
  | SEVERITY.PRIMARY
  | SEVERITY.SECONDARY
  | SEVERITY.SUCESS
  | SEVERITY.WARN;

type Size = SIZE.LARGE | SIZE.NORMAL | SIZE.SMALL;

type Variant = VARIANT.CONTAINED | VARIANT.OUTLINED | VARIANT.TEXT;

export type { Position, Severity, Size, Variant };
export { POSITION, SEVERITY, SIZE, VARIANT };