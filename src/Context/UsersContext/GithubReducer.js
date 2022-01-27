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
        default:
            return state
    }

}
export default GithubReducer;