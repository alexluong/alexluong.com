const path = require('path');
const postcssCssnext = require('postcss-cssnext');
const poscssImport = require('postcss-import');

const BLOGPOST = 'blogPost';
const CATEGORY = 'category';
const PAGE = 'page';

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise(async (resolve, reject) => {
    const result = await getContentfulData(graphql);

    result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
      createPageWithData(createPage, node, BLOGPOST);
    });

    result.data.allContentfulCategory.edges.forEach(({ node }) => {
      createPageWithData(createPage, node, CATEGORY);
    });

    result.data.allContentfulPage.edges.forEach(({ node }) => {
      createPageWithData(createPage, node, PAGE);
    });

    resolve();
  });
};

exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.example/,
          use: [{ loader: 'raw-loader' }],
        },
        {
          test: /\.css$/,
          use: [
            loaders.miniCssExtract(),
            loaders.css({ importLoaders: 1 }),

            loaders.postcss({
              ident: 'postcss',
              plugins: () => [poscssImport(), postcssCssnext()],
            }),
          ],
        },
      ],
    },
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });

  const configAfterSettings = getConfig();

  const finalRules = configAfterSettings.module.rules.filter(rule => {
    if (Object.prototype.hasOwnProperty.call(rule, 'oneOf')) {
      return JSON.stringify(rule).indexOf('style-loader') === -1;
    }
    return true;
  });

  configAfterSettings.module.rules = finalRules;
  actions.replaceWebpackConfig(configAfterSettings);
};

const getContentfulData = async graphql => {
  return graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulCategory {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulPage {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
};

const createPageWithData = (createPage, node, type) => {
  let componentPath;
  switch (type) {
    case BLOGPOST:
      componentPath = path.resolve('./src/templates/Post.js');
      break;
    case CATEGORY:
      componentPath = path.resolve('./src/templates/Category.js');
      break;
    case PAGE:
      componentPath = path.resolve('./src/templates/Page.js');
      break;
    default:
      componentPath = path.resolve('./src/templates/Page.js');
      break;
  }

  createPage({
    path: node.slug,
    component: componentPath,
    context: {
      slug: node.slug,
    },
  });
};
