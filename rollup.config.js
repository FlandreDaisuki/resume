import vue from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

import { copySync, ensureDirSync } from 'fs-extra';

ensureDirSync('docs/assets');
copySync('index.html', 'docs/index.html');
copySync('assets', 'docs/assets');

process.env.NODE_ENV = 'production';

export default {
  input: 'index.js',
  plugins: [
    resolve(),
    commonjs(),
    vue(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  output: {
    file: 'docs/index.js',
    format: 'cjs',
  },
};
