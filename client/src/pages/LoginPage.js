import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styles from './AuthPage.module.css';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async e => {
    e.preventDefault();
    setError(''); setLoading(true);
    try {
      await login(form.email, form.password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.bg}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.grid} />
      </div>
      <div className={styles.card}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>⚡</span>
          <span className={styles.logoText}>Tripod</span>
        </div>
        <h1 className={styles.title}>Welcome back</h1>
        <p className={styles.subtitle}>Sign in to continue your learning journey</p>

        {error && <div className={styles.error}>{error}</div>}

        <form onSubmit={submit} className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>Email</label>
            <input
              className={styles.input}
              type="email" name="email" placeholder="you@example.com"
              value={form.email} onChange={handle} required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Password</label>
            <input
              className={styles.input}
              type="password" name="password" placeholder="••••••••"
              value={form.password} onChange={handle} required
            />
          </div>
          <button className={styles.btn} disabled={loading}>
            {loading ? <span className="spinner" style={{ width: 18, height: 18 }} /> : 'Sign In'}
          </button>
        </form>

        <p className={styles.switch}>
          Don't have an account? <Link to="/signup" className={styles.link}>Sign up</Link>
        </p>
      </div>
    </div>
  );
}
