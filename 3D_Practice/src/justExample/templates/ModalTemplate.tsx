export const ModalTemplate = () =>{
    return (
        <main className=" w-full h-full">
          <div className="z-50 w-[582px]">
            <div className="grid w-full justify-center items-center pt-20 px-10 bg-white rounded-lg ">
              <h4 className="font-semibold mb-16 w-full text-center text-3xl">
                Forgot Password ?
              </h4>
              <p className="w-full px-8 mb-16">
                Don't worry, enter your account's email address and we will send
                you a link to reset your password.
              </p>
              <form className="w-full">
                <div className="mb-8 w-full">
                  <p className="mb-5">Email address</p>
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    className="border w-full rounded-lg pl-4 py-4"
                  />
                </div>
                <button className="w-full rounded-lg text-center py-4  text-white bg-[#013D84]">
                  Send reset link
                </button>
                <div className="mt-12 flex justify-center mb-16">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.75 11.25H20.75C20.9489 11.25 21.1397 11.329 21.2803 11.4697C21.421 11.6103 21.5 11.8011 21.5 12C21.5 12.1989 21.421 12.3897 21.2803 12.5303C21.1397 12.671 20.9489 12.75 20.75 12.75H5.75C5.55109 12.75 5.36032 12.671 5.21967 12.5303C5.07902 12.3897 5 12.1989 5 12C5 11.8011 5.07902 11.6103 5.21967 11.4697C5.36032 11.329 5.55109 11.25 5.75 11.25Z"
                      fill="#557DAD"
                    />
                    <path
                      d="M6.0605 12L12.281 18.219C12.4218 18.3598 12.5009 18.5508 12.5009 18.75C12.5009 18.9491 12.4218 19.1401 12.281 19.281C12.1402 19.4218 11.9492 19.5009 11.75 19.5009C11.5508 19.5009 11.3598 19.4218 11.219 19.281L4.469 12.531C4.39915 12.4613 4.34374 12.3785 4.30593 12.2874C4.26812 12.1963 4.24866 12.0986 4.24866 12C4.24866 11.9013 4.26812 11.8036 4.30593 11.7125C4.34374 11.6214 4.39915 11.5386 4.469 11.469L11.219 4.71897C11.3598 4.57814 11.5508 4.49902 11.75 4.49902C11.9492 4.49902 12.1402 4.57814 12.281 4.71897C12.4218 4.8598 12.5009 5.05081 12.5009 5.24997C12.5009 5.44913 12.4218 5.64014 12.281 5.78097L6.0605 12Z"
                      fill="#557DAD"
                    />
                  </svg>
                  <span className="text-[#557DAD] font-semibold">Return to login</span>
                </div>
              </form>
            </div>
          </div>
        
      </main>
    )
}