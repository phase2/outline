/**
 * @file Exports for the OutlineCoreAlert component.
 *
 * Any export here is then available via the following import,
 * which should be available in the consuming application:
 *
 * @code
 * import { OutlineCoreAlert } from '@phase2/outline-core-alert';
 * import {
 *   CoreAlertStatusType,
 *   OutlineCoreAlertInterface,
 * } from '@phase2/outline-core-alert';
 * @endcode
 *
 * Any of the above exports can be used in the consuming application
 * based on the contents of this file, and creativity of what functionality
 * you wish to expose to the consuming application(s).
 */

// Export the primary component.
export { OutlineCoreAlert } from './src/outline-core-alert';

export type {
  CoreAlertStatusType,
  OutlineCoreAlertInterface,
} from './src/config';

export { coreAlertStatusTypes } from './src/config';

// Export any additional sub-components, variables and methods as required.
