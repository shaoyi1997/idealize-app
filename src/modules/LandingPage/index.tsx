import React from 'react';
import * as Styles from './styles';
import { IdeaListing } from '../../components/IdeaListing';
import { IIdea } from '../../common/interfaces';

interface Props {
  ideas: IIdea[];
  isLoading: boolean;
  fetchIdeas: () => void;
}

export const LandingPage: React.FC<Props> = ({
  ideas,
  isLoading,
  fetchIdeas,
}) => (
  <Styles.MainContainer>
    <Styles.Heading>Find the ideas that matter to you.</Styles.Heading>
    <IdeaListing ideas={ideas} isLoading={isLoading} fetchIdeas={fetchIdeas} />
  </Styles.MainContainer>
);
