import sass from 'rollup-plugin-sass';
import { uglify } from 'rollup-plugin-uglify';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: {
    index: 'src/index.ts',
    hooks: 'src/hooks/index.ts',
    styles: 'src/styles/index.ts',
    services: 'src/services/index.ts',
    types: 'src/types/index.ts',
    utils: 'src/utils/index.ts',
    lib: 'src/lib/index.ts',
  },
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [sass({ insert: true }), typescript(), uglify()],
  external: [
    'react',
    'react-dom',
    'react-query',
    'react-router-dom',
    'styled-components',
    'styled-components/native',
    'axios',
    'camelcase-keys',
    'snakecase-keys',
    '@apollo/client',
    'cross-fetch',
  ],
};
