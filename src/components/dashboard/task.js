import { CardContent, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";


function Task({task}){
	return(
		<CardContent>
			<Typography color="textPrimary" gutterBottom style={{fontSize: 18}}>
				{task.title}
			</Typography>
			<Typography color="textSecondary" gutterBottom>
				{task.description}
			</Typography>
		</CardContent>
	)
}

export default observer(Task);