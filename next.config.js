/** @type {import('next').NextConfig} */
const withPrefix = (path) => {
    const prefix = '/';
    return prefix + path;
};

const nextConfig = {
    assetPrefix: withPrefix(''),
};
  

module.exports = nextConfig
