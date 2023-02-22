import { ListItem, ListItemText } from "@mui/material";
import { ITodo } from "../../../models/Todo";

const TodoItem: React.FC<ITodo> = ({ id, title, completed }) => {
    return (
        <>
            <ListItem divider hidden>
                <a href={`/details/${id}`}
                    style={{
                        textAlign: 'center',
                        color: completed ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.7)',
                        width: '100%',
                        textDecoration: 'none'
                    }}
                >
                    <ListItemText sx={{
                        position: 'relative',
                        textDecoration: completed ? 'line-through' : 'none'
                    }}>
                        {title}
                    </ListItemText>
                </a>
            </ListItem>
        </>
    );
};

export default TodoItem;