import React from 'react';
import 'prismjs/themes/prism-solarizedlight.css';

const HTMLBody = ({ html }) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

export default HTMLBody;
