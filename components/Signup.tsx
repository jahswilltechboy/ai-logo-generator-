import React, { useState } from 'react';
import { GoogleIcon } from '../constants';

const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.hash = '/';
  };

  const handleGoogleSignIn = async () => {
    const supabase = (window as any).supabase;
    if (supabase?.auth?.signInWithOAuth) {
      await supabase.auth.signInWithOAuth({ provider: 'google' });
      return;
    }
    const auth0 = (window as any).auth0;
    if (auth0?.loginWithRedirect) {
      await auth0.loginWithRedirect({ connection: 'google-oauth2' });
      return;
    }
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto w-full md:max-w-[1230px] px-4 sm:px-6 pt-12 pb-12 md:pl-0 md:pr-6 flex flex-col items-center justify-center">
        <div className="grid w-full gap-8 md:gap-12 items-center justify-center md:grid-cols-2 md:my-5 md:mx-auto md:px-5">
          <div className="max-w-xl w-full mx-auto md:mx-0 md:order-2 md:mr-5">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Create your account</h1>
            <p className="text-gray-600 mb-6 md:mb-8">Join thousands using AI to generate professional logos.</p>

            <form onSubmit={onSubmit} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Create a password"
                  required
                />
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Create account
              </button>
              <div className="flex items-center my-4">
                <span className="h-px bg-gray-200 flex-1"></span>
                <span className="px-3 text-gray-500 text-sm">or</span>
                <span className="h-px bg-gray-200 flex-1"></span>
              </div>
              <button type="button" onClick={handleGoogleSignIn} className="w-full bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <GoogleIcon />
                <span>Continue with Google</span>
              </button>
            </form>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 mt-6 text-sm">
              <a href="#/login" className="text-blue-600 hover:underline p-[3px]">Already have an account? </a>
              <a href="#/" className="text-gray-600 hover:text-blue-600">Back to home</a>
            </div>
          </div>

          <div className="hidden md:block md:order-1 md:justify-self-start max-w-lg">
            <div className="grid grid-cols-2 gap-4 mt-[50px] mx-auto">
              <img src="https://picsum.photos/seed/cardsW/400/520" alt="Brand stationery" className="rounded-2xl shadow-xl object-cover w-full h-[173px]" />
              <img src="https://picsum.photos/seed/super/400/520" alt="Packaging" className="rounded-2xl shadow-xl object-cover w-full h-[170px] mr-[33px]" />
              <img src="https://picsum.photos/seed/nature/400/520" alt="Organic product" className="rounded-2xl shadow-xl object-cover w-full h-[165px]" />
              <img src="https://picsum.photos/seed/serial/400/520" alt="Bottle design" className="rounded-2xl shadow-xl object-cover w-full h-[163px] -mt-[1px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
