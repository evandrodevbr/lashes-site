/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['sqlite3'],
    },
    webpack: (config) => {
        config.externals.push({
            sqlite3: 'commonjs sqlite3',
        });
        return config;
    },
};

export default nextConfig;