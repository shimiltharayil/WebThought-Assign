import React from 'react'

export const Header = () => {
  return (
    <header className="sticky shadow-lg top-0 grid grid-cols-2">
      <div className="pl-1 pt-3 pb-3 md:pt-5 md:pl-10 md:pb-5">
        <img
          className="cursor-pointer"
          src="https://deepthought.education/assets/images/logo/logo.svg"
          alt=""
        />
      </div>
      <div className="flex justify-center md:justify-end">
        <div className="flex p-3 space-x-3 md:p-5 ">
          {/* Home  */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-8 w-8 p-1 md:h-10 md:w-10 md:p-1 text-white bg-blue-700 rounded-full cursor-pointer"
          >
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>

          {/* TOOLS */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="hidden sm:inline-flex sm:h-8 sm:w-8 sm:p-1 md:h-10 md:w-10 md:p-1 text-white bg-blue-700 rounded-full cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
              clipRule="evenodd"
            />
            <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
            <path
              fillRule="evenodd"
              d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>

          {/* BELL */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" hidden sm:inline-flex sm:h-8 sm:w-8 sm:p-1 md:h-10 md:w-10 md:p-1 text-white bg-blue-700 rounded-full cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
          {/* USer */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 p-1 md:h-10 md:w-10 md:p-1 text-white bg-blue-700 rounded-full cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            />
          </svg>
          {/* dot */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 p-1 md:h-10 md:w-10 md:p-1 text-blue-700 rounded-full cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}
