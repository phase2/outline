# Contributing to Outline

> This document serves to help understand how to contribute to the open source Outline project. For project specific details, please consult the README.md in your project.

## Code of Conduct

We have a [Code of Conduct](https://github.com/phase2/outline/blob/next/CODE_OF_CONDUCT.md), please follow it in all interactions with project maintainers and fellow users.

## Using Gitpod

If you have a web browser, you can get a fully pre-configured development environment with one click:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/phase2/outline)

## Testing (pending)

All PRs require passing tests before the PR will be reviewed.

Test files should be located in a test folder in your component directory with a .test.ts extension i.e. `src/components/base/outline-element/test/outline-element.test.ts`

Testing is handled by [Web Test Runner](https://modern-web.dev/guides/test-runner/getting-started/) and uses [Playwright](https://playwright.dev/) to test modern browsers locally.

Run tests on Chromium, Firefox, and Webkit using
`yarn run test:local`

You can also append one or more browsers to test on specifically i.e.
`BROWSERS=firefox,chromium yarn run test`

Optionally you can run tests using [BrowserStack](https://www.browserstack.com/) by running 
`yarn run test:browserstack`
Note: You must enter your username and access key in the .env file to use BrowserStack testing.

More info on writing tests for web components can be found at [Open-WC.org](https://open-wc.org/docs/testing/helpers/).

---

## Pull Requests

Pull requests are greatly appreciated! To ensure a smooth review process, please follow these steps:

1. Make sure there's an open issue that the PR addresses. Add "Fixes #(issue number)" to the PR description.
2. Please discuss the general shape of the change ahead of time and include screenshots where appropriate. This can save much time for reviewers and submitters alike. Many times there may be existing ideas on how to handle an issue that are not fully written out, and asking about it will bring out more details.
3. All PRs that change behavior or fix bugs should have new or updated tests.
4. Try to create a set of descriptive commits that each do one focused change. Avoid commits like "oops", and prefer commits like "Added method foo to Bar".
5. When addressing review comments, try to add new commits, rather than modifying previous commits. This makes it easier for reviewers to see what changed since the last review. 
6. Please run `yarn lint` and `yarn format` before submitting PRs. PRs that don't lint and aren't formatted will fail continuous integration tests.

---

## Commit messages

Outline uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
> The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with [SemVer](https://semver.org/), by describing the features, fixes, and breaking changes made in commit messages.

### Sample commit messages

#### Patch releases

This will create a patch release (1.0.0 --> 1.0.1).

```bash
fix: updated Storybook packages
```

#### Minor releases

This will create a minor release (1.0.0 --> 1.1.0).

```bash
feat: added outline-something component
```

This will create a minor release (1.0.0 --> 1.1.0) and uses (ci) to 'tag' this as a feature related to the continuous integration setup.

```bash
feat(ci): updated CI setup
```

#### Major releases

This will create a major release (1.0.0 --> 2.0.0).

```bash
feat: refactoring the something component

BREAKING CHANGE - Requires a rewrite of all your code.
```

---

## Code Cleanup

Code is not automatically formatted upon commit. As a matter of best practices, you should run `yarn format` and `yarn lint` prior to committing code to prevent pipelines from failing in the `Test and Build` task.

### Run all Prettier and SVG formatting

```bash
yarn format
```

---

### Run Prettier formatting

```bash
yarn format:code
```

---

### Run svgo formatting

```bash
yarn format:svg
```

---
