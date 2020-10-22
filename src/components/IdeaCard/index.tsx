import React, { Fragment } from 'react';
import { Button, Layer } from 'grommet';

import * as Styles from './styles';
import { LightBulb } from '../Icons/LightBulb';
import { IIdea } from '../../common/interfaces';
import { IdeaForm } from '../IdeaForm';

interface Props {
  idea: IIdea;
  deleteIdea: (id: string) => void;
  fetchIdeas: () => void;
}

export const IdeaCard: React.FC<Props> = ({ idea, deleteIdea, fetchIdeas }) => {
  const [lightBulbColor, setLightBulbColor] = React.useState('white');
  const [showUpdateModal, setShowUpdateModal] = React.useState(false);

  return (
    <Fragment>
      {showUpdateModal && (
        <Layer
          onEsc={() => setShowUpdateModal(false)}
          onClickOutside={() => setShowUpdateModal(false)}
        >
          <IdeaForm
            afterSubmit={() => {
              setShowUpdateModal(false);
              fetchIdeas();
            }}
            isUpdateForm={true}
            id={idea.ideaId}
          />
        </Layer>
      )}
      <Styles.Container>
        <div
          className="additional"
          onMouseEnter={() => setLightBulbColor('#fdfd96')}
          onMouseLeave={() => setLightBulbColor('white')}
        >
          <Styles.UserCard>
            <LightBulb fill={lightBulbColor} />
            {/* <div className="points">5,312 Points</div> */}
          </Styles.UserCard>
          <Styles.MoreInfo>
            <Styles.MoreInfoInner>
              <h1>{idea.title}</h1>
              <Styles.Stats>
                <div>
                  <div className="title">Collaborators</div>
                  <i className="fa fa-trophy"></i>
                  <div className="value">2</div>
                </div>
                <div>
                  <div className="title">Interested</div>
                  <i className="fa fa-gamepad"></i>
                  <div className="value">27</div>
                </div>
                <div>
                  <div className="title">Looking for</div>
                  <i className="fa fa-group"></i>
                  <div className="value">123</div>
                </div>
              </Styles.Stats>
              <Styles.FormButtonsContainer
                direction="row"
                gap="medium"
                justify="center"
              >
                <Button label="Edit" onClick={() => setShowUpdateModal(true)} />
                <Button
                  label="Delete"
                  onClick={() => deleteIdea(idea.ideaId)}
                />
              </Styles.FormButtonsContainer>
            </Styles.MoreInfoInner>
          </Styles.MoreInfo>
        </div>
        <Styles.General>
          <h1>{idea.title}</h1>
          <p>{idea.description}</p>
          <span className="more">Mouse over the card for more info</span>
        </Styles.General>
      </Styles.Container>
    </Fragment>
  );
};
