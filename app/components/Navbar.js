"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
    SheetFooter,
} from "@/components/ui/sheet"
import { ModeToggle } from '@/components/theme-btn'
import LoadingBar from 'react-top-loading-bar'
import { usePathname } from 'next/navigation'


const Navbar = () => {
    const [progress, setProgress] = useState(0);
    const pathname = usePathname();
    const [sheetTrigger, setSheetTrigger] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setProgress(30)
        }, 100);
        setTimeout(() => {
            setProgress(70)
        }, 400);
        setTimeout(() => {
            setProgress(100)
        }, 700);
    }, [pathname]);

    useEffect(() => {
        setTimeout(() => {
            setProgress(0)
        }, 900);
    }, []);

    return (
        <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-20">
            <LoadingBar
                color='#0000FF'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <div className="container mx-auto flex justify-around items-center">
                <Link href={"/"}>
                    <div className="flex gap-1 items-center max-w-6xl text-lg font-bold">
                        <span> <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" /></span>
                        <span>DuttaBlog</span>
                    </div>
                </Link>
                <div className="hidden md:flex space-x-4 items-center">
                    <Link href="/" className="hover:scale-105 hover:font-semibold transition-transform duration-300"> Home
                    </Link>
                    <Link href="/about" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
                        About
                    </Link>
                    <Link href="/blog" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
                        Blog
                    </Link>
                    <Link href="/contact" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
                        Contact
                    </Link>
                    <div className='flex items-center'>
                        <Button className="mx-1" variant="outline">Login</Button>
                        <Button className="mx-1" variant="outline">Signup</Button>
                        <ModeToggle />
                    </div>
                </div>

                <div className="md:hidden">
                    <span className="mx-2">
                        <ModeToggle />
                    </span>
                    <Sheet open={sheetTrigger} onOpenChange={setSheetTrigger}>
                        <SheetTrigger asChild>
                            <button onClick={() => setSheetTrigger(!sheetTrigger)}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            </button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="font-bold my-4">DuttaBlog</SheetTitle>
                                <SheetDescription>
                                    <div className="flex flex-col gap-6">
                                        <Link href="/" onClick={() => setSheetTrigger(false)}>
                                            Home
                                        </Link>
                                        <Link href="/about" onClick={() => setSheetTrigger(false)}>
                                            About
                                        </Link>
                                        <Link href="/blog" onClick={() => setSheetTrigger(false)}>
                                            Blog
                                        </Link>
                                        <Link href="/contact" onClick={() => setSheetTrigger(false)}>
                                            Contact
                                        </Link>
                                        <div>
                                            <Button className="mx-1 text-xs" variant="outline" onClick={() => setSheetTrigger(false)}>Login</Button>
                                            <Button className="mx-1 text-xs" variant="outline" onClick={() => setSheetTrigger(false)}>Signup</Button>
                                        </div>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}

export default Navbar