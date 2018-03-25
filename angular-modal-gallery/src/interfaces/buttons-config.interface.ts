/**
 * Interface `ButtonsConfig` to show/hide buttons.
 */
export interface ButtonsConfig {
  download?: boolean;
  extUrl?: boolean;
  close?: boolean;
}

export interface SelectionInfo {
  total: number;
  selectedCount: number;
}