"use client";
import React from "react";
import Image from "next/image";
import style from "./Quiz.module.scss";
import { HomeBlock, ButtonElem } from "../index";
import questions from "./Questions";

//types
type Question = {
  title: string;
  variants: string[];
  correct: number;
};
type GameProps = {
  question: Question;
  step: number;
  onClickVariant: Function;
};
type ResultProps = {
  point: number;
  tryAgain: Function;
  newPoint: Function;
};
type QuizProps = {
  className: string;
};
//inGame
function Game({ question, onClickVariant, step }: GameProps) {
  const percentProgressBar = Math.round((step / questions.length) * 100);
  return (
    <div className={style.gameWrapper}>
      <div
        className={style.progressBar}
        style={{ width: `${percentProgressBar}%` }}></div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => {
          return (
            <div className={style.listBlock} key={index}>
              <li onClick={() => onClickVariant({ index })}>{text}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
//afterGame
function Result({ point, tryAgain, newPoint }: ResultProps) {
  return (
    <div className={style.result}>
      {point > Math.round(questions.length / 2) ? (
        <Image
          src="/quizHappy.svg"
          alt="result photo"
          width={100}
          height={100}
        />
      ) : (
        <Image src="/quizSad.svg" alt="result photo" width={100} height={100} />
      )}

      <h2>{`Ты отгадал ${point} ответа из ${questions.length}`}</h2>
      <ButtonElem
        style={point > Math.round(questions.length / 2) ? "green" : "red"}
        onClick={() => {
          tryAgain(0);
          newPoint(0);
        }}>
        Попробовать снова
      </ButtonElem>
    </div>
  );
}
//Exporting component
export const Quiz = ({ className }: QuizProps): JSX.Element => {
  const [step, setStep] = React.useState(0);
  const [point, setPoint] = React.useState(0);
  const question = questions[step];
  const onClickVariant = ({ index }: { index: number }) => {
    if (index === question.correct) {
      setPoint(point + 1);
    }
    setStep(step + 1);
  };
  return (
    <div className={className}>
      <HomeBlock>
        <div className={style.app}>
          {step !== questions.length ? (
            <Game
              step={step}
              question={question}
              onClickVariant={onClickVariant}
            />
          ) : (
            <Result point={point} tryAgain={setStep} newPoint={setPoint} />
          )}
        </div>
      </HomeBlock>
    </div>
  );
};
