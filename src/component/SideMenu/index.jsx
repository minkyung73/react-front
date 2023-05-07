import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { questionActions } from '../../slices';
import shortid from 'shortid';
import RoundButton from '../../ui/RoundButton';
import React from 'react';

const newQuestion = (newId) => ({
  id: newId,
  type: 0,
  questionContent: '',
  isNecessary: false,
  options: [
 
  ],
  answers: [],
  narrativeAnswer: '',
});

const SideMenu = ({ sectionId }) => {
  const dispatch = useDispatch();


  const handleAddQuestion = () => {
    const newId = shortid();
    dispatch(questionActions.addQuestion({ "sectionId": sectionId, "newQuestion": newQuestion(newId) }));
  };

  const Wrapper = styled.div`
  
  display:flex;
  align-items: center;
  justify-content: center;
  padding:0.5rem;
`;
  return (

    <Wrapper>

      <RoundButton event={handleAddQuestion} />
    </Wrapper>
  );
};

export default SideMenu;
