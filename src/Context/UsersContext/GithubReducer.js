const GithubReducer = (state,action) =>{
    switch(action.type) {
        case 'Set_loading' :
            return {
                ...state,
                loading:true
            }
        case 'Get_Users' :
            return {
                ...state,
                User:action.payload,
                loading:false
            }
        case 'Set_Clear' :
            return{
                User:[]
            }
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
export default GithubReducer;