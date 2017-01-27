/* eslint-disable react/no-array-index-key */
import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 5px;
  display: flex;
  padding: .5em;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const Title = styled.h4`
  font-size: 30px;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

const El = styled.span`
  width: 100%;
`;

const ListContent = ({ data, title }) =>
  <Container>
    <Title>{title}</Title>
    <List>
      {data.map((el, id) => <El key={id}>{el.name}</El>)}
    </List>
  </Container>
;

ListContent.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default ListContent;
