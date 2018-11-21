---
title: "Generate Gatsby ImageSharp from an Image URL"
slug: "generate-gatsby-image-sharp-from-an-image-url"
categories: ["web-development"]
tags: ["gatsby"]
author: "alexluong"
date: "7/28/2018"
featuredImage: "gatsby.jpg"
---

Recently, I wrote a Gatsby source plugin that fetch images from Dog API ([gatsby-source-dog](https://github.com/alexluong/gatsby-source-dog "Gatsby Source Dog plugin")). After finishing the core functionality of calling the API, I was not satisfied because it only gave me dog image URLs. I can't do all the fancy "blur up" or "trace SVG" effect from Gatsby Image with just an URL. I wanted to generate ImageSharp from those URLs.

After hours of research into how I could perform this, I decided to seek some directions from [@jlengstorf](https://twitter.com/jlengstorf "Jason Lengstorf's twitter"). He pointed me to a function called `createRemoteFileNode` (thank you Jason). It became a smooth sailing from there as I could quickly figure out how to use it to implement my feature.

So, here's how I generate Gatsby ImageSharp from an Image URLs:

# High Level Concept

The function `createRemoteFileNode` takes a URL and download it to a local file. With an image URL, we use that function and 2 other plugins, `gatsby-plugin-sharp` and `gatsby-tranformer-sharp` to generate an ImageSharp from that file.

In my Gatsby source plugin, I fetched image URLs and turned them into a new node, DogImage. I then used the process described above to create new ImageSharp. Afterwards, I used the `___NODE` appendix to connect the 2 nodes.

# In Code

Let's say we have a node DogImage with a field `url`, which is the image URL. We'll use `onCreateNode` lifecycle function from Gatsby Node API to extend that node to generate an ImageSharp.

Let's put this in our `gatsby-node.js`:

```js
// in our gatsby-node.js

import { onCreateNode } from "./on-create-node"
...
export { onCreateNode }
```

Now, all the code we need will be in our `on-create-node.js` file.

What we wanna do is:

1. Check if the node is DogImage
2. Use `createRemoteFileNode` to download the image
3. Link the newly downloaded File to the DogImage node

Here was how I implemented that:

```js
// in our on-create-node.js

import { createRemoteFileNode } from "gatsby-source-filesystem"

async function onCreateNode({ node, actions, store, cache }) {
  // if the node is not DogImage, we don't wanna do anything
  if (node.internal.type !== "DogImage") {
    return
  }

  const { createNode } = actions

  // download image and create a File node
  // with gatsby-transformer-sharp and gatsby-plugin-sharp
  // that node will become an ImageSharp
  const fileNode = await createRemoteFileNode({
    url: node.url,
    store,
    cache,
    createNode,
    createNodeId: id => `dog-image-sharp-${id}`,
  })

  if (fileNode) {
    // link File node to DogImage node
    // at field image
    node.image___NODE = fileNode.id
  }
}

export default onCreateNode
```

With this code, we can perform this query

```graphql
{
  allDogImage {
    edges {
      node {
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}
```

and get a "blur up" effect on our images. 🎉🎉

# Wrap Up

This seems like a common functionality, yet it took me a while to research, explore, and implement. Hopefully this post saves you some time, problems, and frustration. To learn more about the star of the show, `createRemoteFileNode`, you can read more at gatsby-source-filesystem's [documentation](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-filesystem/README.md#createremotefilenode "Gatsby Source Filesystem's documentation"). And if you want to see what I show you here in action, feel free to check out the source code of my plugin: [gatsby-source-dog](https://github.com/alexluong/gatsby-source-dog "Gatsby Source Dog plugin").
