import GameView from "./GameView";
import { FETCH_QUIZ_BY_ID, UPVOTE_QUIZ } from "../../services/queries/Quiz";
import { CREATE_HISTORY } from "../../services/queries/History";
import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { useState, useEffect } from "react";
import GameOverModal from "./GamOverModal";
import { useHistory } from "react-router-dom";
import { History } from "../profile/HistoryPresenter";

type Answer = { description: string; flag: boolean; id: string };
type HistoryInput = { quizTitle: string; score: number; maxScore: number };

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

type Upvote = {
  title: string;
  upvote: number;
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
  const [upvoteState, setUpvoteState] = useState(false);
  const { loading, error, data } = useQuery<QuizData>(FETCH_QUIZ_BY_ID, {
    variables: { findQuizByIdId: id }
  });

  const [createHistory, _historyResponse] = useMutation<History>(CREATE_HISTORY);
  const [sumbitUpvote, _upvoteResponse] = useMutation<Upvote>(UPVOTE_QUIZ);

  const submitHistory = async (input: HistoryInput) => {
    await createHistory({
      variables: {
        input: {
          ...input
        }
      }
    });
  };

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
    if (gameState.questionCurrentIndex + 1 === gameState.totalQuestions) {
      submit();
    }
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
    submitHistory({
      quizTitle: gameState.quiz ? gameState.quiz.title : "Should not happen",
      score: countAnswer(),
      maxScore: gameState.totalQuestions
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

  const onUpvote = async () => {
    setUpvoteState(true);
    await sumbitUpvote({
      variables: {
        id: gameState.quiz?.id
      }
    });
  };

  return (
    <>
      <GameOverModal
        total={gameState.totalQuestions}
        numberCorrect={countAnswer()}
        playAgain={playAgain}
        open={gameState.gameOver}
        onClose={goToFrontpage}
        onUpvote={{ onUpvoteClick: onUpvote, disabled: upvoteState }}
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
