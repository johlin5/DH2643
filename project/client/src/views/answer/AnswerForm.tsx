import { Container, Select, TextField, Typography, MenuItem } from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import { GREEN, PURPLE, RED } from "../../app/theme";
import { AnswerFormProps } from "./props";

const AnswerForm: React.FC<AnswerFormProps> = ({ saveAnswer, deleteAnswer, data }: AnswerFormProps) => {
  const [formState, setFormState] = useState(data);

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      <Typography variant="h4">Answer</Typography>
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        margin="normal"
        value={formState.description}
        onChange={(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
          setFormState({...formState, description: event.target.value});
          }
        }
        onBlur={(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
          saveAnswer(formState);
          }
        }
      />
      <Select
        labelId="flag_id"
        id="flag_id"
        value={formState.flag}
        defaultValue={0}
        onChange={(event: any) => {
          setFormState({ ...data, flag: event.target.value });
          }
        }
        onBlur={(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
          saveAnswer(formState);
          }
        }
      >
        <MenuItem value={1}>True</MenuItem>
        <MenuItem value={0}>False</MenuItem>
      </Select>
      {/* <PrimaryButton text="Save" color={GREEN} variant="h6" height="48px" onClick={() => handleSave()} /> */}
      <PrimaryButton
        text="Delete"
        color={RED}
        variant="h6"
        height="48px"
        onClick={() => {
          deleteAnswer(formState);
        }}
      />
    </Container>
  );
};

export default AnswerForm;
