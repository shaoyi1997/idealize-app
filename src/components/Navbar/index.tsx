import React, { useEffect, Fragment } from 'react';
import { Button, Layer } from 'grommet';

import * as Styled from './styles';
import Logo from '../../assets/Logo.png';
import { COLORS } from '../../common/constants';
import { IdeaForm } from '../IdeaForm';

interface Props {
  fetchIdeas: () => void;
}

const Navbar: React.FC<Props> = ({ fetchIdeas }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [showCreateModal, setShowCreateModal] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <Fragment>
      <Styled.Navbar scrolled={scrolled}>
        <Styled.Logo>
          <a href="/">
            <img src={Logo} alt="Logo" title="Logo" />
          </a>
        </Styled.Logo>

        <Styled.Navigation>
          <ul>
            <li>
              <Button
                primary
                label="Create an idea!"
                color={COLORS.blue}
                onClick={() => setShowCreateModal(true)}
              />
            </li>
          </ul>
        </Styled.Navigation>
      </Styled.Navbar>
      {showCreateModal && (
        <Layer
          onEsc={() => setShowCreateModal(false)}
          onClickOutside={() => setShowCreateModal(false)}
        >
          <IdeaForm
            afterSubmit={() => {
              setShowCreateModal(false);
              fetchIdeas();
            }}
          />
        </Layer>
      )}
    </Fragment>
  );
};

export default Navbar;
