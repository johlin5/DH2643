import { Container, Select, TextField, Typography, MenuItem } from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import { GREEN, PURPLE, RED } from "../../app/theme";
import { AnswerProps } from "./props";
import { createFalse } from "typescript";

const AnswerForm: React.FC<AnswerProps> = ({ handleSave, handleDelete, data, index }: AnswerProps) => {
  const [formState, setFormState] = useState(data);
  const [aIndex, _] = useState(index);

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
          handleSave(aIndex, formState);
          }
        }
      />
      <Select
        labelId="flag_id"
        id="flag_id"
        value={formState.flag ? 1 : 0}
        defaultValue={0}
        onChange={(event: any) => {
          setFormState({ ...data, flag: event.target.value === "0" ? false : true });
          }
        }
        onBlur={(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
          handleSave(aIndex, formState);
          }
        }
      >
        <MenuItem value={1}>True</MenuItem>
        <MenuItem value={0}>False</MenuItem>
      </Select>
      <PrimaryButton
        text="Delete"
        color={RED}
        variant="h6"
        height="48px"
        onClick={() => {
          handleDelete(index);
        }}
      />
    </Container>
  );
};

export default AnswerForm;
