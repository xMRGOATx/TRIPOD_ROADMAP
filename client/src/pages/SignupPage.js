import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styles from './AuthPage.module.css';

export default function SignupPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async e => {
    e.preventDefault();
    setError('');
    if (form.password !== form.confirm) return setError('Passwords do not match');
    if (form.password.length < 6) return setError('Password must be at least 6 characters');
    setLoading(true);
    try {
      await signup(form.name, form.email, form.password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed. Please try again.');
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
        <h1 className={styles.title}>Create account</h1>
        <p className={styles.subtitle}>Start your structured learning journey today</p>

        {error && <div className={styles.error}>{error}</div>}

        <form onSubmit={submit} className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>Full Name</label>
            <input
              className={styles.input}
              type="text" name="name" placeholder="John Doe"
              value={form.name} onChange={handle} required
            />
          </div>
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
              type="password" name="password" placeholder="Min. 6 characters"
              value={form.password} onChange={handle} required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Confirm Password</label>
            <input
              className={styles.input}
              type="password" name="confirm" placeholder="Repeat password"
              value={form.confirm} onChange={handle} required
            />
          </div>
          <button className={styles.btn} disabled={loading}>
            {loading ? <span className="spinner" style={{ width: 18, height: 18 }} /> : 'Create Account'}
          </button>
        </form>

        <p className={styles.switch}>
          Already have an account? <Link to="/login" className={styles.link}>Sign in</Link>
        </p>
      </div>
    </div>
  );
}
