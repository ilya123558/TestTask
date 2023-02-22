import { Box, Checkbox, FormLabel } from '@mui/material';
import React from 'react';
import { ITodo } from '../../models/Todo';
import Btn from '../ui/Btn/Btn';

interface IProps extends ITodo {
    onClick: () => void
}

const InfoTodoComponent: React.FC<IProps> = (todo) => {
    return (
        <>
            <Box display='flex' flexDirection='column'>
                <Box display='flex' mt={3} alignItems='center'>
                    <FormLabel sx={{ fontSize: '20px' }}>Title: {todo.title}</FormLabel>
                </Box>
                <Box display='flex' mt={6} alignItems='center'>
                    <FormLabel sx={{ fontSize: '20px' }} >Description: {todo.description}</FormLabel>
                </Box>
                <Box display='flex' mt={6} alignItems='center'>
                    <FormLabel sx={{ fontSize: '20px' }} >Completed: <Checkbox checked={todo.completed} disabled/></FormLabel>
                </Box>
            </Box>
            <Btn
                onClickHandler={todo.onClick}>
                edit Task
            </Btn>
        </>

    );
};

export default InfoTodoComponent;