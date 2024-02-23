/**
 * This configuration file for commitlint extends the default configuration
 * provided by '@phase2/outline-config/commitlint.config'.
 *
 * The process of extending the configuration works in two steps:
 *
 * 1. Creating a Baseline Default:
 *    The default configuration is a set of rules defined in
 *    '@phase2/outline-config/commitlint.config'. These rules provide a
 *    baseline standard for commit messages, ensuring consistency and
 *    readability across all commits.
 *
 * 2. Allowing Project-Specific Alterations:
 *    By extending the default configuration in this file, we allow for
 *    project-specific alterations. This means that while the baseline rules
 *    are followed, there is flexibility for the project to define its own
 *    rules or override the default ones. This is done by adding or modifying
 *    rules in this file.
 *
 * If a project decides it doesn't need the default configuration, it can
 * completely overwrite it by not extending '@phase2/outline-config/commitlint.config'
 * and defining its own rules from scratch.
 *
 * The use of the spread operator (...) before 'defaultConfig' ensures that
 * the rules from the default configuration are correctly imported and
 * applied in this file.
 */
const defaultConfig = require(`@phase2/outline-config/commitlint.config`);
module.exports = {
  ...defaultConfig,
};
