import test from 'node:test';
import assert from 'node:assert';
import { validatePhoneNumber, validatePoemRequest } from '../app/utils/validation.js';

test('validatePhoneNumber accepts valid E.164 numbers', () => {
  assert.strictEqual(validatePhoneNumber('+14155552671'), true);
});

test('validatePhoneNumber rejects invalid numbers', () => {
  assert.strictEqual(validatePhoneNumber('4155552671'), false);
});

test('validatePoemRequest ensures all fields are present', () => {
  assert.strictEqual(validatePoemRequest({ question1: 'a', question2: 'b', question3: 'c', name: 'd' }), true);
  assert.strictEqual(validatePoemRequest({ question1: 'a', question2: '', question3: 'c', name: 'd' }), false);
});
