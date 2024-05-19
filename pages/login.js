import React, { useState } from 'react';
import '../app/login.css';
import Navbar from './components/navbar';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/Users/logar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const { token } = await response.json();
      // Armazene o token em algum lugar seguro, como cookies ou local storage
      localStorage.setItem('token', token);
      router.push('/');
    } else {
      console.error('Failed to login');
    }
  };

  return (
    <>
      <Navbar />
      <title>Tela de login</title>
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
