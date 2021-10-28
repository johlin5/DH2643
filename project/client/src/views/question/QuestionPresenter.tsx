import { AnswerInput } from "../../utils/types";
import { QuestionPresenterProps } from "./props";
import QuestionForm from "./QuestionForm";

const QuestionPresenter: React.FC<QuestionPresenterProps> = ({
  handleDelete,
  questionData,
  onSetQuestion,
  updateQuestion
}: QuestionPresenterProps) => {
  
  // Callbacks / Handlers
  const handleSaveAnswer = (answerData: AnswerInput) => {
    const existingAnswer = questionData.answers.find((a) => {return a.id === answerData.id});
    if (existingAnswer) {
      const index = questionData.answers.findIndex((a) => a.id === answerData.id);
      updateAnswer(index, answerData);
    } else {
      console.log("Answer not found");
    }
  };

  const handleAddAnswer = () => {
    const newAnswer = { description: "", flag: false };
    updateQuestion({...questionData, answers: [...questionData.answers, newAnswer]});
  };

  const handleDeleteAnswer = (answerData: AnswerInput) => {
    const newAnswers = questionData.answers.filter( (a) => {return a.id !== answerData.id});
    onSetQuestion({...questionData, answers: newAnswers});
  }

  const updateAnswer = (index: number, answerData: AnswerInput) => {
    const newAnswers = questionData.answers; // copying the old datas array
    newAnswers[index] = answerData; // replace old data with new
    onSetQuestion({...questionData, answers: newAnswers});
  };

  return (
    <QuestionForm 
      handleDelete={handleDelete} 
      onAddAnswer={handleAddAnswer} 
      onDeleteAnswer={handleDeleteAnswer} 
      onSaveAnswer={handleSaveAnswer}
      questionData={questionData}
      onSetQuestion={onSetQuestion} />
  );
};

export default QuestionPresenter;
