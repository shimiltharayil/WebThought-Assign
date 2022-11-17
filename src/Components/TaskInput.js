import React from "react";

export const TaskInput = () => {
  return (
    <div className="">
      <div className="lg:w-[461px] lg:h-[720px] mt-10 md:ml lg:ml-20 lg:mt-20 shadow-lg rounded-lg">
        <h1 className="bg-black text-white text-center mb-3 p-3">
          Task Heading 2
        </h1>
        <div className="relative border-[1px] border-l-0 border-r-0 border-gray p-3  border-solid">
          <p className="pl-10 font-semibold ">Thread A</p>
          {/* UPward Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6 absolute top-3  "
          >
            <path
              fillRule="evenodd"
              d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {/* SUB-2 */}
        <div className="flex flex-wrap md:flex-nowrap   p-5">
          <div className="relative bg-gray-200 shadow-md rounded-xl my-5 mx-10 md:my-0  md:mx-5 ">
            <h1 className="pl-2 pt-1 ">Sub Thread 1</h1>
            <input
              className="outline-none h-[80px] rounded-xl z-50 placeholder:absolute top-2 pl-2 pt-2"
              placeholder="Enter Text Here"
              type="text"
            />
          </div>
          <div className="relative bg-gray-200 shadow-md my-5 md:my-0 mx-10 md:mx-0 rounded-xl ">
            <h1 className="pl-2 pt-1 flex-grow ">Sub Thread 2</h1>
            <input
              className="outline-none h-[80px] rounded-xl z-50 placeholder:absolute top-2 pl-2 pt-2"
              placeholder="Enter Text Here"
              type="text"
            />
          </div>
        </div>
        <div className=" flex space-x-3 md:ml-16">
          {/* Light Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
            <path
              fillRule="evenodd"
              d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z"
              clipRule="evenodd"
            />
          </svg>
          {/* Message Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
              clipRule="evenodd"
            />
          </svg>

          <span className="flex shadow-lg w-36 rounded-lg p-1">
            <input
              className=" outline-none w-[120px] "
              placeholder="Select Category"
              type="text"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 rotate-180  "
            >
              <path
                fillRule="evenodd"
                d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className="flex shadow-lg w-36 rounded-lg p-1">
            <input
              className=" outline-none w-[120px] "
              placeholder="Select Process"
              type="text"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 rotate-180  "
            >
              <path
                fillRule="evenodd"
                d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>

        <button className="bg-blue-700 text-white m-10 p-2 rounded-lg">
          + Sub Thread
        </button>
        <div className="relative bg-gray-200 shadow-md rounded-xl mx-5 ">
          <h1 className="pl-2 pt-1 pb-1 ">Summary for Thread A</h1>
          <input
            className="outline-none h-[100px] w-full rounded-xl z-50 placeholder:absolute top-2 pl-2 pt-2"
            placeholder="Enter Text Here"
            type="text"
          />
          </div>
          <span className="flex shadow-lg w-36 rounded-lg p-1 ml-36 sm:ml-40 lg:ml-64 mt-5 ">
            <input
              className=" outline-none w-[120px] "
              placeholder="Select Emotion"
              type="text"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 rotate-180  "
            >
              <path
                fillRule="evenodd"
                d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <button className="bg-blue-700 text-white m-10 p-2 ml-28 sm:ml-40 lg:ml-64 right-2 rounded-lg text-xl">
            + New Thread
          </button>
      </div>
    </div>
  );
};
