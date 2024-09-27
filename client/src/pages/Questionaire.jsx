import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'; // For sliding transitions
import Stage1 from './Stage1';
import Stage2 from './Stage2';
import Stage3 from './Stage3';
import Stage4 from './Stage4';

import Result1 from './result1';
import Result2 from './result2';
import Result3 from './result3';

const Questionaire = () => {
  const [stage,setStage] = useState(1);
  const [score,setScore] = useState(0);
  const finishStage1 = (score) => {
    setStage(2);
    console.log(score);
    setScore(score);
  };
  const goToStage2 = () => {
    setStage(3);
  }

  const finishStage2 = (score) => {
    setScore(score);
    setStage(4);
  }

  const goToStage3 = () => {
    setStage(5);
  }

  const goToStage4 = () => {
    setStage(6);
  }
  const goToStage5 = () => {
    setStage(7);
  }
  const goBack = () =>{

  }
  return ( <>{stage == 1 && (<Stage1 finish={finishStage1}></Stage1>)}
  {stage == 2 && (<Result1 score ={score} finish={goToStage2}></Result1>)}
  {stage == 3 && (<Stage2 score ={score} finish={finishStage2}></Stage2>)}
  {stage == 4 && (<Result2 score ={score} finish={goToStage3}></Result2>)}
  {stage == 5 && (<Stage3 score ={score} finish={goToStage4}></Stage3>)}
  {stage == 6 && (<Stage4 score ={score} finish={goToStage5}></Stage4>)}
  {stage == 7 && (<Result3 score ={4} finish={goBack}></Result3>)}

  </>
  );
};

export default Questionaire;
