import React  from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

// import twitterLogo from 'assets/twitter.svg';

const SocialContainer = styled.div`
  grid-area: social;
  width: 100%;
  display: flex;
  align-items: center;
  * {
    font-size: 3.2rem;
  }
  *:not(:last-of-type) {
    margin-right: 2rem;
  }
  @media screen and (max-width: ${props => props.theme.size.md}) {
    justify-content: center;
  }
`;

const Social = ({ website, github, youtube, facebook, twitter, linkedin }) => {
  if (!website && !github && !youtube && !facebook && !twitter && !linkedin) {
    return (
      <SocialContainer>
        <p>And also, I'm nowhere to be found on the internet.</p>
      </SocialContainer>
    );
  }

  return (
    <SocialContainer>
      { website  && <a target="_blank" href={website }><FontAwesomeIcon icon="globe"               /></a>}
      { youtube  && <a target="_blank" href={youtube }><FontAwesomeIcon icon={['fab', 'youtube' ]} /></a>}
      { github   && <a target="_blank" href={github  }><FontAwesomeIcon icon={['fab', 'github'  ]} /></a>}
      { linkedin && <a target="_blank" href={linkedin}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>}
      { twitter  && <a target="_blank" href={twitter }><FontAwesomeIcon icon={['fab', 'twitter' ]} /></a>}
      { facebook && <a target="_blank" href={facebook}><FontAwesomeIcon icon={['fab', 'facebook']} /></a>}
    </SocialContainer>
  );
}

export default Social;