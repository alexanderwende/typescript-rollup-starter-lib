import pluginTypescript from 'rollup-plugin-typescript2';
import pluginNodeResolve from 'rollup-plugin-node-resolve';
import pluginCommonJS from 'rollup-plugin-commonjs';
import { terser as pluginTerser } from 'rollup-plugin-terser';
import pluginFileSize from 'rollup-plugin-filesize';
import typescript from 'typescript';
import pkg from './package.json';

export default [
    {
        input: 'src/index.ts',
        plugins: [
            pluginTypescript({
                typescript: typescript,
                clean: true
            }),
            pluginNodeResolve(),
            pluginCommonJS(),
            pluginTerser(),
            pluginFileSize({
                showMinifiedSize: true,
                showGzippedSize: true,
                showBrotliSize: true
            })
        ],
        external: [
            ...Object.keys(pkg.dependencies || {}),
            ...Object.keys(pkg.peerDependencies || {})
        ],
        output: [
            {
                file: pkg.main,
                format: 'cjs',
                sourcemap: true
            },
            {
                file: pkg.module,
                format: 'es',
                sourcemap: true
            }
        ]
    }
];
