const GithubReducer = (state,action) =>{
    switch(action.type) {
        case 'Set_loading' :
            return {
                ...state,
                loading:false
            }
        case 'Get_Users' :
            return {
                ...state,
                User:action.payload,
                loading:true
            }
        default:
            return state
    }

}
export default GithubReducer;