import React from 'react';
import { Header } from '../components/common/Header';
import { LoginForm } from '../components/auth/LoginForm';

export function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <div className="flex items-center justify-center p-4 mt-16">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Sign in</h2>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}