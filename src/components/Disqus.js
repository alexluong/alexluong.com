import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import config from '../../data/config';

class Disqus extends React.Component {
  state = {
    toasts: [],
  };

  onSnackbarDismiss() {
    const [, ...toasts] = this.state.toasts;
    this.setState({ toasts });
  }

  notifyAboutComment = () => {
    const toasts = this.state.toasts.slice();
    toasts.push({ text: 'New comment available!' });
    this.setState({ toasts });
  };

  render() {
    const { postNode } = this.props;
    if (!config.disqusShortname) {
      return null;
    }
    const url = config.siteUrl + config.pathPrefix + postNode.slug;

    return (
      <ReactDisqusComments
        shortname={config.disqusShortname}
        identifier={postNode.slug}
        title={postNode.title}
        url={url}
        // category_id={postNode.category_id}
        onNewComment={this.notifyAboutComment}
      />
    );
  }
}

export default Disqus;
