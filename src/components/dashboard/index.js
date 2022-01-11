
import useStore from '../../hooks/useStore';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';

import Column from './column';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';

const getListStyle = (isDraggingOver) => ({
	backgroundColor: isDraggingOver ? 'Lightblue' : '#EAE6CA',
	transition: 'backgroundColor ease 0.1s',
	minHeight: 500,
	padding: 8,
	});

function Dashboard(){
	const {boards} = useStore();

	const onDragEnd = useCallback((event) => {
		const {source, destination, draggableId: taskId} = event;

		boards.active.moveTask(taskId, source, destination);

	},[boards]);

	return (
		<Box p={2}>
			<DragDropContext onDragEnd={onDragEnd}>
			<Grid container spacing={3}>
				{boards?.active?.sections.map(section =>{
					return (
						<Grid item key={section.id} xs>
							<Paper>
								<Box p={1} display="flex" alignItems="center" justifyContent="space-between">
									<Typography variant='h5'>{section.title}</Typography>
								</Box>
								<Droppable droppableId={section.id}>
									{(provided, snapshot) => (
										<div
										 {...provided.droppableProps}
										 ref={provided.innerRef}
										 style={getListStyle(snapshot.isDraggingOver)}
										 >
											<Column section={section}/>
											{provided.placeholder}
										</div>
									)}
								</Droppable>
							</Paper>
						</Grid>
					)
				})}
			</Grid>
			</DragDropContext>
		</Box>
	)
}

export default observer(Dashboard);