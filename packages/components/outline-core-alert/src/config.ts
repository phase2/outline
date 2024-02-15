/**
 * @file Shared configuration for the `outline-core-alert` component.
 */
export const coreAlertStatusTypes = [
  'info',
  'warning',
  'error',
  'success',
] as const;
export type CoreAlertStatusType = (typeof coreAlertStatusTypes)[number];

// This can be useful for testing.
export interface OutlineCoreAlertInterface extends HTMLElement {
  status: CoreAlertStatusType;
  isInteractive: boolean;
}
