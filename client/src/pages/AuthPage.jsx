import { useState } from 'react'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-red-500 to-pink-500 p-4">
      <div className="w-full max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-white mb-8">
          { isLogin ? "Sign in to Swipe" : "Create a swipe acount" }
        </h2>

        <div className="bg-white shadow-xl rounded-lg p-8">
          {isLogin ? <LoginForm /> : <SignUpForm />}

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              {isLogin ? "New to swipe ?" : "already have an account ?"}
            </p>

            <button className="mt-2 text-red-600 hover:text-red-800 font-medium transition-colors duration-300" onClick={() => setIsLogin((prev) => !prev)}>
            {isLogin ? "Create a new account" : "Sign in to your account"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPage