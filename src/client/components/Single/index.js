import React, { PropTypes } from 'react';
import styled from 'styled-components';
import ListContent from './ListContent';

const SingleContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4em;
  position: relative;
`;

const BigImg = styled.div`
  flex-basis: 30%;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const TextContainer = styled.div`
  margin-left: 20px;
  flex-basis: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Name = styled.h2`
  padding: 0;
  font-size: 3em;
`;

const Description = styled.p`
  margin-top: 10px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0%;
  left: calc(100% - 100px);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  font-size: 30px;
  cursor: pointer;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: box-shadow .2s ease-out;
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

const Single = ({ character, actions }) => {
  const { thumbnail, comics, events, series, stories, name, description } = character;
  return (
    <SingleContainer>
      <CloseButton onClick={() => actions.single.closed()}>&#x02A2F;</CloseButton>
      <BigImg style={{ backgroundImage: `url(${thumbnail.path}.${thumbnail.extension})` }} />
      <TextContainer>
        <Name>{name}</Name>
        <Description>{description}</Description>
        {!!comics.items.length && <ListContent title="comics:" data={comics.items} />}
        {!!events.items.length && <ListContent title="events:" data={events.items} />}
        {!!series.items.length && <ListContent title="series:" data={series.items} />}
        {!!stories.items.length && <ListContent title="stories:" data={stories.items} />}
      </TextContainer>
    </SingleContainer>
  );
};

Single.propTypes = {
  character: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default Single;
