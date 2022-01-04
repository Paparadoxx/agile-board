import { CardContent, Typography } from "@mui/material";


function Task({task}){
	return(
		<CardContent>
			<Typography color="textPrimary">
				{task?.title}
			</Typography>
		</CardContent>
	)
}

export default Task;