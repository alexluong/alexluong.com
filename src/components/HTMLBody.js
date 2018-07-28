import React from 'react';
import Helmet from 'react-helmet';

import 'prismjs/themes/prism-solarizedlight.css';

const HTMLBody = ({ html }) => (
  <React.Fragment>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://cdn.rawgit.com/tonsky/FiraCode/1.205/distr/fira_code.css"
      />
    </Helmet>

    <div dangerouslySetInnerHTML={{ __html: html }} />
  </React.Fragment>
);

export default HTMLBody;
