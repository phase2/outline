import { series } from "async";
import { exec } from "child_process";

series([
  // Remove any prior build assets.
  (callback: (error: Error | null) => void) => exec("rm -rf ./dist", callback),
  // Build the client-side assets.
  (callback: (error: Error | null) => void) =>
    exec(
      "esbuild index.ts --bundle --minify --sourcemap --outdir=dist --tsconfig=tsconfig.build.json",
      callback
    ),
  (callback: (error: Error | null) => void) =>
    exec("tsc -p tsconfig.build.json", callback),
  (callback: (error: Error | null) => void) =>
    exec(
      "rsync -avm --remove-source-files --include '*.css' --exclude '*' . dist",
      callback
    ),
]);
