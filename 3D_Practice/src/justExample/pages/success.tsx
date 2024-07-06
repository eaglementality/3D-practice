import loginBg from ".././logINBgImage.png";
export const SuccessForm = () => {
  return (
    <main className=" w-full h-full">
      <header className=" border w-full py-6 pl-12 bg-white">
        <h4 className="text-[#013D84] text-3xl font-bold">LOGO</h4>
      </header>
      <img src={loginBg} className="w-full h-screen" />
      <section className="absolute top-[8.5%] bg-black bg-opacity-25 h-full w-full flex justify-center items-center py-40 px-32">
        <div className="z-50 w-[510px]">
          <div className="grid w-full justify-center items-center pt-20 px-10 bg-white rounded-lg ">
            <svg
              width="101"
              height="100"
              viewBox="0 0 101 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-48 mb-10"
            >
              <rect
                x="0.5"
                width="100"
                height="100"
                rx="20"
                fill="#7BFF78"
                fill-opacity="0.1"
              />
              <mask
                id="mask0_3061_16287"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="29"
                y="28"
                width="43"
                height="44"
              >
                <path
                  d="M50.5 29.1665L55.9719 33.1582L62.7458 33.1457L64.826 39.5915L70.3135 43.5623L68.2083 49.9998L70.3135 56.4373L64.826 60.4082L62.7458 66.854L55.9719 66.8415L50.5 70.8332L45.0281 66.8415L38.2542 66.854L36.174 60.4082L30.6865 56.4373L32.7917 49.9998L30.6865 43.5623L36.174 39.5915L38.2542 33.1457L45.0281 33.1582L50.5 29.1665Z"
                  fill="white"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M43.2083 49.9998L48.4166 55.2082L58.8333 44.7915"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </mask>
              <g mask="url(#mask0_3061_16287)">
                <path d="M25.5 25H75.5V75H25.5V25Z" fill="#1A9E18" />
              </g>
            </svg>
            <h4 className="font-semibold mb-5 w-full text-center text-3xl">
              Success!
            </h4>
            <p className="w-full text-center text-gray-500 px-8 mb-16">
              Your password has been updated and secure. you can now login again
            </p>

            <button className=" mb-16 w-full rounded-lg text-center py-4 font-semibold text-white bg-[#013D84]">
              Return to login
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
