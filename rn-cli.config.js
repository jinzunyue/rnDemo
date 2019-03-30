module.exports = {
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer')
  },
  getSourceExts() {
    return ['ts', 'tsx'];
  },
  getBlackListRE() {
    return blacklist([
      "^.idea/*", "^Tests/*"
    ]);
  }
};
