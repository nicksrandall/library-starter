import babel from 'rollup-plugin-babel';

export default {
	useStrict: false,
	plugins: [
    babel({
      exclude: 'node_modules/**'
    })
	]
};
