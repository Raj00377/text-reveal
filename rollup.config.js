import terser from "@rollup/plugin-terser";
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

const devMode = process.env.NODE_ENV === 'development';

export default [{
  input: 'src/index.ts',
  external: ['react', 'react/jsx-runtime'],
  output: {
    file: 'dist/index.js',
    format: 'es',
    sourcemap: devMode ? 'inline' : false,
  },
  plugins: [
    typescript({ tsconfig: './tsconfig.json', sourceMap: devMode }),
    terser({
      ecma: 2020,
      mangle: { toplevel: true },
      compress: {
        module: true,
        toplevel: true,
        unsafe_arrows: true,
        drop_console: devMode,
        drop_debugger: !devMode
      },
      output: { quote_style: 1 }
    }),
  ]
},
{
  input: 'dist/types/index.d.ts',
  output: [{ file: 'dist/index.d.ts' }],
  plugins: [dts()],
}]