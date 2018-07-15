import React from 'react';
import { Link } from 'gatsby';
import Markdown from 'markdown-to-jsx';

const MarkdownToHTML = ({
  md = 'No markdown is passed',
  forceBlock = false,
}) => (
  <Markdown
    children={md}
    options={{
      forceBlock,
      overrides: {
        Link: {
          component: Link,
        },
      },
    }}
  />
);

export default MarkdownToHTML;
