import styled from 'styled-components';
import { Box } from 'grommet';

import { COLORS } from '../../common/constants';

export const Container = styled.div`
  padding: 2em;
`;

export const FormButtonsContainer = styled(Box)`
  margin-top: 30px;
`;

export const Heading = styled.h2`
  color: ${COLORS.blue};
  padding: 10px;
`;
