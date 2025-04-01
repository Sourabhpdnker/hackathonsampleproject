import React, { useState } from "react";

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className={`relative w-96 h-[500px] bg-black shadow-lg shadow-cyan-400 rounded-2xl p-10 overflow-hidden transition-transform duration-500 ${isSignUp ? 'translate-y-full' : ''}`}>
        {!isSignUp ? (
          <div className="absolute inset-0 flex flex-col justify-center items-center transition-transform duration-500">
            <h2 className="text-2xl text-white text-center">Login</h2>
            <div className="relative mt-6 border-b-2 border-white w-full">
              <input type="text" required className="w-full bg-transparent text-white outline-none py-2 px-1" placeholder="Username" />
            </div>
            <div className="relative mt-6 border-b-2 border-white w-full">
              <input type="password" required className="w-full bg-transparent text-white outline-none py-2 px-1" placeholder="Password" />
            </div>
            <div className="mt-4">
              <label className="text-white text-sm">
                <input type="checkbox" className="accent-cyan-400 mr-2" /> Remember me
              </label>
            </div>
            <button className="mt-6 w-full bg-cyan-400 text-black font-medium py-2 rounded-full">Login</button>
            <p className="text-white text-sm mt-4">
              Don't have an account? <span className="text-cyan-400 cursor-pointer" onClick={() => setIsSignUp(true)}>Sign Up</span>
            </p>
          </div>
        ) : (
          <div className="absolute inset-0 flex flex-col justify-center items-center transition-transform duration-500">
            <h2 className="text-2xl text-white text-center">Sign Up</h2>
            <div className="relative mt-6 border-b-2 border-white w-full">
              <input type="text" required className="w-full bg-transparent text-white outline-none py-2 px-1" placeholder="Username" />
            </div>
            <div className="relative mt-6 border-b-2 border-white w-full">
              <input type="email" required className="w-full bg-transparent text-white outline-none py-2 px-1" placeholder="Email" />
            </div>
            <div className="relative mt-6 border-b-2 border-white w-full">
              <input type="password" required className="w-full bg-transparent text-white outline-none py-2 px-1" placeholder="Password" />
            </div>
            <div className="mt-4">
              <label className="text-white text-sm">
                <input type="checkbox" className="accent-cyan-400 mr-2" /> I agree to the terms & conditions
              </label>
            </div>
            <button className="mt-6 w-full bg-cyan-400 text-black font-medium py-2 rounded-full">Sign Up</button>
            <p className="text-white text-sm mt-4">
              Already have an account? <span className="text-cyan-400 cursor-pointer" onClick={() => setIsSignUp(false)}>Sign In</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthForm;