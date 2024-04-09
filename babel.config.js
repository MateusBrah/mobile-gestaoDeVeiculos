module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          'module_name': '@env',
          'allowUndefined': false,
        }
      ]
    ]
  };
};
