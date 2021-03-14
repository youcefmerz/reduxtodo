const initialState = [{
  workName: "work1"
},
{workName: 'work2'}] 




export default (state = initialState , action) => {
    switch (action.type) {
        case 'ADD_TODO':
        return [...state , action.payload]
        default:
            return state
    }
}