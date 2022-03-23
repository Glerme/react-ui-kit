import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import copy from "rollup-plugin-copy";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import scss from "rollup-plugin-scss";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: [
          "**/*.spec.ts",
          "**/*.test.ts",
          "**/*.stories.ts",
          "**/*.spec.tsx",
          "**/*.test.tsx",
          "**/*.stories.tsx",
          "node_modules",
          "bower_components",
          "jspm_packages",
          "dist",
        ],
        compilerOptions: {
          sourceMap: true,
          declaration: true,
        },
      }),
      scss({
        output: "./dist/css/style.css",
        sourceMap: true,
        sass: require("node-sass"),
        outputStyle: "compressed",
      }),
      postcss({
        minimize: true, // uses cssnano behind scene
        modules: false, // enable css modules
        extensions: [".css", ".scss", ".sass"], // uses node-sass
      }),
      copy({
        targets: [
          {
            src: "src/styles/shadows.scss",
            dest: "dist",
            rename: "shadows.scss",
          },
          {
            src: "src/styles/breakpoints.scss",
            dest: "dist",
            rename: "breakpoints.scss",
          },
          {
            src: "src/styles/colors.scss",
            dest: "dist",
            rename: "colors.scss",
          },
          {
            src: "src/styles/typography.scss",
            dest: "dist",
            rename: "typography.scss",
          },
          {
            src: "src/styles/utils/typography.utilities.scss",
            dest: "dist",
            rename: "typography.utilities.scss",
          },
          {
            src: "src/styles/utils/colors.utilities.scss",
            dest: "dist",
            rename: "colors.utilities.scss",
          },
          {
            src: "src/styles/utils/buttons.utilities.scss",
            dest: "dist",
            rename: "buttons.utilities.scss",
          },
          {
            src: "src/styles/utils/fields.utilities.scss",
            dest: "dist",
            rename: "fields.utilities.scss",
          },
        ],
      }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [
      {
        file: "dist/index.d.ts",
        format: "esm",
      },
    ],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/],
  },
];
