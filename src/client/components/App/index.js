import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import R from 'ramda';
import styled from 'styled-components';
import allTheActions from '../../actions';
import Single from '../Single';
import Characters from '../Characters';

export const Title = styled.h1`
  font-size: 1.5em;
  margin-top: 1em;
  text-align: center;
  color: black;
`;

const Wrapper = styled.div`
  background: white;
`;

const App = ({ actions, single, characters }) => (
  <Wrapper>
    <Title>Liste des super héros :</Title>
    {(R.isEmpty(single) &&
      <Characters characters={characters} actions={actions} />)
      ||
      <Single character={single} actions={actions} />
    }
  </Wrapper>
);

App.propTypes = {
  actions: PropTypes.object.isRequired,
  single: PropTypes.object.isRequired,
  characters: PropTypes.array.isRequired,
};

const mapStateToProps = ({ single, characters }) => ({
  single,
  characters,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    single: bindActionCreators(allTheActions.single, dispatch),
    characters: bindActionCreators(allTheActions.characters, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
