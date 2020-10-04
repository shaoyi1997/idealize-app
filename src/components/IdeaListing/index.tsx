import React, { Fragment } from 'react';
import * as Styles from './styles';
import { IdeaCard } from '../IdeaCard';
import { Media, EBreakpoints } from '../../media';
import { IIdea } from '../../common/interfaces';
import { makeFullUrlApiCall } from '../../middleware/axios';

interface Props {
  ideas: IIdea[];
  isLoading: boolean;
  fetchIdeas: () => void;
}

export const IdeaListing: React.FC<Props> = ({
  ideas,
  isLoading,
  fetchIdeas,
}) => {
  const deleteIdea = async (id: string) => {
    await makeFullUrlApiCall(`idea/id/${id}`, undefined, 'delete');
    fetchIdeas();
  };

  const ideaCards = ideas.map(idea => (
    <IdeaCard idea={idea} deleteIdea={deleteIdea} fetchIdeas={fetchIdeas} />
  ));
  return isLoading ? (
    <p>Loading</p>
  ) : (
    <Fragment>
      <Media lessThan={EBreakpoints.tablet}>
        <Styles.MobileContainer>{ideaCards}</Styles.MobileContainer>
      </Media>
      <Media greaterThanOrEqual={EBreakpoints.tablet}>
        <Styles.DesktopContainer>{ideaCards}</Styles.DesktopContainer>
      </Media>
    </Fragment>
  );
};
