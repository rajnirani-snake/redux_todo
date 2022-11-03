import {useSelector, useDispatch} from 'react-redux'
import { editTodo } from '../actions';


const EditTodoComponent = ({inputData, elemId}) => {

    // console.log('editTodoComponent',inputData)

    const dispatch = useDispatch();

    return <div>
        <button onClick={()=>dispatch(editTodo(elemId))}>edit</button>
    </div>
}





export default EditTodoComponent;