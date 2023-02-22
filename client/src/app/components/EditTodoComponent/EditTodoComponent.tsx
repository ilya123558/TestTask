import { Box, Checkbox, InputLabel, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ITodo } from '../../models/Todo';
import { useDeleteTodoMutation, useUpdateTodoMutation } from '../../services/TodoService';
import Btn from '../ui/Btn/Btn';

interface IProps extends ITodo {
    onClick: () => void
}

const EditTodoComponent: React.FC<IProps> = (todo) => {

    const navigate = useNavigate()

    const [deleteTodo] = useDeleteTodoMutation()
    const [updateTodo] = useUpdateTodoMutation()

    const [value, setValue] = useState({
        title: todo.title,
        description: todo.description,
        completed: todo.completed
    })

    const onChangeHandler = (
        type: 'title' | 'description' | 'completed',
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setValue(prev => ({ ...prev, [type]: event.target.value }))
    }

    const onChangeCompletedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(prev => ({ ...prev, completed: event.target.checked }))
    }


    const deleteTodoHandler = async () => {
        await deleteTodo({ id: String(todo.id) })
        navigate('/details')
    }

    const updateTodoHandler = async () => {
        if(value.title.length === 0) {
            alert('the title field must not be empty')
            return
        }
        await updateTodo({ body: value, id: String(todo.id) })
        todo.onClick()
    }

    return (
        <Box>
            <Box
                display='flex'
                alignItems='center'
                mb='40px'
            >
                <InputLabel sx={{ pr: '20px', pt: '17px' }}>Title: </InputLabel>
                <TextField
                    id="standard-helperText"
                    label='edit title'
                    variant="standard"
                    onChange={(e) => onChangeHandler('title', e)}
                    value={value.title}
                />
            </Box>
            <Box
                display='flex'
                alignItems='center'
            >
                <InputLabel sx={{ pr: '20px', pt: '17px', minWidth: '100px' }}>Description: </InputLabel>
                <TextField
                    id="standard-helperText"
                    label='edit descriprion'
                    variant="standard"
                    onChange={(e) => onChangeHandler('description', e)}
                    fullWidth
                    value={value.description}
                />
            </Box>
            <Box display='flex' mt={6} alignItems='center'>
                <InputLabel sx={{ pr: '20px' }}>Completed: </InputLabel>
                <Checkbox
                    checked={value.completed}
                    onChange={onChangeCompletedHandler}
                />
            </Box>
            <Btn
                onClickHandler={updateTodoHandler}>
                save
            </Btn>
            <Btn
                color={'red'}
                onClickHandler={deleteTodoHandler}>
                delete
            </Btn>
        </Box>
    );
};

export default EditTodoComponent;