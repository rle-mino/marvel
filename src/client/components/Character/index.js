import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Img = styled.div`
  width: 200px;
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const CharContainer = styled.li`
  list-style: none;
  margin: 1em;
  padding: 2em;
  flex-basis: 10%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: box-shadow .2s ease-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

const Name = styled.span`
  padding: 0;
  margin-top: .5em;
`;

const Character = ({ character, actions }) =>
  <CharContainer onClick={() => actions.single.fetchSingle(character.id)}>
    <Img style={{ backgroundImage: `url(${character.thumbnail.path}.${character.thumbnail.extension})` }} />
    <Name>{character.name}</Name>
  </CharContainer>
;

Character.propTypes = {
  character: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default Character;
