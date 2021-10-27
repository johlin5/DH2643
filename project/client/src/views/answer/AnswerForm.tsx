import { Container, Select, TextField, MenuItem, FormControl, Button } from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import { AnswerFormProps } from "./props";

const AnswerForm: React.FC<AnswerFormProps> = ({ saveAnswer, deleteAnswer, data }: AnswerFormProps) => {
  const [formState, setFormState] = useState(data);

  return (
    <Container
      maxWidth="sm"
      style={{ backgroundColor: "white", border: "solid grey 1px", padding: "10px", marginBottom: "5px" }}
    >
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
        <Button
          color="primary"
          variant="text"
          onClick={() => {
            deleteAnswer(formState);
          }}
        >
          X
        </Button>
      </FormControl>
    </Container>
  );
};

export default AnswerForm;
