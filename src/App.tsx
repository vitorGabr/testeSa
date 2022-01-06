import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import RoutesService from './Routes';
import { api } from './service/api';
import './style.css';

function App() {

  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      if (cookies.token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${cookies.token}`;
      }
    } finally {
      setLoading(false);
    }
    api.interceptors.response.use(response => response, async error => {
      const status = error.response ? error.response.status : null;
      if (status === 401) {
        navigate('/login');
        removeCookie('token');
      }
      const err = error.response ? error.response.data.errors[0].message : 'Aconteceu um erro'
      return Promise.reject(err);
    })

  }, []);

  return (
    <>
      {!isLoading && <RoutesService />}
    </>
  );
}

export default App;
