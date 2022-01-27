const AlertReducer = (state,action) =>{
    switch(action.type) {
        case 'Set_Alert' :
            return action.payload
            
        case 'Stop_Alert' :
            return {
                payload:null
            }
        default:
            return state
    }

}
export default AlertReducer;