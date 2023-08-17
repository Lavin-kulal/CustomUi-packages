import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/esm/index.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      postcss({
        extensions: [".css"],
      }),
      nodeResolve({
        extensions: [".js", "jsx"],
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
      babel({
        babelHelpers: "bundled",
        presets: ["@babel/preset-env", "@babel/preset-react"],
        extensions: [".js"],
      }),
      commonjs(),
      replace({
        preventAssignment: false,
        "process.env.NODE_ENV": '"development"',
      }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    external: [/\.css$/],
    plugins: [dts()],
  },
];
