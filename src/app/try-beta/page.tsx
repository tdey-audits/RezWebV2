"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const STREAMLIT_URL = "https://b34bvolr4xazf2byeqkv3u.streamlit.app/";
const FORMSPARK_ENDPOINT = "https://submit-form.com/GgJJXaggZ"; // TODO: Replace with your Formspark form ID

export default function TryBetaPage() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [isCheckingAccess, setIsCheckingAccess] = useState(true);

    // Check if user already has access
    useEffect(() => {
        const hasAccess = localStorage.getItem('rez_beta_registered');
        if (hasAccess === 'true') {
            window.location.href = STREAMLIT_URL;
        } else {
            setIsCheckingAccess(false);
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await fetch(FORMSPARK_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                // Mark user as registered
                localStorage.setItem('rez_beta_registered', 'true');
                localStorage.setItem('rez_beta_email', email);
                // Redirect to Streamlit
                window.location.href = STREAMLIT_URL;
            } else {
                const data = await response.json();
                setError(data.error || 'Something went wrong. Please try again.');
            }
        } catch {
            setError('Network error. Please check your connection and try again.');
        } finally {
            setIsLoading(false);
        }
    };

    // Show loading while checking localStorage
    if (isCheckingAccess) {
        return (
            <div className="try-beta-page">
                <div className="try-beta-container">
                    <div className="loading-spinner" />
                </div>
            </div>
        );
    }

    return (
        <div className="try-beta-page">
            <div className="try-beta-container">
                <Link href="/" className="back-link">
                    ← Back to home
                </Link>

                <div className="try-beta-content">
                    <div className="try-beta-header">
                        <img src="/assets/rez.png" alt="Rez Logo" className="try-beta-logo" />
                        <h1 className="try-beta-title">Get Early Access</h1>
                        <p className="try-beta-subtitle">
                            Enter your email to try the Rez beta and receive updates on our launch.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="try-beta-form">
                        <div className="form-group">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="email-input"
                                disabled={isLoading}
                            />
                        </div>

                        {error && (
                            <div className="error-message">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="submit-btn"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <span className="btn-loading">
                                    <span className="loading-dot" />
                                    <span className="loading-dot" />
                                    <span className="loading-dot" />
                                </span>
                            ) : (
                                'Get Access →'
                            )}
                        </button>
                    </form>

                    <p className="try-beta-footer">
                        By signing up, you agree to receive product updates. No spam, ever.
                    </p>
                </div>
            </div>
        </div>
    );
}
