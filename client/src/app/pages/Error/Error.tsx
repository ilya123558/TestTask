import { Box, Link } from "@mui/material";

const Error: React.FC = () => {
    return (
        <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            position='absolute'
            width='99%'
            height='99%'
            overflow='hidden'
        >
            <Box color='red' fontSize='4vh'>
                Error | <Link href='/' color='inherit' underline="hover">
                    Home
                </Link>
            </Box>
        </Box>
    );
};

export default Error;