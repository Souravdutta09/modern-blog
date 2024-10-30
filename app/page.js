
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from 'react';

import Hero from "./components/Hero";





export default function Home() {


  return (
    <main>
      <Hero/>
 




<section className="py-12 relative bg-gray-100 dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Pricing Plans</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Choose the plan that suits you best</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Basic Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Basic</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">$10/month</p>
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400"><s>10GB Storage</s></li>
            <li className="text-gray-600 dark:text-gray-400"><s>Basic Support</s></li>
            <li className="text-gray-600 dark:text-gray-400"><s>Single User</s></li>
            <li className="text-gray-600 dark:text-gray-400">Community Access</li>
            <li className="text-gray-600 dark:text-gray-400">Weekly Updates</li>
          </ul>
          <Button className="mx-1" variant="outline">Choose Plan</Button>
        </div>
      </div>
      {/* Standard Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-500">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Standard</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">$20/month</p>
          <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">Bestseller</span>
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400">50GB Storage</li>
            <li className="text-gray-600 dark:text-gray-400">Priority Support</li>
            <li className="text-gray-600 dark:text-gray-400">Up to 5 Users</li>
            <li className="text-gray-600 dark:text-gray-400">Community Access</li>
            <li className="text-gray-600 dark:text-gray-400">Daily Updates</li>
          </ul>
          <Button className="mx-1" variant="outline">Choose Plan</Button>
        </div>
      </div>
      {/* Premium Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Premium</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">$30/month</p>
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400">200GB Storage</li>
            <li className="text-gray-600 dark:text-gray-400">24/7 Support</li>
            <li className="text-gray-600 dark:text-gray-400">Unlimited Users</li>
            <li className="text-gray-600 dark:text-gray-400">Community Access</li>
            <li className="text-gray-600 dark:text-gray-400">Real-time Updates</li>
          </ul>
          <Button className="mx-1" variant="outline">Choose Plan</Button>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="py-12 bg-gray-100 dark:bg-gray-900" >
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-semibold text-gray-800 dark:text-gray-100">Top Blogs</h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Explore our most popular blog posts.</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Blog Post 1 */}
      <div className="w-full max-w-sm mx-4 my-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
        <img src="https://www.billboard.com/wp-content/uploads/2024/08/selena-gomez-benny-blanco-lakers-heat-2024-billboard-1548.jpg?w=942&h=623&crop=1" alt="Blog 1" className="w-full h-48 object-cover rounded-t-lg" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Skeletons, Swifties & Sazeracs: Here&apos;s What Happened When</h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Wednesday (Oct. 23) evening in New Orleans, a white SUV tentatively peeks around the corner of Chartres Street in the French Quarter. Though Taylor Swift&apos;s &ldquo;Fearless&ldquo; </p>
            <Button className="mx-1  mb-0" variant="outline">Read More</Button>
        </div>
      </div>
      {/* Blog Post 2 */}
      <div className="w-full max-w-sm mx-4 my-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
        <img src="https://i0.wp.com/brignews.com/wp-content/uploads/2024/10/venomLastDance.webp?fit=1200%2C675&ssl=1" alt="Blog 2" className="w-full h-48 object-cover rounded-t-lg" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">&apos;Venom: The Last Dance&apos;: First Reactions After the Premiere</h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300">The third and final installment in Sony&apos;s Tom Hardy-led &apos;Venom&apos; franchise hits theaters Oct.25.No one ever expected Venom to be a blockbuster movie franchise,butThe third and final</p>
            <Button className="mx-1 mb-0" variant="outline">Read More</Button>  
        </div>
      </div>
      {/* Blog Post 3 */}
      <div className="w-full max-w-sm mx-4 my-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
        <img src="https://img-cdn.thepublive.com/fit-in/640x430/filters:format(webp)/indianstartupnews/media/media_files/WOejLI1Zdbyigoottf7w.jpg" alt="Blog 3" className="w-full h-48 object-cover rounded-t-lg" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Swiggy sets IPO price band between Rs 371-390 per share</h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300">The much-awaited IPO is a combination of fresh issuance of equity shares worth Rs 4,499 crore and an offer-for-sale of 17.5 crore equity shares by several existing shareholders, as per the RHP
          </p>
     <div className="pt-2">
  
            <Button className="mx-1 mb-0" variant="outline">Read More</Button></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="py-12 bg-white dark:bg-gray-800">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-semibold text-gray-800 dark:text-gray-100">Client Reviews</h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Hear what our clients have to say about us.</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Review 1 */}
      <div className="w-full max-w-md mx-4 my-4 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg p-6">
        <p className="text-lg text-gray-700 dark:text-gray-300">&ldquo;This company provided excellent service and support. Highly recommend!&ldquo;</p>
        <div className="mt-4">
          <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Somojit Dutta</h4>
          <p className="text-gray-600 dark:text-gray-400">CA, UBS</p>
        </div>
      </div>
      {/* Review 2 */}
      <div className="w-full max-w-md mx-4 my-4 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg p-6">
        <p className="text-lg text-gray-700 dark:text-gray-300">&ldquo;A wonderful experience from start to finish. Their team is top-notch.&ldquo;</p>
        <div className="mt-4">
          <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Ranjit kumar Dutta</h4>
          <p className="text-gray-600 dark:text-gray-400">Founder, Bijoy Engineering Works, Spark Chemicals</p>
        </div>
      </div>
      {/* Review 3 */}
      <div className="w-full max-w-md mx-4 my-4 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg p-6">
        <p className="text-lg text-gray-700 dark:text-gray-300">&ldquo;Their attention to detail and customer service is unparalleled.&ldquo;</p>
        <div className="mt-4">
          <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Alok Kumar Dutta</h4>
          <p className="text-gray-600 dark:text-gray-400">Founder, Investment Advisior, mutual fund distributor</p>
        </div>
      </div>
    </div>
  </div>
</section>
    
    </main>
  );
}
