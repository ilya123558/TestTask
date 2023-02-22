import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CreateTodoComponent from "../../components/CreateTodoComponent/CreateTodoComponent";
import EditTodoComponent from "../../components/EditTodoComponent/EditTodoComponent";
import InfoTodoComponent from "../../components/InfoTodoComponent/InfoTodoComponent";
import Btn from "../../components/ui/Btn/Btn";
import Loading from "../../components/ui/Loading/Loading";
import Title from "../../components/ui/Title/Title";
import TodoList from "../../components/ui/TodoList/TodoList";
import { ITodo } from "../../models/Todo";
import { useFetchTodosQuery } from "../../services/TodoService";

const Details: React.FC = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const { data: todos, isLoading } = useFetchTodosQuery(null)

    const [todo, setTodo] = useState<ITodo | null>(null)
    const [editComponentVisible, setEditComponentVisible] = useState<boolean>(false)

    useEffect(() => {
        if (todos) {
            const result = todos.find(todo => todo.id === Number(id))
            if (id && !result) {
                navigate('/error')
            }
            result && setTodo(result)
        }
    }, [todos, id, navigate])

    return (
        <>
            {isLoading
                ?
                <Loading />
                :
                <Container maxWidth='md' sx={{ pt: '2vh' }} >
                    <Title>
                        {todo && id ? (editComponentVisible ? 'Edit Task' : 'Task') : 'Create Task'}
                    </Title>
                    {
                        todo && id ?
                            <>
                                {
                                    editComponentVisible
                                        ?
                                        <EditTodoComponent {...todo} onClick={() => setEditComponentVisible(!editComponentVisible)} />
                                        :
                                        <InfoTodoComponent {...todo} onClick={() => setEditComponentVisible(!editComponentVisible)} />
                                }
                            </>
                            :
                            <>
                                <CreateTodoComponent />
                            </>
                    }
                    <TodoList />
                    <Box display='flex' justifyContent='center'>
                        <Btn onClickHandler={() => { navigate('/') }}>home</Btn>
                    </Box>
                </Container>
            }
        </>
    );
};

export default Details;