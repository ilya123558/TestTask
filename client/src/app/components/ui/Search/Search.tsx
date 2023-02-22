import { Box, TextField } from "@mui/material";

interface IProps {
    searchValue: string,
    setSearchValue: (searchValue: string) => void
}

const Search: React.FC<IProps> = ({searchValue, setSearchValue}) => {

    return (
        <Box display='flex' justifyContent='center'>
            <TextField
                label="Search"
                variant="standard"
                sx={{
                    width: '90%',
                    color: 'red',
                    mb: '5%'
                }}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
        </Box>

    );
};

export default Search;