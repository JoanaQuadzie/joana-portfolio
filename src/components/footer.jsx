import React from 'react'

export default function footer() {
  return (
    
    <footer className="bg-black py-4 text-center text-amber-500 relative">
    <h1 className="mb-2 text-xl font-semibold">Joana Nornor-Quadzie</h1>
    <p className="mb-2">Junior Developer</p>
    <p className="mb-2">joanaq03@gmail.com.com</p>
    <div className="flex justify-center space-x-3 mb-5">
        <a href="https://github.com/johndoe" className="text-gray-300 hover:text-white">GitHub</a>
        <a href="https://linkedin.com/in/johndoe" className="text-gray-300 hover:text-white">LinkedIn</a>
        <a href="https://twitter.com/johndoe" className="text-gray-300 hover:text-white">Twitter</a>
    </div>
</footer>
  )
}
