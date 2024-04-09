import React from 'react'

export default function about() {
    return (
        <div>
            <div className="sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 bg-zinc-300 text-black">
            <div className="text-center">
                <h2 className="text-3xl py-8 font-bold text-lime-700">About Me</h2>
                <p className="text-1xl w-6/6 mx-96">
                    Acknowledging the ever-growing significance of technology in contemporary society, I am compelled to
                    embark on a new challenge of pursuing a Web Development program. This decision serves as a pivotal step
                    towards establishing myself in the dynamic space of technology. I am enthusiastic about embracing this
                    opportunity and eagerly anticipate a rewarding career progress within the tech industry.
                </p>
            </div>
            <div>
                <h3 className="text-3xl gap-11 py-6 font-bold text-lime-700 text-center mt-10">Skills</h3>
                <div className="w-4/12 mx-96 pb-32 space-y-8" >
                    <button type="button" class="text-black bg-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 py-6">HTML</button>
                    <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 py-6">CSS</button>
                    <button type="button" class="text-black bg-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 py-6">Javascript</button>
                    <button type="button" class="text-black bg-white focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 py-6">React</button>
                    <button type="button" class="focus:outline-none text-black bg-white  focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 py-6">Github</button>
                    <button type="button" class="focus:outline-none text-black bg-white  focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 py-6">Tailwind</button>
                    <button type="button" class="focus:outline-none text-black bg-white  focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 py-6">Figma</button>
                    <button type="button" class="focus:outline-none text-black bg-white  focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 py-6">Vercel</button>
                    <button type="button" class="focus:outline-none text-black bg-white  focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 py-6">Jira</button>

                </div>

            </div>
            </div>
        </div>

    )
}
