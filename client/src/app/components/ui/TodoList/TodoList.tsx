import { DialogTitle, List, Box, ListItemText } from '@mui/material'

import { useFetchTodosQuery } from "../../../services/TodoService";
import Loading from '../Loading/Loading';
import TodoItem from '../TodoItem/TodoItem';


const TodoList: React.FC<{ searchValue?: string }> = ({ searchValue }) => {

    const { data: todos, isLoading } = useFetchTodosQuery(null)

    return (
        <Box display='flex' alignItems='center' flexDirection='column' mt='40px'>
            <DialogTitle textAlign='center' fontSize='30px'>Todo list</DialogTitle>
            <List sx={{
                borderRadius: '8px',
                width: '350px',
            }}>
                {todos
                    ?
                    (
                        searchValue
                            ?
                            todos
                                .filter(todo => todo.title.toLowerCase().includes(searchValue.toLowerCase()))
                                .map(todo => <TodoItem key={todo.id} {...todo} />)
                            :
                            todos.map(todo => <TodoItem key={todo.id} {...todo} />)
                    )
                    :
                    <div>{isLoading ? <Loading /> : 'error'} </div>
                }
            </List>
            {todos?.length === 0 && <ListItemText>list is empty</ListItemText>}
        </Box>
    );
};

export default TodoList;