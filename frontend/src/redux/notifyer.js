import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNotif = createAsyncThunk("Notification/getNotif", async({psychiatre_id})=>{
    return axios.get(`http://localhost:9000/GetNotif/${psychiatre_id}`)
    .then(res => {return res.data})
    .catch(err => {return err.data.message})
  })
export const SendNotif = createAsyncThunk("Notification/SenNotif",async({user_id})=>{
    return axios.post(`http://localhost:9000/SendNotif/${user_id}`)
    .then(res => {return res.data})
    .catch(err => {return err.data.message})
})

  const NotifSlice = createSlice({
    name: "notifications",
    initialState :  {
        Notification : [],
         status: "",
         Erreur: "",
       },
       extraReducers: {
        
        [getNotif.fulfilled] : (state, action)=>{
            state.Notification = action.payload;
            state.status = "Success";
        },
        [getNotif.rejected] : (state, action) =>{
          state.Erreur = action.payload
          state.status = "Rejected"
        },
        [getNotif.pending] : (state) =>{
           state.status = "Pending"
        },
        [SendNotif.fulfilled] : (state, action)=>{
            state.Notification = action.payload;
            state.status = "Success";
        },
        [SendNotif.rejected] : (state, action) =>{
          state.Erreur = action.payload
          state.status = "Rejected"
        },
        [SendNotif.pending] : (state) =>{
           state.status = "Pending"
        },
    }
  });

  export default NotifSlice.reducer;