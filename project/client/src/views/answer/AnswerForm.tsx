import { Container, Select, TextField, Typography, MenuItem, FormControl } from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import { GREEN, PURPLE, RED } from "../../app/theme";
import { AnswerFormProps } from "./props";

const AnswerForm: React.FC<AnswerFormProps> = ({ saveAnswer, deleteAnswer, data }: AnswerFormProps) => {
  const [formState, setFormState] = useState(data);

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: "white", padding: "4px" }}>
      <Typography variant="h4">Answer</Typography>
      <FormControl>
        <TextField
          id="standard-basic"
          label="Answer"
          variant="standard"
          margin="normal"
          value={formState.description}
          onChange={(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            setFormState({ ...formState, description: event.target.value });
          }}
          onBlur={() => {
            saveAnswer(formState);
          }}
        />
        <Select
          labelId="flag_id"
          id="flag_id"
          value={formState.flag ? "1" : "0"}
          defaultValue={0}
          onChange={(event: any) => {
            setFormState({ ...data, flag: event.target.value === "0" ? false : true });
          }}
          onBlur={() => {
            saveAnswer(formState);
          }}
          style={{
            width: 70
          }}
        >
          <MenuItem value={1}>True</MenuItem>
          <MenuItem value={0}>False</MenuItem>
        </Select>
      </FormControl>
      <PrimaryButton
        text="Delete Answer"
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
