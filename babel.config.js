module.exports = {
  presets: [
    [
      '@babel/preset-env', { targets: { ie: '11' } },
    ],
  ],
  sourceMaps: true,
  inputSourceMap: true,
};
