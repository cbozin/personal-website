'use client'

import React, { useState } from 'react'
import { Button } from '@/components/button'
import { HeroHeader } from './header'
import { ResumeModal } from './resume-modal'
import { smoothScrollTo } from '@/utils/scroll'
import LogoCloud from './logo-cloud'


export default function HeroSection() {
    const [isResumeOpen, setIsResumeOpen] = useState(false)
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className=" mt-25 pb-24 pt-12 md:pb-32 lg:pb-40 lg:pt-32"> 
                        <div className="mx-auto max-w-4xl px-6 text-center"> 
                            <h1 className="mt-8 text-balance text-5xl font-medium md:text-6xl xl:text-7xl">
                                Hi, I&apos;m Carolyn.
                            </h1>
                            <p className="mt-8 text-pretty text-lg mx-auto max-w-2xl"> 
                                I build data-driven solutions, from full-stack apps to AI/ML pipelines using Python, GCP, and modern web stacks.
                                Passionate about turning raw data into actionable insights and scalable systems.
                            </p>
                            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"> 
                                <Button
                                    size="lg"
                                    className="px-8 text-base"
                                    onClick={() => setIsResumeOpen(true)}
                                >
                                    View my Resume
                                </Button>
                                <Button
                                    size="lg"
                                    variant="ghost"
                                    className="px-8 text-base"
                                    onClick = {(e) => {
                                        e.preventDefault();
                                        smoothScrollTo('contact');
                                    }}
                                >
                                    Contact Me
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                <LogoCloud/>
                <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
            </main>
        </>
    )
}
