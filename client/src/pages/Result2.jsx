import React from 'react';

const Result2 = ({ score, finish }) => {
  let result = 0;
  if (score >= 3) result = 1;
  
  const bgcolor = result === 0 ? "#CFFFC8" : result === 1 ? "#FFECC8" : "#FDE0E0";
  const imgsrc = result === 0 ? "./ok.png" : result === 1 ? "./warning2.png" : "./warning.png";
  const textcolor = result === 0 ? "#26D723" : result === 1 ? "#DC8826" : "#CF3131";
  const btncolor = result === 0 ? "#23AF42" : result === 1 ? "#AF9523" : "#703F3F";
const txt = result === 0 ? "احتمال ضعیف إنك معمل أكرث من اللازم على الفشفاشة الزرقة متاع الكریز" : result === 1 ? " احكي مع طبیبك وإلا الفرمسیان وإلا الفرملي متاعك خاطر ینجم یكون فمة طرق خیر باش تتحكم في الفدة متاعك" : "احتمال كبیر إنك معمل برشى على الفشفاشة الزرقة متاع الكریز";
  return (
    <>
      <div className="w-[100%] h-[100%] flex items-center justify-center" style={{ backgroundColor: bgcolor }}>
        <div className="bg-white w-[70%] h-[80%] p-8 rounded-3xl shadow-lg flex flex-col items-center">
          {/* Title */}
          <div className="text-center text-[55px] font-bold font-['Roboto']" style={{ color: textcolor }}>
            النتيجة
          </div>
          
          {/* Image */}
          <img className="m-5 w-[200px]" src={imgsrc} alt="Result Icon" />

          {/* Description */}
          <div className="text-center text-black text-[40px] font-medium font-['Roboto']">
            {txt}
          </div>

          {/* Button */}
          <button onClick={finish} className="relative m-16 w-[20%]"> 
            <div className="rounded-[5px] text-center py-4" style={{ backgroundColor: btncolor }}>
              <div className="text-white text-4xl font-normal font-['Roboto']">
                التالي
              </div>
            
          </div></button>
         
        </div>
      </div>
    </>
  );
};

export default Result2;
