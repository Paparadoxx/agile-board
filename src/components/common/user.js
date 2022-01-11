import { Avatar } from "@mui/material";
import { Box } from "@mui/system";


const User = ({user}) => {

	return (
		<Box display='flex' justifyContent='flex-end'>
			<span 
				style={{padding:10}}
			>
				{user?.name}
			</span>
			<Avatar src={user?.avatar} alt="/broken-image.jpg" />
			
		</Box>
	)
}

export default User;