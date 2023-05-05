import css from "rollup-plugin-import-css";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import html from '@rollup/plugin-html';
const mode = process.env.mode;

const plugins = [
	css(),
	nodeResolve(),
];

if (mode === 'development') {
	plugins.push(serve({
		host: 'localhost',
		port: 8080
	}));
	plugins.push(livereload());
} else {
	plugins.push(html());
}

export default {
	input: 'src/app.js',
	output: {
		dir: 'dist',
		format: 'iife'
	},
	plugins
}