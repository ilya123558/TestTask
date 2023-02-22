import { Box, InputLabel, TextField } from "@mui/material";
import { useState } from "react";
import { useCreateTodoMutation } from "../../services/TodoService";
import Btn from "../ui/Btn/Btn";

const CreateTodoComponent: React.FC = () => {

    const [createTodo] = useCreateTodoMutation()

    const [value, setValue] = useState({
        title: '',
        description: '',
        completed: false
    })

    const onChangeHandler = (
        type: 'title' | 'description',
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setValue(prev => ({ ...prev, [type]: event.target.value }))
    }

    const createTodoHandler = async () => {
        if(value.title.length === 0) {
            alert('the title field must not be empty')
            return
        }
        await createTodo(value)
    }

    return (
        <>
            <Box>
                <Box
                    display='flex'
                    alignItems='center'
                    mb='40px'
                >
                    <InputLabel sx={{ pr: '20px', pt: '5px' }}>Title: </InputLabel>
                    <TextField
                        id="standard-helperText"
                        defaultValue={'title'}
                        variant="standard"
                        onChange={(e) => onChangeHandler('title', e)}
                        value={value.title}
                    />
                </Box>
                <Box
                    display='flex'
                    alignItems='center'
                >
                    <InputLabel sx={{ pr: '20px', pt: '5px', minWidth: '100px' }}>Description: </InputLabel>
                    <TextField
                        id="standard-helperText"
                        defaultValue={'description'}
                        variant="standard"
                        onChange={(e) => onChangeHandler('description', e)}
                        fullWidth
                        value={value.description}
                    />
                </Box>
            </Box>
            <Btn onClickHandler={createTodoHandler} color="green">add task</Btn>
        </>
    );
};

export default CreateTodoComponent;