// rollup.config.js
export default {
  // other configurations
  output: {
    // other output options
    manualChunks(id) {
      // specify manual chunks
      if (id.includes("node_modules")) {
        return "vendor";
      }
    },
  },
};
