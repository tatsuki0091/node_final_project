import React, { useState, useEffect } from "react";
// import { fetchTask } from '../../api/todo';
import { useParams, useLocation } from "react-router-dom";
// import { HTitle, PBody } from './detailStyle';
import {
  HTitle,
  Form,
  Label,
  Th,
  Td,
  Table,
  InputButton,
  Input,
} from "./styles/registerStyle";
import { useHistory } from "react-router-dom";
import { updateTask } from "../api/todo";
const Detail = () => {
  const history = useHistory();

  // クエリパラメータを取得するための処理
  const params = useParams();
  //   const [todo, setTodo] = useState([]);
  // 一覧画面から渡したstateを取得
  const location = useLocation();
  const state = location.state;
  const [title, setTitle] = useState(state.title);
  const [body, setBody] = useState(state.body);
  const setTitleValue = (e) => {
    setTitle(e.target.value);
  };
  const setBodyValue = (e) => {
    setBody(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(params.id, title, body);
    history.push("/");
  };
  return (
    <>
      <HTitle data-testid="todo-detail-title">Detail</HTitle>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <Table>
          <tr>
            <Th>
              <Label>title</Label>
            </Th>
            <Td>
              <Input
                type="text"
                name="title"
                value={title}
                onChange={(event) => {
                  setTitleValue(event);
                }}
              />
            </Td>
          </tr>
          <tr>
            <Th>
              <Label>body</Label>
            </Th>
            <Td>
              <Input
                type="text"
                name="body"
                value={body}
                onChange={(event) => {
                  setBodyValue(event);
                }}
              />
            </Td>
          </tr>
        </Table>
        <InputButton type="submit" label="submit" value="Update" />
      </Form>
    </>
  );
};

export default Detail;
