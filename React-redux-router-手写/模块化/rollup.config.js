module.exports = {
    input: './src/index.js',
    output: [
        {
            format: 'cjs',
            name: 'xizhou',
            file: './build/bundle.cjs.js'
        },
        {
            format: 'es',
            name: 'xizhou',
            file: './build/bundle.es.js'
        },
        {
            format: 'amd',
            name: 'xizhou',
            file: './build/bundle.amd.js'
        },
        {
            format: 'iife',
            name: 'xizhou',
            file: './build/bundle.iife.js'
        },
        {
            format: 'umd',
            name: 'xizhou',
            file: './build/bundle.umd.js'
        },
    ]
}