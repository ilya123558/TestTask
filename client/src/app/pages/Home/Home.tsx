import { Box, Container } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../../components/ui/Btn/Btn";
import Search from "../../components/ui/Search/Search";
import TodoList from "../../components/ui/TodoList/TodoList";

const Home: React.FC = () => {

    const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState('')

    return (
        <div>
            <Container maxWidth='xs' sx={{ mt: '2%' }}>
                <Search searchValue={searchValue} setSearchValue={setSearchValue} />
                <Box display='flex' justifyContent='center'>
                    <Btn onClickHandler={() => { navigate('/details') }}>create task</Btn>
                </Box>
                <TodoList searchValue={searchValue} />
            </Container>
        </div>
    );
};

export default Home;