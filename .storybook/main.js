const path = require("path");
const modulesDir = path.join(process.cwd(), "node_modules");

// This config is due to lunatic : scss and antlr for fallback
const webpackConfigOverride = config => ({
    ...config,
    "module": {
        ...config.module,
        "rules": [
            ...config.module.rules,
            {
                "test": /\.scss$/,
                "use": ["style-loader", "css-loader", "sass-loader"],
                "include": path.join(modulesDir, "../"),
            },
        ]
    },
    "resolve": {
        ...config.resolve,
        "modules": [...(config.resolve.modules || []), path.resolve(modulesDir, "../src")],
        "fallback": {
            ...(config.resolve || {}).fallback,
            fs: false,
            stream: false,
            os: false,
        },
        "alias": {
            ...config.resolve.alias,
            "@emotion/core": path.join(modulesDir, "@emotion/react"),
            "@emotion/styled": path.join(modulesDir, "@emotion/styled"),
            "@emotion/styled-base": path.join(modulesDir, "@emotion/styled"),
            "emotion-theming": path.join(modulesDir, "@emotion/react"),
        },
    },
});

const LunaticConfig = async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../"),
    });

    config.resolve = {
        modules: [...(config.resolve.modules || []), path.resolve(__dirname, "../")],
        fallback: {
            ...(config.resolve || {}).fallback,
            fs: false,
            stream: false,
            os: false,
        },
        plugins: [
            ...(config.resolve.plugins || []),
            new TsconfigPathsPlugin({
                extensions: config.resolve.extensions,
            }),
        ],
    };

    // Return the altered config
    return config;
};

module.exports = {
    "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "storybook-dark-mode",
    ],
    "framework": "@storybook/react",
    "core": {
        "builder": "webpack5",
    },
    "managerWebpack": webpackConfigOverride,
    "webpackFinal": webpackConfigOverride,
};
