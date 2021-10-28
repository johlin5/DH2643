import { Container, Select, TextField, MenuItem, FormControl, Button } from "@material-ui/core";
import React, { ChangeEvent } from "react";
import { AnswerProps } from "./props";


const AnswerForm: React.FC<AnswerProps> = ({ answerData, handleSave, handleDelete }: AnswerProps) => {
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
          value={answerData.description}
          onChange={(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleSave({...answerData, description: event.target.value})}
          onBlur={() => handleSave(answerData)}
        />
        <Select
          labelId="flag_id"
          id="flag_id"
          value={answerData.flag ? "1" : "0"}
          defaultValue={0}
          onChange={(event: any) => handleSave({...answerData, flag: event.target.value === "0" ? false : true})}
          onBlur={() => handleSave(answerData)}
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
        onClick={() => handleDelete(answerData)}>
          X
        </Button>
      </FormControl>
    </Container>
  );
};

export default AnswerForm;
