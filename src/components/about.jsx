import React from 'react'

export default function about() {
    return (
        <div className="bg-stone-900 text-white mb-10">
            <div className="text-center">
                <h2 className="text-3xl py-6 ">ABOUT ME</h2>
                <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aut pariatur ut eveniet amet totam tempore</p>
            </div>
            <div className="flex grid-cols-2 ml-5 py-10">
                <div className="">
                    <h3 className="text-3xl py-6">Get To Know Me</h3>
                    <p className="text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere repellat animi exercitationem a praesentium aliquam. Dicta maxime maiores libero nesciunt dolor laborum ullam minima debitis alias, quisquam rem sint pariatur</p>
                </div>
                <div>
                    <h3 className="text-2xl gap-11 py-6">Skills</h3>

                    <button type="button" class="text-black bg-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">HTML</button>
                    <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">CSS</button>
                    <button type="button" class="text-black bg-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Javascript</button>
                    <button type="button" class="text-black bg-white focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">React</button>
                    <button type="button" class="focus:outline-none text-black bg-white  focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Github</button>
                    <button type="button" class="focus:outline-none text-black bg-white  focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Tailwind</button>
                    <button type="button" class="focus:outline-none text-black bg-white  focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Figma</button>
                    <button type="button" class="focus:outline-none text-black bg-white  focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Render</button>

                </div>
            </div>

        </div>
    )
}
