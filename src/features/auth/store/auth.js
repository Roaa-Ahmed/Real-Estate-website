import {create} from 'zustand'
const useAuth=create((set)=>({
  email:'null',
  setEmail:(email)=>
    set({email})
}));
export default useAuth