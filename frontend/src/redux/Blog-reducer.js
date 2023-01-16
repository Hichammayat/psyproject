import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getPostid = createAsyncThunk("posts/getPostid", async ({id}) => {
    return axios
      .get(`http://localhost:9000/displayPost/${id}`,)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.data.message;
      });
  });
  export const AddBlog = createAsyncThunk("posts/Add", async ({Blog,id}) =>{
    return axios.post(`http://localhost:9000/Post/${id}`, Blog)
    .then(res => {return res.data})
    .catch(err => {return err.data.message})
  })

  const BlogSlice = createSlice({
    name: "Blog",
    initialState :  {
        Blog : [],
         status: "",
         Erreur: "",
       },

       extraReducers: {
        
        [getPostid.fulfilled] : (state, action)=>{
            state.Blog = action.payload;
            state.status = "Success";
        },
        [getPostid.rejected] : (state, action) =>{
          state.Erreur = action.payload
          state.status = "Rejected"
        },
        [getPostid.pending] : (state) =>{
           state.status = "Pending"
        },
        [AddBlog.fulfilled] : (state, action)=>{
            state.Blog = [...state.Blog, action.payload];
            state.status = "Success";
        },
        [AddBlog.rejected] : (state, action) =>{
          state.Erreur = action.payload
          state.status = "Rejected"
        },
        [AddBlog.pending] : (state) =>{
           state.status = "Pending"
        },
    }
  });

  export default BlogSlice.reducer;