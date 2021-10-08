import { Container, TextField, Typography } from "@material-ui/core";
import PrimaryButton from "../../components/PrimaryButton";
import QuestionView from "../question/QuestionView";
import Question from "../question/Index";
import { QuizViewProps } from "./Props";
import { GREEN } from "../../app/theme";

const QuizView: React.FC<QuizViewProps> = ({setEdit, editState, quiz}: QuizViewProps) => {

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      <Typography variant="h4">{quiz.title}</Typography>
      <ul>
            {
                quiz.questions.map( (question) => {
                    return <li>
                        <QuestionView setEdit={setEdit} editQuiz={editState} data={question}/>
                    </li>
                }) 
            }
      </ul>
      <PrimaryButton text="Edit Quiz" color={GREEN} variant="h6" height="48px" onClick={() => setEdit(true)} />
    </Container>
  );
};

export default QuizView;
