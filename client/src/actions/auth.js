import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {


  try {


    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router('/');
  } catch (error) {
    alert("Wrong credentials ! ");
    router('/');
    router('/auth');
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router('/');
  } catch (error) {
    alert("Either existing email or non conforming passwords, please verify your entries.");
    router('/');
    router('/auth');
  }
};

export const verif = (router) => async (dispatch) => {
  try {
      
      alert("First name or last name should only contain letters.")
       router('/');
      
  } catch (error) {
    
    router('/');
    router('/auth');
  }
};
export const verif2 = (router) => async (dispatch) => {
  try {
      
       window.location.replace('http://localhost:3000/auth');
       router('/auth');
       
  } catch (error) {
    
    router('/');
    router('/auth');
  }
};