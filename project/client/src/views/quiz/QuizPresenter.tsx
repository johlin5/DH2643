import { useMutation } from "@apollo/client";
import { Container, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { SAVE_QUIZ, UPDATE_QUIZ } from "../../services/queries/Quiz";
import { QuestionInput, QuizInput } from "../../utils/types";
import QuizForm from "./QuizForm";
import { QuizProps } from "./Props";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";

const QuizPresenter: React.FC<QuizProps> = ({ quiz }: QuizProps) => {
  const [quizData, setQuizData] = useState(quiz);
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  
  const history = useHistory();

  const createQuestions = ()=> {
    if (quizData.questions.length === 0) {
      // Initialise the question list
      return appendQuestions(0, numberOfQuestions);
    } else if (numberOfQuestions < quizData.questions.length) {
      // Delete questions
      return quizData.questions.filter((_, index) => index < numberOfQuestions);
    } else {
      // Append questions
      return appendQuestions(quizData.questions.length, numberOfQuestions);
    }
  }

  const appendQuestions = (start: number, end: number) => {
    let questions = quizData.questions;
    for (let index: number = start; index < end; index++) {
      const questionData = { question: "", answers: [], userId: quiz.creator };
      questions = [...questions, questionData];
    }
    return questions;
  };

  const handleDeleteQuestion = (questionData: QuestionInput) => {
    if (quizData.questions.length <= 3) {
      alert("At least 3 questions in a quiz");
      return;
    }
    
    updateQuiz({
      ...quizData,
      questions: quizData.questions.filter( (q) => {
        return q.id !== questionData.id;
      })
    });
  };

  const handleSetQuestion = (questionData: QuestionInput) => {
    const index = quizData.questions.findIndex((q) => q.id === questionData.id);
    setQuestion(index, questionData);
  };

  const setQuestion = (index: number, data: QuestionInput) => {
    const newQuestions = quizData.questions; // copying the old datas array
    newQuestions[index] = data; // replace old data with new
    setQuizData({
      ...quizData,
      questions: newQuestions
    });
  };

  const handleUpdateQuestion = (questionData: QuestionInput) => {
    const index = quizData.questions.findIndex((q) => q.id === questionData.id);
    const newQuestions = quizData.questions; // copying the old datas array
    newQuestions[index] = questionData; // replace old data with new
    updateQuiz({
      ...quizData,
      questions: newQuestions
    });
  }

  const [update, {data, loading, error}] = useMutation(UPDATE_QUIZ);
  const updateQuiz = async (data: QuizInput) => {
    const response = await update({
      variables: {
        updateQuizInput: {
          title: data.title,
          description: data.description,
          questions: data.questions,
          creator: data.creator
        },
        id: data.id
      }
    });
    response.data.updateQuiz.questions.forEach( (q:any) => delete q.__typename );
    response.data.updateQuiz.questions.forEach( (q: any) => q.answers.forEach((a: any) => delete a.__typename) );
    setQuizData(response.data.updateQuiz);
  }

  useEffect( () => {
    updateQuiz({
      ...quizData,
      questions: createQuestions()
    });
  }, [numberOfQuestions]);

  if (loading || !data) {
    return <Spinner />;
  }

  const saveQuiz = async (quizData: QuizInput) => {
    await updateQuiz(quizData);
    history.push("/")
  }

  return (
    <Container component="main" style={{ backgroundColor: "white", marginTop: "10px", padding: "15px" }}>
      <Typography variant="h4">Create Your Own Quiz!</Typography>
      <QuizForm 
        quiz={quizData} 
        saveQuiz={saveQuiz} 
        setQuizData={setQuizData} 
        setNumberOfQuestions={setNumberOfQuestions}
        onSetQuestion={handleSetQuestion}
        onDeleteQuestion={handleDeleteQuestion}
        onUpdateQuestion={handleUpdateQuestion}/>
    </Container>
  );
};

export default QuizPresenter;
