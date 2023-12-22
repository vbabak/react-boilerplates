// @ts-check

const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: false,
  distDir: 'dist',
  compiler: {
    // removeConsole: true,
  },
};

module.exports = nextConfig;
