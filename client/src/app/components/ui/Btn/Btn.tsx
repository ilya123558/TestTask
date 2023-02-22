import { Button } from '@mui/material';
import React from 'react';

interface IProps {
    children: React.ReactNode,
    onClickHandler: () => void,
    color?: string
}

const Btn: React.FC<IProps> = ({ children, onClickHandler, color }) => {

    return (
        <Button sx={{mt: '40px', color: color? color:''}} onClick={onClickHandler}>{children}</Button>
    );
};

export default Btn;