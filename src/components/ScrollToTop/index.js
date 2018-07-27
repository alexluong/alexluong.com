import React from 'react';
import StyledScrollToTop from './StyledScrollToTop';
import upArrow from 'assets/up-arrow.svg';

class ScrollToTop extends React.Component {
  state = {
    display: null,
    hover: null,
  };

  onClick = e => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  onAnimationEnd = e => {
    if (this.state.display === 'fade-out') {
      this.setState({ display: null });
    }
  };

  onScroll = e => {
    if (window.scrollY > 500) {
      if (!this.state.display) {
        this.setState({ display: 'fade-in' });
      }
    } else if (this.state.display) {
      this.setState({ display: 'fade-out' });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  render() {
    return (
      <StyledScrollToTop
        className={this.state.display}
        onClick={this.onClick}
        onAnimationEnd={this.onAnimationEnd}
        onMouseEnter={e => this.setState({ hover: 'hover' })}
        onMouseLeave={e => this.setState({ hover: null })}
      >
        <img
          src={upArrow}
          alt="Back To Top"
          className={this.state.hover}
          onAnimationEnd={e => this.setState({ hover: null })}
        />
      </StyledScrollToTop>
    );
  }
}

export default ScrollToTop;
