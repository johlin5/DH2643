import GameView from "./GameView";
import { FETCH_QUIZ_BY_ID } from "../../services/queries/Quiz";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { useState, useEffect } from "react";

export type Question = {
  answers: { description: string; flag: boolean; id: string }[];
  question: string;
  id: string;
};

export type Quiz = {
  creator: string;
  id: string;
  title: string;
  upvotes: number;
  questions: Question[];
};

type GameState = {
  questionCurrentIndex: number;
  answers: boolean[];
  questions: Question[] | undefined;
  quiz: Quiz | undefined;
  totalQuestions: number;
};

export type QuizData = { findQuizById: Quiz };

const GamePresenter: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [gameState, setGameState] = useState<GameState>({
    questionCurrentIndex: 0,
    answers: [],
    questions: undefined,
    quiz: undefined,
    totalQuestions: 0
  });
  const { loading, error, data } = useQuery<QuizData>(FETCH_QUIZ_BY_ID, {
    variables: { findQuizByIdId: id }
  });

  useEffect(() => {
    const booleanArray = new Array(data?.findQuizById.questions.length).fill(false);
    setGameState({
      ...gameState,
      questionCurrentIndex: 0,
      totalQuestions: data?.findQuizById.questions.length ? data?.findQuizById.questions.length : 0,
      answers: booleanArray,
      questions: data?.findQuizById.questions,
      quiz: data?.findQuizById
    });
  }, [data]);

  const setAnswer = (answer: boolean) => {
    gameState.answers[gameState.questionCurrentIndex] = answer;
  };

  if (!gameState.questions) {
    return <>No Question</>;
  }

  const nextQuestion = () => {
    if (gameState.questionCurrentIndex + 1 < gameState.totalQuestions)
      setGameState({
        ...gameState,
        questionCurrentIndex: gameState.questionCurrentIndex + 1
      });
  };

  const previusQuestion = () => {
    if (gameState.questionCurrentIndex > 0)
      setGameState({
        ...gameState,
        questionCurrentIndex: gameState.questionCurrentIndex - 1
      });
  };

  const submit = () => {
    let total = 0;
    gameState.answers.map((answer) => {
      if (answer) {
        total = total + 1;
      }
    });
    console.log(total);
    alert(`You got ${total} points out of ${gameState.totalQuestions}`);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <GameView
        question={gameState.quiz?.questions[gameState.questionCurrentIndex]}
        onAnswer={(answer) => {
          setAnswer(answer);
        }}
        currentQuestion={gameState.questionCurrentIndex}
        totalQuestions={gameState.questions.length}
        nextQuestion={nextQuestion}
        previusQuestion={previusQuestion}
        onSubmit={submit}
      />
    </>
  );
};

export default GamePresenter;
