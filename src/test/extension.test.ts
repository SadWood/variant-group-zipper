import * as assert from 'assert';
import { unzipText, zipText } from '../extension';

suite('Extension Test Suite', () => {
	test('unzipText', () => {
		let input = 'md:(text-white/75 bg-gray-50 border-l-1 border-[#2FCAF9])';
		let expected = 'md:text-white/75 md:bg-gray-50 md:border-l-1 md:border-[#2FCAF9]';
		let actual = unzipText(input);
		assert.strictEqual(actual, expected);
	});

	test('zipText', () => {
		let input = 'md:text-white/75 md:bg-gray-50 md:border-l-1 md:border-[#2FCAF9]';
		let expected = 'md:(text-white/75 bg-gray-50 border-l-1 border-[#2FCAF9])';
		let actual = zipText(input);
		assert.strictEqual(actual, expected);
	});
});
