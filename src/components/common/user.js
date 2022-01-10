import { Avatar } from "@mui/material";
import { Box } from "@mui/system";


const User = ({user}) => {

	return (
		<Box display='flex' alignItems='center'>
			<span 
				style={{margin: 10}}
			>
				{user?.name}
			</span>
			<Avatar src={user?.avatar} alt="/broken-image.jpg" />
			
		</Box>
	)
}

export default User;