import { Divider } from "@mui/material"

interface LineProps {
    color?: string | '#BAB8B8';
}


export const Line = ({ color }: LineProps) => {
    return (
        <Divider
            sx={{
                borderColor: color,
                borderBottomWidth: '3px',
            }}
        />
    )
}











