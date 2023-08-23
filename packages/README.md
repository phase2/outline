# Packages

> The `packages` directory is setup in an organized fashion to help organize more efficient package releases.

## Notes on directory structure

The following describes how packages are organized.
This is open for adjustment based on future needs.

- Primary `outline-core-*` component packages live at the root of `packages/components`.
- Dated packages to `packages/components/@deprecated`.
  - These packages are either completely deprecated or in need of an update for 2023 to our new `outline-core-*` format, and pass audits for a11y, and ensuring alignment with the (currently internal) Design Starter Kit.
- Controller packages live in `packages/controllers`.
  - Deprecated controllers live in `packages/controllers/@deprecated`.
- Documentation related packages and components live in `packages/documentation`.  
- Tooling related packages live in `packages/tools`.
  
## `yarn` workspaces

Yarn workspaces are a feature of [Yarn](https://yarnpkg.com/) that allows you to manage multiple packages within a single top-level, root package. It provides a convenient way to work on interdependent packages, making it easier to develop and test changes across multiple packages simultaneously. For more information, you can refer to the [Yarn workspaces documentation](https://yarnpkg.com/features/workspaces).

To define the workspaces in your project, you can use the `workspaces` field in your `package.json` file. This field should be an array of glob patterns that specify the directories containing your packages.

Here is an example of how the current workspaces are set up:

```json
"workspaces": [
  "./packages/*",
  "./packages/components/*",
  "./packages/components/@deprecated/*",
  "./packages/documentation/*",
  "./packages/controllers/*",
  "./packages/controllers/@deprecated/*",
  "./packages/tools/*"
],
```
