
export type SetIsLoadedActionType = {
    type:'SET-IS-LOADED',
    isLoading: boolean
}
export const setIsLoadingActionCreator = (value:boolean):SetIsLoadedActionType =>(
    {type:'SET-IS-LOADED',isLoading: value}
)
type ActionType = SetIsLoadedActionType
export type AppReducerStateType = {
    isLoaded: boolean
}
const initialState = {
    isLoaded: false
}
export const appReducer = (state:AppReducerStateType=initialState, action:ActionType) =>{
    switch (action.type){
        case "SET-IS-LOADED":
            return {isLoaded:action.isLoading}
        default:
            return state
    }
}