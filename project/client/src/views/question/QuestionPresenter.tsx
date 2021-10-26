import { AnswerInput } from "../../utils/types";
import { QuestionPresenterProps } from "./props";
import QuestionForm from "./QuestionForm";

const QuestionPresenter: React.FC<QuestionPresenterProps> = ({
  saveQuestion,
  handleDelete,
  questionData
}: QuestionPresenterProps) => {
  
  // Callbacks / Handlers
  const handleSaveAnswer = (answerData: AnswerInput) => {
    const existingAnswer = questionData.answers.find((a) => {return a.AnswerId === answerData.AnswerId});
    if (existingAnswer) {
      const index = questionData.answers.findIndex((a) => a.AnswerId === answerData.AnswerId);
      updateAnswer(index, answerData);
    } else {
      console.log("Answer not found");
    }
  };

  const handleAddAnswer = () => {
    const newAnswer = { AnswerId: answerIdGenerator(), description: "", flag: false }
    saveQuestion({...questionData, answers: [...questionData.answers, newAnswer]})
  };

  const handleDeleteAnswer = (answerData: AnswerInput) => {
    const newAnswers = questionData.answers.filter( (a) => {return a.AnswerId !== answerData.AnswerId});
    saveQuestion({...questionData, answers: newAnswers});
  }

  const answerIdGenerator = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  const updateAnswer = (index: number, answerData: AnswerInput) => {
    const newAnswers = questionData.answers; // copying the old datas array
    newAnswers[index] = answerData; // replace old data with new
    saveQuestion({...questionData, answers: newAnswers});
  };

  return (
    <QuestionForm 
      handleSave={saveQuestion} 
      handleDelete={handleDelete} 
      onAddAnswer={handleAddAnswer} 
      onDeleteAnswer={handleDeleteAnswer} 
      onSaveAnswer={handleSaveAnswer}
      questionData={questionData} />
  );
};

export default QuestionPresenter;
