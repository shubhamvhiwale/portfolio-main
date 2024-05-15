// components configs
export interface CountUpConfig {
  start: number;
  end: number;
  duration?: number;
  decimals?: number;
  decimal?: string;
  prefix?: string;
  suffix?: string;
  separator?: string;
  handleOnStart?: () => void;
  handleOnEnd?: () => void;
}
