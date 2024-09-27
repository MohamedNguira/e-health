import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'; // For sliding transitions

const questions = [
  { question: 'ما مدى اهتمامك بتحسين استخدامك لجهاز الاستنشاق؟', options:['غير مهتم', '', '', '', 'مهتم جدًا'] },
  { question: 'كيف تصف علاقتك بالتدخين؟', options:['لا تدخين', '', '', '', 'مدخن ثقيل'] },
  { question: 'كم مرة في الأسبوع تقوم بأنشطة بدنية؟', options:['أكثر من 5 مرات في الجمعة', '4 او 5 مرات في الجمعة', '3 مرات في الجمعة', 'مرتین في  الجمعة والا اقل', 'حتى مرة'] },

];

const Stage4 = ({finish}) => {
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null)); // Store answers
  const [confirm, setConfirm] = useState(false);
  const slideAnimation = useSpring({
    transform: `translateX(-${currentQuestion * 100}%)`,
    config: { tension: 280, friction: 60 }
  });

  const handleAnswer = (index) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = index; // Store the answer for the current question
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const finishQuestionnaire = () => {
    setConfirm(true);
    finish(5 - answers[0]);
  };

  if (confirm) {
    return <div style={styles.centeredText}>شكراً لإكمال الاستبيان!</div>;
  }
  
  return ( <div className="flex flex-col justify-center items-center h-screen" style={{ backgroundColor: '#F4F9FF', minHeight: '100vh' }}>
    <div className="p-[72px] top-[70px] absolute left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow flex-col justify-start items-center gap-8 inline-flex w-[900.12px] h-[500.49px] bg-white rounded-[15px]">
      
      <div style={{ display: 'flex', overflow: 'hidden', width: '100%' }}>
        <animated.div style={{ display: 'flex', ...slideAnimation, width: '100%' }}>
          
          {questions.map((q, index) => (
            <div key={index} style={styles.questionContainer}>
              <div className="relative top-0 left-0 right-0 text-center text-[#8191a5] text-[22px] font-normal font-['Roboto']">
                {index + 1}/3
              </div>
              <div className="relative top-[10px] flex items-center w-[235px] bg-[#e7f2ff] h-[11px] rounded-lg">
                <div
                  className="bg-blue-500 h-[9px] rounded-lg bg-[#173860]"
                  style={{ width: `${(index + 1) * 33.33}%` }}
                ></div>
              </div>
              <div style={styles.questionText} className="relative top-[30px] w-[400px] h-[76px] text-center text-black text-3xl font-bold font-['Roboto']">
                {q.question}
              </div>
              <div style={styles.optionContainer}>
              <div className='relative top-[0px]' style={styles.line}></div>
  {q.options.map((_, i) => (<div>
    <div className='relative top-[0px]'
      key={i}
      style={styles.outerCircleContainer} // Container for the outer circle
      onClick={() => handleAnswer(i)} // Handle click to change answer
    >
      <div
        style={{
          ...styles.outerCircle,
          borderColor: answers[index] === i ? '#F4F9FF' : '#B5CFF1', // Change outer ring color when selected
        }}
      >
        <div
          style={{
            ...styles.innerCircle,
            backgroundColor: answers[index] === i ? '#79B04D' : 'white', // Change inner circle color when selected
          }}
        ></div>
      </div>
    </div>
    <div>
    <div className="relative top-[10px] w-[120.61px] h-[70.21px] text-center text-black text-[27px] font-normal font-['Roboto']">{_}</div>

      </div> </div>
  ))}
</div>

            </div>
          ))}
        </animated.div>
      </div>

      {/* Navigation Buttons */}
      <div className='absolute top-[350px] w-[700px] flex justify-between'>
  <button onClick={previousQuestion} disabled={currentQuestion === 0} style={styles.navButton}>
    <div className="w-[206.75px] h-[63.84px] relative">
      <div className="w-[206.75px] h-[63.84px] left-0 top-0 absolute bg-white rounded-[5px] border border-black" />
      <div className="w-[89.02px] h-[27.57px] left-[55.87px] top-[17.41px] absolute text-center text-black text-2xl font-normal font-['Roboto']">
        السابق
      </div>
    </div>
  </button>

  {currentQuestion < questions.length - 1 ? (
    <button onClick={nextQuestion} disabled={answers[currentQuestion] === null} style={styles.navButton}>
      <div className="w-[206.75px] h-[63.84px] relative">
        <div className="w-[206.75px] h-[63.84px] left-0 top-0 absolute bg-black rounded-[5px]" />
        <div className="w-[101px] h-[27px] left-[51.01px] top-[15.60px] absolute text-center text-white text-2xl font-normal font-['Roboto']">
          التالي
        </div>
      </div>
    </button>
  ) : (
    <button onClick={finishQuestionnaire} disabled={answers[currentQuestion] === null} style={styles.navButton}>
      <div className="w-[206.75px] h-[63.84px] relative">
        <div className="w-[206.75px] h-[63.84px] left-0 top-0 absolute bg-black rounded-[5px]" />
        <div className="w-[101px] h-[27px] left-[51.01px] top-[15.60px] absolute text-center text-white text-2xl font-normal font-['Roboto']">
          تأكيد
        </div>
      </div>
    </button>
  )}
</div>


    </div>
  </div>
  );
};

// Styles object to keep the design consistent
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  questionContainer: {
    minWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionText: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  optionItem: {
    margin: '0px 20px',
  },
  optionLabel: {
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    direction: 'rtl', // Ensure RTL layout for the entire label
    unicodeBidi: 'isolate-override', // Keep the number in correct place
  },
  optionNumber: {
    marginLeft: '8px',
    direction: 'ltr', // Ensure the number appears correctly on the right
  },
  radioInput: {
    transform: 'scale(1.5)',
    marginLeft: '10px', // Puts the checkbox to the right of the text
  },
  navButton: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  centeredText: {
    fontSize: '24px',
    textAlign: 'center',
    marginTop: '50px',
  },
  optionContainer: {
    display: 'flex',
    justifyContent: 'space-between', // Space the circles evenly
    alignItems: 'center', // Align circles vertically
    width: '100%', // Full width container
    position: 'relative', // Ensure circles can be positioned above the line
    padding: '20px 0', // Padding for spacing around circles
  },
  outerCircleContainer: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative', // Position relative to allow for adjustments
  },
  outerCircle: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    border: '7px solid #ccc', // Default outer circle border color
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'border-color 0.3s ease', // Smooth color transition
  },
  innerCircle: {
    width: '18px',
    height: '18px',
    borderRadius: '100%',
    backgroundColor: 'transparent', // Default inner circle color
    transition: 'background-color 0.3s ease', // Smooth color transition
  },
  line: {
    position: 'absolute',

    width: '80%',
    height: '2px',
    backgroundColor: '#B5CFF1', // Line color
    top: '25%',
    left: '10%' // Position line vertically through the circles
  },
};
export default Stage4;
