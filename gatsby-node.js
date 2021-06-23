const path = require('path');

exports.onCreateWebpackConfig = (args) => {
  args.actions.setWebpackConfig({
    devtool: 'none',
    context: path.resolve(__dirname, 'src'),
    resolve: {
      // ⚠ Note the '..' in the path because the docz gatsby project lives in the `.docz` directory
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    }
  });
};

exports.onCreateBabelConfig = ({ actions }) => {
    actions.setBabelPlugin({ name: '@babel/plugin-syntax-class-properties', options: {} });
};
