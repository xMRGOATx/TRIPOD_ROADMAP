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
      <div className={styles.leftPanel}>
        <div className={styles.bg}>
          <div className={styles.orb1} />
          <div className={styles.orb2} />
          <div className={styles.grid} />
        </div>
        <div className={styles.leftContent}>
          <div className={styles.leftLogo}>
            <span className={styles.leftLogoIcon}>🧭</span>
            <span className={styles.leftLogoText}>Tripod Roadmap</span>
          </div>
          <h1 className={styles.leftTitle}>
            Start your<br />tech journey.
          </h1>
          <p className={styles.leftSubtitle}>
            Join thousands of developers building their careers with community-curated learning paths.
          </p>
          <div className={styles.animationContainer}>
            <div className={styles.pill}>Frontend</div>
            <div className={styles.pill}>Backend</div>
            <div className={styles.pill}>DevOps</div>
          </div>
        </div>
      </div>

      <div className={styles.rightPanel}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.title}>Create an account</h2>
            <p className={styles.subtitle}>Sign up to get started</p>
          </div>

          {error && <div className={styles.error}>{error}</div>}

          <div className={styles.socialButtons}>
            <button className={styles.socialBtn}>
              <svg className={styles.socialIcon} viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Continue with Google
            </button>
          </div>

          <div className={styles.divider}>or</div>

          <form className={styles.form} onSubmit={submit}>
            <div className={styles.field}>
              <label className={styles.label}>Full Name</label>
              <input
                className={styles.input}
                type="text" name="name" placeholder="John Doe"
                value={form.name} onChange={handle} required
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Email Address</label>
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
              {loading ? <span className="spinner" style={{ width: 18, height: 18, borderTopColor: '#000' }} /> : 'Create Account'}
            </button>
          </form>

          <p className={styles.switch}>
            Already have an account? <Link to="/login" className={styles.link}>Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
