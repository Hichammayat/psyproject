import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const newMessage = createAsyncThunk("message/newMessage", async ({idSender,idrecepient,chatId,Message}) =>{
    return axios.post(`http://localhost:9000/message/${idSender}/${idrecepient}/${chatId}`, Message)
    .then(res => {return res.data})
    .catch(err => {return err.data.message})
  })

  const MessageSlice = createSlice({
    name: "Messages",
    initialState :  {
        Message : [],
         status: "",
         Erreur: "",
       },

       extraReducers: {
        
        [newMessage.fulfilled] : (state, action)=>{
            state.Message = [...state.Message, action.payload];
            state.status = "Success";
        },
        [newMessage.rejected] : (state, action) =>{
          state.Erreur = action.payload
          state.status = "Rejected"
        },
        [newMessage.pending] : (state) =>{
           state.status = "Pending"
        },
    }
  });

  export default MessageSlice.reducer;