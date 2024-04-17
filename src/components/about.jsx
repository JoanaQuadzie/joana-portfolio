import React from 'react'

export default function about() {
    return (
        <div>
            <div id="about" className=" md:grid-cols-2 lg:grid-cols-1 bg-zinc-300 text-black">
            <div className="text-center">
                <h2 className="md:text-3xl py-8 font-bold text-lime-700">About Me</h2>
                <p className=" p-4 text-1xl md:w-6/6 md:mx-96">
                    Acknowledging the ever-growing significance of technology in contemporary society, I am compelled to
                    embark on a new challenge of pursuing a Web Development program. This decision serves as a pivotal step
                    towards establishing myself in the dynamic space of technology. I am enthusiastic about embracing this
                    opportunity and eagerly anticipate a rewarding career progress within the tech industry.
                </p>
            </div>
            <div>
                <h3 className="text-3xl gap-11 py-6 font-bold text-lime-700 text-center mt-10">Skills</h3>
                <div className="w-4/12 mx-96 pb-32 space-y-8" >
                    <button type="button" class="text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 py-6">HTML</button>
                    <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium bg-white rounded-lg py-6">CSS</button>
                    <button type="button" class="text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 py-6">Javascript</button>
                    <button type="button" class="text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 py-6">React</button>
                    <button type="button" class="text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 py-6">Github</button>
                    <button type="button" class="text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 py-6">Tailwind</button>
                    <button type="button" class="text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 py-6">Figma</button>
                    <button type="button" class="text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 py-6">Vercel</button>
                    <button type="button" class="text-black bg-white font-medium rounded-1g text-sm px-5 py-2.5 me-2 mb-2 py-6">Jira</button>

                </div>

            </div>
            </div>
        </div>

    )
}
