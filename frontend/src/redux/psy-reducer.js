import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const checkPsy= createAsyncThunk("loginpsy/checkPsy",async({psyAccount})=>{
  return axios.post('http://localhost:9000/loginpsy',psyAccount)
  .then(res => {return res.data})
  
  .catch(err => {return err.data.message})
})
const PsyApplySlice = createSlice({
    name: "PsyInscription",
    initialState :  {
        psychiatre : {},
         status: "",
         Erreur: "",
       },

       extraReducers: {
        
        
        [checkPsy.fulfilled]: (state, action) => {
          console.log(action.payload)

         if(action.payload===false){
            state.Erreur ="email or password wrong"
         }else {
            state.psychiatre= action.payload
            localStorage.setItem("psychiatre", JSON.stringify(action.payload))

          };
          state.status = "Success";
        },
        [checkPsy.rejected] : (state, action) =>{
            state.Erreur = action.payload
            state.status = "Rejected"
        },
        [checkPsy.pending] : (state)=>{
            state.status = "Pending"
        }
    }
  });

  export default PsyApplySlice.reducer;