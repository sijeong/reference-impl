import { routerActions } from 'react-router-redux'
import * as todosActions from '../features/todos/actions'
import * as hospitalActions from  '../features/hospitals/actions'
export default{
    router: routerActions,
    todos: todosActions,
    hospitals: hospitalActions
}