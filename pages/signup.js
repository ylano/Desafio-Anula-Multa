import React, { useState } from 'react';
import '../app/signup.css';  // Corrigido para signup.css
import Navbar from './components/navbar';
import { useRouter } from 'next/router';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    const response = await fetch('/api/Users/cadastrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name, password }),
    });

    if (response.ok) {
      router.push('/login');
    } else {
      console.error('Failed to register');
    }
  };

  return (
    <>
      <Navbar />
      <title>Sign Up</title>
      <div className="signup-container">
        <h1>Cadastrar-se</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirmar Senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">Cadastrar-se</button>
        </form>
      </div>
    </>
  );
};

export default SignupPage;
