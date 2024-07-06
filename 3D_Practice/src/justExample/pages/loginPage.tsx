import loginBg from '../justExample/logINBgImage.png';
export const LoginPage = () => {
  return (
    <main className=" w-full h-full">
      <header className=" border w-full py-6 pl-12 bg-white">
        <h4 className="text-[#013D84] text-3xl font-bold">LOGO</h4>
      </header>
      <img src={loginBg} className='w-full h-screen'/>
      <section className='absolute top-[8.5%] bg-black bg-opacity-25 h-full w-full flex justify-center items-center py-40 px-32' >
        <div className=" z-50  flex  w-full justify-center ">
          <div className="grid w-full justify-center items-center py-16 px-10 bg-white rounded-lg ">
            <h4 className='font-semibold mb-16 w-full text-center text-3xl'>Sign In</h4>
            <form className='w-full'>
              <div className='mb-8 w-full'>
                <p className='mb-5'>Email address</p>
                <input type="text" placeholder="Enter your email address" className="border w-full rounded-lg pl-4 py-4" />
              </div>
              <div className='mb-12 w-ful'>
                <p className='mb-5'>Password</p>
                <input type="password" placeholder="Enter your password" className="border w-full rounded-lg pl-4 py-4" />
              </div>
              <button className="w-full rounded-lg px-56 py-4 text-center text-white bg-[#013D84]">
                Sign in
              </button>
            </form>
          </div>
          <div className="bg-[#013D84] w-full py-16 px-10 rounded-lg">
            <h4 className='font-semibold mb-5 w-full text-white text-center text-3xl'>Forgot Password?</h4>
            <p className='w-full text-white text-md px-8 mb-20'>
              Click the "forget password button" below to enter your email
              address to recieve a password reset link
            </p>
            <button className='w-full text-center py-4 px-40 text-[#013D84] mb-5 bg-white rounded-lg'>Forgot password</button>
            <div className="flex text-center justify-center space-x-1">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 0.5C4.986 0.5 0.5 4.986 0.5 10.5V14.643C0.5 15.667 1.397 16.5 2.5 16.5H3.5C3.76522 16.5 4.01957 16.3946 4.20711 16.2071C4.39464 16.0196 4.5 15.7652 4.5 15.5V10.357C4.5 10.0918 4.39464 9.83743 4.20711 9.64989C4.01957 9.46236 3.76522 9.357 3.5 9.357H2.592C3.148 5.487 6.478 2.5 10.5 2.5C14.522 2.5 17.852 5.487 18.408 9.357H17.5C17.2348 9.357 16.9804 9.46236 16.7929 9.64989C16.6054 9.83743 16.5 10.0918 16.5 10.357V16.5C16.5 17.603 15.603 18.5 14.5 18.5H12.5V17.5H8.5V20.5H14.5C16.706 20.5 18.5 18.706 18.5 16.5C19.603 16.5 20.5 15.667 20.5 14.643V10.5C20.5 4.986 16.014 0.5 10.5 0.5Z"
                  fill="white"
                />
              </svg>
              <span className="text-white">Contact our support</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
