/**
 * Created by apple on 2017/9/27.
 */
const initail = {
    data:[]
}

function list(state = initail,actions){
     switch (actions.type){
         case 'LIST_HANDLE':
             return Object.assign({},state,actions.data)
         default :
             return state
     }
}

export default  list;