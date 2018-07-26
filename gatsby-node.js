const path = require('path');

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

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
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
