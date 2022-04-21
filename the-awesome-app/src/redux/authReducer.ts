
interface AuthData {

    isAuthenticated: boolean,
    userName: string,
    accessToken: string,
    refreshToken: string
}

interface AuthAction{
    type: string,
    payload: AuthData
}

const initData: AuthData = {
    isAuthenticated: false,
    userName: "",
    accessToken: "",
    refreshToken: ""
}


export const authReducer = (state=initData, action: AuthAction) => {

    if(action.type === "SET_AUTH"){
        return {
            ...action.payload
        };
    }
    return state;

}
