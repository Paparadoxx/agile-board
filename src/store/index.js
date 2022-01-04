import {types} from 'mobx-state-tree';
import BoardStore from './boards';
import UsersStore from './users';

const RootStore = types.model ("RootStore", {
	users: types.optional(UsersStore,{}),
	boards: types.optional(BoardStore,{}),
});

export default RootStore;