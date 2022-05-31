import React from 'react'
import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import { useContext,useEffect } from 'react';

export default function TotalContacts() {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);

    useEffect(() => {
    !user && navigate("/", {replace: true});
  }, []);
  return (
    <div></div>
  )
}
