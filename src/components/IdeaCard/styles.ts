import styled from 'styled-components';
import { Box } from 'grommet';

import { COLORS } from '../../common/constants';

export const Container = styled.div`
  width: 600px;
  height: 250px;
  background-color: #fff;
  background: linear-gradient(#f8f8f8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  margin: 1.5rem;

  h1 {
    text-align: center;
  }

  .additional {
    position: absolute;
    width: 150px;
    /* width: 100%; */
    height: 100%;
    background: ${COLORS.blue};
    transition: width 0.4s;
    overflow: hidden;
    z-index: 2;
  }

  &:hover .additional {
    width: 100%;
    border-radius: 0 5px 5px 0;
    background: linear-gradient(${COLORS.red}, #ee786e);
  }
`;

export const UserCard = styled.div`
  width: 150px;
  height: 100%;
  position: relative;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 10%;
    right: -2px;
    height: 80%;
    border-left: 2px solid rgba(0, 0, 0, 0.1);
  }

  .points {
    color: #fff;
    text-transform: uppercase;
    font-size: 0.75em;
    font-weight: bold;
    background: rgba(0, 0, 0, 0.15);
    padding: 0.2rem 0.75rem;
    margin-top: 5px;
    border-radius: 100px;
    white-space: nowrap;
  }

  svg {
    width: 90px;
  }
`;

export const MoreInfo = styled.div`
  width: 450px;
  float: left;
  position: absolute;
  left: 150px;
  height: 100%;

  h1 {
    color: #fff;
  }
`;

export const MoreInfoInner = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Coord = styled.div`
  margin: 0 1rem;
  color: #fff;
  font-size: 1rem;

  span {
    float: left;
  }

  span + span {
    float: right;
  }
`;

export const FormButtonsContainer = styled(Box)`
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const Stats = styled.div`
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  color: #fff;

  > div {
    flex: 1;
    text-align: center;
  }

  i {
    display: block;
  }

  div.title {
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  div.value {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.5rem;
  }

  div.value.infinity {
    font-size: 2.5rem;
  }
`;

export const General = styled.div`
  width: 450px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  box-sizing: border-box;
  padding: 1rem;
  padding-top: 0;

  .more {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    font-size: 0.7em;
  }
`;
