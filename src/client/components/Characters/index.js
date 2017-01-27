import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Character from '../Character';

const CharList = styled.ul`
  margin: 0;
  margin-top: 20px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Characters = ({ characters, actions }) =>
  <CharList>
    {characters.map(character =>
      <Character key={character.id} character={character} actions={actions} />,
    )}
  </CharList>
;

Characters.propTypes = {
  characters: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default Characters;
