import React, { useState, useEffect } from "react";
import {
  Head,
  Table,
  TrHead,
  Tr,
  Th,
  Td,
  Button,
  RegisterButton,
  StyledLink,
} from "./styles/todoStyle";
import { Link } from "react-router-dom";
import { fetchTasks, deleteTask } from "../api/todo";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  // if (
  //   typeof props.location.state != 'undefined' &&
  //   props.location.state.arrayNum !== arrayNum
  // ) {
  //   setArrayNum(props.location.state.arrayNum);
  // }

  const fetchTodo = async () => {
    const data = await fetchTasks();
    console.log(data);
    if (data.length !== 0) {
      setTodos(data);
    }

    // setArrayNum(data.length);
  };

  useEffect(() => {
    fetchTodo();
  }, []);
  // const ref = useRef();
  // function usePrevious(value) {
  //   useEffect(() => {

  //   });
  // }

  // function usePrevious() {
  //   const ref = useRef();
  //   useEffect(() => {
  //     ref.current = todos;
  //   });
  //   return ref;
  // }

  const deleteTodo = async (e, id) => {
    e.preventDefault();
    deleteTask(id);
    function remove(value) {
      return value._id !== id;
    }
    const newTodos = todos.filter(remove);
    setTodos(newTodos);
    // setArrayNum(arrayNum - 1);
    // 更新
    // window.location.reload();
  };
  return (
    <>
      <Head>Todo List</Head>
      <StyledLink
        data-testid="todo-list-register"
        to={{
          pathname: "/todo/new",
        }}
      >
        <RegisterButton>Register</RegisterButton>
      </StyledLink>
      <Table data-testid="todo-list-table">
        <TrHead>
          <Th>Title</Th>
          <Th>Created on</Th>
          <Th>Updated on</Th>
          <Th>Delete</Th>
        </TrHead>
        {todos.length !== 0 &&
          todos.map((todo) => (
            <Tr key={todo._id}>
              <Td>
                <Link
                  to={{
                    pathname: `/todo/${todo._id}`,
                    state: { title: todo.title, body: todo.body },
                  }}
                >
                  {todo.title}
                </Link>
              </Td>
              <Td>{new Date(todo.created_on).toLocaleDateString("en-US")}</Td>
              <Td>{new Date(todo.updated_on).toLocaleDateString("en-US")}</Td>
              <Td>
                <Button
                  onClick={(event) => {
                    deleteTodo(event, todo._id);
                  }}
                >
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
      </Table>
    </>
  );
};

export default Todo;
