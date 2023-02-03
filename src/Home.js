/** @jsxImportSource @emotion/react */
import { useState } from "react";
import "twin.macro";
import tw from "twin.macro";
import "./Home.css";

const action= ["manger", "boire", "lever", "dessiner"];
const position= ["main", "tete", "pied", "ventre"];

export const Home = () => {
    const [randomNumberAction, setRandomNumberAction] = useState(0);
    const [randomNumberPosition, setRandomNumberPosition] = useState(0);
    const [rollEffect, setRollEffect] = useState(false);

    const timer = () => {
        setRollEffect(true);
        setTimeout(generateRandomNumber, 2000)  
    }
  
    const generateRandomNumber = () => {
        const randomNumberAction = Math.floor(Math.random() * action.length);
        setRandomNumberAction(randomNumberAction);

        const randomNumberPosition = Math.floor(Math.random() * action.length);
        setRandomNumberPosition(randomNumberPosition);
        setRollEffect(false);
    }

  return (
    <div tw="flex h-screen justify-center items-center">
        <div tw="flex flex-col justify-center items-center gap-4">

            <div tw="flex gap-4">
                
           
                <div 
                className="container"
                css={[
                    rollEffect ? tw`animate-spin` : tw`animate-none`
                  ]}>
                    <div className="cubeAction">
                        <div className="face top">{rollEffect ? "???" : "Top"}</div>
                        <div className="face bottom">{rollEffect ? "???" : "Bottom"}</div>
                        <div className="face left">{rollEffect ? "???" : "Left"}</div>
                        <div className="face right">{rollEffect ? "???" : "Right"}</div>
                        <div className="face front">{rollEffect ? "???" : action[randomNumberAction]}</div>
                        <div className="face back">{rollEffect ? "???" : "Back"}</div>
                    </div>
                </div>


                <div 
                className="container"
                css={[
                    rollEffect ? tw`animate-spin` : tw`animate-none`
                    
                  ]}>
                    <div className="cubePosition">
                    <div className="face top">{rollEffect ? "???" : "Top"}</div>
                        <div className="face bottom">{rollEffect ? "???" : "Bottom"}</div>
                        <div className="face left">{rollEffect ? "???" : "Left"}</div>
                        <div className="face right">{rollEffect ? "???" : "Right"}</div>
                        <div className="face front">{rollEffect ? "???" : position[randomNumberPosition]}</div>
                        <div className="face back">{rollEffect ? "???" : "Back"}</div>
                    </div>
                </div>
            </div>
            <div>
                <button 
                tw="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
               onClick={() => { timer();} }>
                    Lancer le dé !
                </button>
            </div>
        </div>
    </div>
  );
};

export default Home;
