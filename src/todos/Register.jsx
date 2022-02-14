import React, { useState } from "react";
import {
  HTitle,
  Form,
  Label,
  Th,
  Td,
  Table,
  InputButton,
  Input,
  Textarea,
  P,
} from "./styles/registerStyle";
import { postTask } from "../api/todo";
import { useHistory } from "react-router-dom";
import { validateInfo } from "./validation";

const Register = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState({});
  const setTitleValue = (e) => {
    setTitle(e.target.value);
  };
  const setBodyValue = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validateInfo(title, body);
    if (validation.title === "" && validation.body === "") {
      await postTask(title, body);
      await history.push({
        pathname: "/",
      });
    } else {
      setErrors(validation);
    }

    //window.location.reload();
  };
  return (
    <>
      <HTitle>Register</HTitle>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <Table>
          <tr>
            <Th>
              <Label>title</Label>
            </Th>
            <Td>
              <Input
                data-testid="todo-register-title"
                type="text"
                name="title"
                value={title}
                onChange={(event) => {
                  setTitleValue(event);
                }}
              />
              {errors.title && <P>{errors.title}</P>}
            </Td>
          </tr>
          <tr>
            <Th>
              <Label>body</Label>
            </Th>
            <Td>
              <Textarea
                data-testid="todo-register-body"
                name="body"
                value={body}
                onChange={(event) => {
                  setBodyValue(event);
                }}
              />
              {errors.body && <P>{errors.body}</P>}
            </Td>
          </tr>
        </Table>
        <InputButton
          data-testid="todo-register-button"
          type="submit"
          label="submit"
          value="submit"
        />
      </Form>
    </>
  );
};

export default Register;
