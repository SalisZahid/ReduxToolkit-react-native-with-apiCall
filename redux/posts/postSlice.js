import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"


export const getPosts=createAsyncThunk(
    'posts/getPosts',
    async({limit},{dispatch,getState})=>{
        
        return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`).then(response => response.json())
        
    }
)


const postSlice = createSlice({
    name: "posts",
  initialState: {
    list:[],
    status:null
  },
  extraReducers:{
    [getPosts.pending]: (state,action)=>{
        state.status='loading'
    },

    [getPosts.fulfilled]: (state,action)=>{
        state.list=action.payload
        state.status='success'
    },

    [getPosts.rejected]: (state,action)=>{
        state.status='failed'
    }
  }
})


// export const { increment,decrement,incrementBy,decrementBy } = postSlice.actions
export default postSlice.reducer