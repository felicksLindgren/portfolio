/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const runtimeCache = require('next-pwa/cache');

module.exports = {
  pwa: {
    dest: 'public',
    runtimeCache
  },
  output: 'standalone',
}
