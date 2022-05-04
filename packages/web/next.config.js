/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: /\.tsx?$/,
            include: [options.dir],
            use: [
                "next-swc-loader",
                {
                    loader: "@svgr/webpack",
                    options: { babel: false },
                },
            ],
        });
        return config;
    },
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    experimental: {
        esmExternals: true,
        externalDir: true,
    },
};

module.exports = nextConfig;
