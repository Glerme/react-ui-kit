import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import { uglify } from "rollup-plugin-uglify";
import babel from "@rollup/plugin-babel";
import dts from "rollup-plugin-dts";
import copy from "rollup-plugin-copy";

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
        format: "es",
        sourcemap: true,
      },
    ],
    plugins: [
      dts(),
      peerDepsExternal(),
      resolve(),
      commonjs({ extensions: [".js", ".ts"] }),
      typescript({
        useTsconfigDeclarationDir: true,
        tsconfigOverride: {
          exclude: ["**/*.stories.*"],
        },
      }),
      postcss({
        minimize: true, // uses cssnano behind scene
        modules: true, // enable css modules
        extensions: [".css", ".scss", ".sass"], // uses node-sass
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
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
        ],
      }),
      uglify(),
    ],
  },
  {
    input: "dist/index.d.ts",
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
