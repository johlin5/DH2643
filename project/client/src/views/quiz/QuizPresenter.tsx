import { useMutation } from "@apollo/client";
import { Container, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { SAVE_QUIZ } from "../../services/queries/Quiz";
import { QuestionInput } from "../../utils/types";
import QuizForm from "./QuizForm";
import { QuizProps } from "./Props";
import { useEffect, useState } from "react";

const QuizPresenter: React.FC<QuizProps> = ({ quiz }: QuizProps) => {
  const [save, { data, loading, error }] = useMutation(SAVE_QUIZ);
  
  const history = useHistory();
  const saveQuiz = async () => {
    const answers = quizData.questions.map((q) => q.answers.map(({ AnswerId, ...answer }) => answer));
    const cleanQuestions = quizData.questions.map(({ id, ...q }, index) => ({ ...q, answers: answers[index] }));
    const response = await save({
          variables: {
            createQuizInput: {
              ...quizData,
              questions: cleanQuestions
            }
          }
        });
    history.push("/");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;

  const [quizData, setQuizData] = useState(quiz);
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);

  useEffect( () => {
    setQuizData({
      ...quizData,
      questions: createQuestions()
    });
  }, [numberOfQuestions]);

  const generateQuestionID = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
  }

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
      const questionId = generateQuestionID();
      const questionData = { question: "", answers: [], id: questionId, userId: quiz.creator, upvotes: 0, report: "" };
      questions = [...questions, questionData];
    }
    return questions;
  };

  const handleDeleteQuestion = (questionData: QuestionInput) => {
    if (quizData.questions.length <= 3) {
      alert("At least 3 questions in a quiz");
      return;
    }
    
    setQuizData({
      ...quizData,
      questions: quizData.questions.filter( (q) => {
        return q.id !== questionData.id;
      })
    });
  };

  const handleSaveQuestion = (questionData: QuestionInput) => {
    const existingQuestion = quizData.questions.find((q) => {return q.id === questionData.id});
    if (existingQuestion) {
      const index = quizData.questions.findIndex((q) => q.id === questionData.id);
      updateQuestion(index, questionData);
    } else {
      setQuestions([...quizData.questions, questionData]);
    }
  };

  const updateQuestion = (index: number, data: QuestionInput) => {
    const newQuestions = quizData.questions; // copying the old datas array
    newQuestions[index] = data; // replace old data with new
    setQuestions(newQuestions);
  };

  const setQuestions = (newQuestions: QuestionInput[]) => {
    setQuizData({
      ...quizData,
      questions: newQuestions
    });
  }

  return (
    <Container component="main" style={{ backgroundColor: "white", marginTop: "10px", padding: "15px" }}>
      <Typography variant="h4">Create Your Own Quiz!</Typography>
      <QuizForm 
        quiz={quizData} 
        saveQuiz={saveQuiz} 
        setQuizData={setQuizData} 
        setNumberOfQuestions={setNumberOfQuestions}
        onSaveQuestion={handleSaveQuestion}
        onDeleteQuestion={handleDeleteQuestion}/>
    </Container>
  );
};

export default QuizPresenter;
