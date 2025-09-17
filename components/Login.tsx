import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.hash = '/';
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto md:ml-auto md:mr-5 w-full md:max-w-[1230px] px-4 md:px-6 py-12 flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-2 gap-12 items-center justify-center md:my-5 md:mx-auto md:px-5">
          <div className="max-w-xl w-full mx-auto md:mx-0 md:order-2 md:mr-5">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome back</h1>
            <p className="text-gray-600 mb-8">Login to continue creating stunning logos with AI.</p>

            <form onSubmit={onSubmit} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
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
                  placeholder="••••••••"
                  required
                />
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Login
              </button>
            </form>

            <div className="flex items-center justify-between mt-6 text-sm">
              <a href="#/signup" className="text-blue-600 hover:underline p-[3px]">Create an account</a>
              <a href="#/" className="text-gray-600 hover:text-blue-600">Back to home</a>
            </div>
          </div>

          <div className="hidden md:block md:order-1 md:justify-self-start max-w-lg">
            <div className="grid grid-cols-2 gap-4 mt-[50px] mx-auto">
              <img src="https://picsum.photos/seed/fashion/400/520" alt="Fashion brand" className="rounded-2xl shadow-xl object-cover w-full h-[173px]" />
              <img src="https://picsum.photos/seed/cardsB/400/520" alt="Business cards" className="rounded-2xl shadow-xl object-cover w-full h-[170px] mr-[33px]" />
              <img src="https://picsum.photos/seed/organic/400/520" alt="Organic product" className="rounded-2xl shadow-xl object-cover w-full h-[165px]" />
              <img src="https://picsum.photos/seed/serum/400/520" alt="Serum bottle" className="rounded-2xl shadow-xl object-cover w-full h-[163px] -mt-[1px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
