import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-gray-900">
    <div class="container mx-auto py-8 px-4 flex flex-wrap justify-between">
      <div class="w-full lg:w-1/3 mb-8 lg:mb-0">
        <h2 class="text-2xl font-bold text-white mb-4">Quick Links</h2>
        <ul class="list-none">
          <li><a href="/" class="text-gray-400 hover:text-white">Home</a></li>
          <li><a href="/" class="text-gray-400 hover:text-white">About Us</a></li>
          <li><a href="/" class="text-gray-400 hover:text-white">Services</a></li>
          <li><a href="/" class="text-gray-400 hover:text-white">Portfolio</a></li>
          <li><a href="/" class="text-gray-400 hover:text-white">Contact Us</a></li>
        </ul>
      </div>
      <div class="w-full lg:w-1/3 mb-8 lg:mb-0">
        <h2 class="text-2xl font-bold text-white mb-4">Quick Contact</h2>
        <ul class="list-none">
          <li><a href="/" class="text-gray-400 hover:text-white">Email Us</a></li>
          <li><a href="/" class="text-gray-400 hover:text-white">Call Us</a></li>
          <li><a href="/" class="text-gray-400 hover:text-white">Chat with Us</a></li>
        </ul>
      </div>
      <div class="w-full lg:w-1/3 mb-8 lg:mb-0">
        <h2 class="text-2xl font-bold text-white mb-4">Contact Us</h2>
        <ul class="list-none">
          <li><span class="text-gray-400">78742</span></li>
          <li><span class="text-gray-400">qwe12</span></li>
          <li><span class="text-gray-400">qwerty</span></li>
          <li><span class="text-gray-400">info@example.com</span></li>
          <li><span class="text-gray-400">789456</span></li>
        </ul>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer