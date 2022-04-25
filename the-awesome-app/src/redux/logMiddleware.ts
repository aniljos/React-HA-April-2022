


// export const logMiddleware = (store:any) => {

//     return (nextMiddleware: any) => {
        
//         return (action: any)=> {
            
//             console.log("[b/4 logMiddleware]", action.type, store.getState());
//             nextMiddleware(action);
//             console.log("[logMiddleware]", action.type, store.getState());
//         }
//     }
// }

export const logMiddleware = (store : any) => (nextMiddleware: any) => (action: any) => {

    console.log("[b/4 logMiddleware]", action.type, store.getState());
    nextMiddleware(action);
    console.log("[logMiddleware]", action.type, store.getState());
}