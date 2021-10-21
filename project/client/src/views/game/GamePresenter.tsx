import GameView from "./GameView";
import { FETCH_QUIZ_BY_ID } from "../../services/queries/Quiz";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { useState, useEffect } from "react";
import GameOverModal from "./GamOverModal";
import { useHistory } from "react-router-dom";

type Answer = { description: string; flag: boolean; id: string };

export type Question = {
  answers: Answer[];
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
  answers: string[];
  questions: Question[] | undefined;
  quiz: Quiz | undefined;
  totalQuestions: number;
  gameOver: boolean;
};

export type QuizData = { findQuizById: Quiz };

const GamePresenter: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [gameState, setGameState] = useState<GameState>({
    questionCurrentIndex: 0,
    answers: [],
    questions: undefined,
    quiz: undefined,
    totalQuestions: 0,
    gameOver: false
  });
  const { loading, error, data } = useQuery<QuizData>(FETCH_QUIZ_BY_ID, {
    variables: { findQuizByIdId: id }
  });

  useEffect(() => {
    const answerArray = new Array(data?.findQuizById.questions.length).fill("");
    setGameState({
      ...gameState,
      questionCurrentIndex: 0,
      totalQuestions: data?.findQuizById.questions.length ? data?.findQuizById.questions.length : 0,
      answers: answerArray,
      questions: data?.findQuizById.questions,
      quiz: data?.findQuizById
    });
  }, [data]);

  const setAnswer = (answerId: string) => {
    gameState.answers[gameState.questionCurrentIndex] = answerId;
    setGameState({ ...gameState, questionCurrentIndex: gameState.questionCurrentIndex });
    nextQuestion();
  };

  const countAnswer = (): number => {
    let count = 0;

    gameState.answers.map((answerId, index) => {
      if (!gameState.questions) {
        return;
      }
      if (gameState.questions[index].answers.find((ans) => ans.id === answerId && ans.flag)) {
        count = count + 1;
      }
    });
    return count;
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
    setGameState({
      ...gameState,
      gameOver: true
    });
  };

  const playAgain = () => {
    setGameState({
      ...gameState,
      gameOver: false,
      questionCurrentIndex: 0,
      answers: []
    });
  };

  const goToFrontpage = () => {
    history.push("/");
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <GameOverModal
        total={gameState.totalQuestions}
        numberCorrect={countAnswer()}
        playAgain={playAgain}
        open={gameState.gameOver}
        onClose={goToFrontpage}
      />
      <GameView
        question={gameState.quiz?.questions[gameState.questionCurrentIndex]}
        answer={gameState.answers[gameState.questionCurrentIndex]}
        onAnswer={(answer) => {
          setAnswer(answer);
        }}
        currentQuestion={gameState.questionCurrentIndex}
        totalQuestions={gameState.questions.length}
        nextQuestion={nextQuestion}
        previusQuestion={previusQuestion}
        onSubmit={submit}
        title={data?.findQuizById.title}
      />
    </>
  );
};

export default GamePresenter;
