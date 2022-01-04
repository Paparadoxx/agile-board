import { useContext } from "react";
import {StoreContext} from '../index';

function useStore(){
	return useContext(StoreContext);
} 

export default useStore;