import { Container, TextField, Typography } from "@material-ui/core";
import PrimaryButton from "../../components/PrimaryButton";
import QuestionView from "../question/QuestionView";
import Question from "../question/Index";
import { QuizProps } from "./Props";
import { GREEN } from "../../app/theme";
import { withEdit } from "../../selectors/quiz";
import { useRecoilState } from "recoil";
import { canEditAtom } from "../../atoms/quiz";

const QuizView: React.FC<QuizProps> = ({ quiz }: QuizProps) => {
  const [editState, setEditState] = useRecoilState(canEditAtom);

  return (
    <Container component="main" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      <Typography variant="h4">{quiz.title}</Typography>
      <ul>
        {quiz.questions.map((question) => {
          return (
            <li>
              <QuestionView data={question} />
            </li>
          );
        })}
      </ul>
      {editState && (
        <PrimaryButton text="Edit Quiz" color={GREEN} variant="h6" height="48px" onClick={() => setEditState(true)} />
      )}
    </Container>
  );
};

export default QuizView;
