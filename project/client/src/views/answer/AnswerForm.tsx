import { Container, Input, Select, TextField, Typography, MenuItem } from "@material-ui/core";
import React, { useState, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import PrimaryButton from "../../components/PrimaryButton";
import { GREEN, PURPLE, RED } from "../../app/theme";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { AnswerInput } from "../../utils/types";
import { AnswerFormProps } from "./props";

const AnswerForm: React.FC<AnswerFormProps> = ({ saveAnswer, setEdit, data }: AnswerFormProps) => {
  // States
  const [answerData, setAnswerData] = useState<AnswerInput>(data);
  const id = data.id ? data.id : (Math.random() + 1).toString(36).substring(7);

  const handleSave = () => {
    saveAnswer(
      {
        ...answerData,
        id: id
      },
      false
    );
  };

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", padding: "16px", marginTop: "32px" }}>
      <Typography variant="h4">Answer</Typography>
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        margin="normal"
        value={answerData.description}
        onChange={(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
          setAnswerData({ ...answerData, description: event.target.value })
        }
      />
      <Select
        labelId="flag_id"
        id="flag_id"
        value={answerData.flag}
        defaultValue={0}
        onChange={(event: any) => setAnswerData({ ...answerData, flag: event.target.value })}
      >
        <MenuItem value={1}>True</MenuItem>
        <MenuItem value={0}>False</MenuItem>
      </Select>
      <PrimaryButton text="Save" color={GREEN} variant="h6" height="48px" onClick={() => handleSave()} />
      <PrimaryButton
        text="Delete"
        color={RED}
        variant="h6"
        height="48px"
        onClick={() => {
          /** Add function that handles deletion */
        }}
      />
    </Container>
  );
};

export default AnswerForm;
