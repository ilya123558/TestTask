import { AlertTitle } from "@mui/material";
import { ReactNode } from "react";

const Title: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <AlertTitle sx={{fontSize: '30px'}}>
            {children}
        </AlertTitle>
    );
};

export default Title;