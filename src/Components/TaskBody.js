import React from 'react'

export const TaskBody = () => {
  return (
    <div className="lg:w-[461px] lg:h-[320px] mt-10 md:ml lg:ml-20 lg:mt-20 shadow-lg rounded-lg">
      <h1 className="bg-black text-white text-center p-3">Task Heading 1</h1>
      <div className="relative">
        <p className="m-5 pb-5 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta magni
          quam debitis explicabo facilis totam adipisci labore suscipit culpa
          error enim, impedit optio itaque dolore.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Perferendis molestiae, reprehenderit
          fuga vitae praesentium magni accusantium a architecto similique natus
          nam quis, sunt, odio totam consectetur. Veritatis assumenda quibusdam
          magni?
        </p>
        {/* Down  */}
        <button className="absolute right-9 bottom-1 hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 "
          >
            <path
              fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
