const AuthModal = () => {
    return (
        <div className='w-full max-w-md transform rounded-3xl bg-white bg-opacity-10 p-8 shadow-2xl backdrop-blur-lg transition-all duration-300 absolute top-[50%]'>
            <h2 className='mb-6 animate-pulse text-center text-4xl font-extrabold text-white'>
                Sign Up
            </h2>
            <form className='space-y-6'>
                <div className='input-field relative'>
                    <input
                        type='text'
                        id='name'
                        required
                        className='w-full rounded-lg bg-white bg-opacity-20 px-4 py-3 text-white placeholder-gray-200 transition duration-200 focus:bg-opacity-30 focus:ring-2 focus:ring-purple-300'
                        placeholder='Full Name'
                    />
                    <i className='fas fa-user absolute right-3 top-3 text-white'></i>
                </div>
                <div className='input-field relative'>
                    <input
                        type='email'
                        id='email'
                        required
                        className='w-full rounded-lg bg-white bg-opacity-20 px-4 py-3 text-white placeholder-gray-200 transition duration-200 focus:bg-opacity-30 focus:ring-2 focus:ring-purple-300'
                        placeholder='Email Address'
                    />
                    <i className='fas fa-envelope absolute right-3 top-3 text-white'></i>
                </div>
                <div className='input-field relative'>
                    <input
                        type='password'
                        id='password'
                        required
                        className='w-full rounded-lg bg-white bg-opacity-20 px-4 py-3 text-white placeholder-gray-200 transition duration-200 focus:bg-opacity-30 focus:ring-2 focus:ring-purple-300'
                        placeholder='Password'
                    />
                    <i className='fas fa-lock absolute right-3 top-3 text-white'></i>
                </div>
                <button
                    type='submit'
                    className='w-full transform rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-3 font-bold text-white transition duration-300 hover:scale-105 hover:opacity-90 focus:ring-4 focus:ring-purple-300'
                >
                    Sign Up
                    <i className='fas fa-arrow-right ml-2'></i>
                </button>
            </form>
            <p className='mt-6 text-center text-white'>
                Already have an account?
                <a href='#' className='font-bold hover:underline'>
                    Log in
                </a>
            </p>
            <div className='mt-8 flex justify-center space-x-4'>
                <a
                    href='#'
                    className='text-white transition-colors duration-200 hover:text-purple-300'
                >
                    <i className='fab fa-facebook-f text-2xl'></i>
                </a>
                <a
                    href='#'
                    className='text-white transition-colors duration-200 hover:text-purple-300'
                >
                    <i className='fab fa-twitter text-2xl'></i>
                </a>
                <a
                    href='#'
                    className='text-white transition-colors duration-200 hover:text-purple-300'
                >
                    <i className='fab fa-google text-2xl'></i>
                </a>
            </div>
        </div>
    )
}
export default AuthModal
