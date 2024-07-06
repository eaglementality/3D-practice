
export const ResetForm = () => {
  return (
    <div className="z-50 w-[510px]">
      <div className="grid w-full justify-center items-center pt-20 px-10 bg-white rounded-lg ">
        <h4 className="font-semibold mb-5 w-full text-center text-3xl">
          Reset your password
        </h4>
        <p className="w-full text-gray-500 px-8 mb-16">
          Almost done. Enter your password and you're good to go.
        </p>
        <form className="w-full">
          <div className="mb-6 w-full">
            <h6 className="mb-5 text-gray-800 text-md ">New password</h6>
            <input
              type="password"
              placeholder="Enter new password"
              className="border w-full rounded-lg pl-4 py-4"
            />
          </div>
          <div className="grid gap-y-2 mb-12 text-gray-400 text-md">
            <ul className="flex justify-between">
              <li>. Lowercase characters</li>
              <li>. Uppercase characters</li>
            </ul>
            <ul className="flex justify-between">
              <li>. Numbers</li>
              <li>. 14 characters minimum</li>
            </ul>
          </div>

          <div className="mb-6 w-full">
            <p className="mb-5  text-gray-800 text-md">Confirm password</p>
            <input
              type="password"
              placeholder="Enter new password"
              className="border w-full rounded-lg pl-4 py-4"
            />
          </div>
          <button className=" mb-16 w-full rounded-lg text-center py-4 font-semibold text-white bg-[#013D84]">
            Reset password
          </button>
        </form>
      </div>
    </div>
  );
};
