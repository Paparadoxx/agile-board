import { AppBar, FormControl, Grid, MenuItem, Select, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { observer } from 'mobx-react-lite';
import useStore from '../../hooks/useStore';
import User from '../common/user';


const Header = () => {
	const{boards, users} = useStore();

	return(
		<AppBar position="static">
        <Toolbar variant='dense'>
          <Grid container justifyContent='space-between' alignItems='center'>
				<Grid item>
					<Box display='flex' alignItems='center'>
				 	<Typography variant="h6" color="inherit">
						Dashboard:
    				</Typography>
					<FormControl sx={{ m: 1, minWidth: 80}}variant='outlined'>
						<Select
							labelId="simple-select-autowidth-label-dashboard"
							id="simple-select-autowidth-dashboard"
							value={boards?.active?.id || ''}
							onChange={()=>{}}
							autoWidth
							label=""
							style={{
								backgroundColor:'#f3e5f5',
								marginLeft: 10
							}}
        				> 
          				<MenuItem value='' disabled>
								 -
         				</MenuItem>
							{boards.list.map((board)=> {
								return (
									<MenuItem 
									key={board?.id} 
									value ={board?.id}
									>
										{board?.title}
									</MenuItem>
								)
							})}
       				</Select>
      			</FormControl>
					</Box>
					</Grid>
					<Grid item>
						<User user={users?.me}/>
					</Grid>
			 </Grid>
        </Toolbar>
      </AppBar>
	)
}


export default observer(Header);