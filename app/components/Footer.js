// components/Footer.js
"use client"
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-200 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 text-center md:text-left">
                        <h2 className="text-xl font-semibold">DuttaBlog</h2>
                        <p className="text-sm font-sans text-gray-400">© 2024 DuttaRoy blog | All rights reserved.</p>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center md:text-left">
                    
                        <Link href="/privacy"
                            className="hover:text-primary ">Privacy Policy
                        </Link>
                        <Link href="/terms"
                            className="hover:text-primary">Terms of Service
                        </Link>
                    </div>
                    <div className="flex space-x-4 mt-4 md:mt-0 justify-center md:justify-start">
                        <a href="https://www.facebook.com/sourav.dutta.14811692" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-2 rounded-full border-2 border-blue-600 hover:scale-125 transition-transform duration-300 flex items-center justify-center w-10 h-10">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>

                        <a href="https://x.com/SouravD72638615" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border-2 border-gray-500 hover:scale-125 transition-transform duration-300 flex items-center justify-center w-10 h-10">
                            <FontAwesomeIcon icon={faXTwitter} />
                        </a>
                        <a href="https://www.instagram.com/sourav._.9sd/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#515BD4] hover:scale-125 transition-transform duration-300 flex items-center justify-center w-10 h-10">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="www.linkedin.com/in/sourav-dutta-195934237" target="_blank" rel="noopener noreferrer" className="hover:text-primary bg-blue-600 hover:text-white p-2 rounded-full border-2 border-blue-600 hover:scale-125 transition-transform duration-300 flex items-center justify-center w-10 h-10">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}