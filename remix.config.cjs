module.exports = {
    appDirectory: "app",
    assetsBuildDirectory: "public/build",
    future: {
      /* any enabled future flags */
    },
    ignoredRouteFiles: ["**/.*"],
    publicPath: "/build/",
    serverBuildPath: "build/index.js",
    browserNodeBuiltinsPolyfill: {
        modules: {
            os: true,
            path: true,
            crypto: true
        }
    }
  };