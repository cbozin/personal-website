'use client'

import React, { useState } from 'react'
import { Button } from '@/components/button'
import Image from 'next/image'
import { HeroHeader } from './header'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { ResumeModal } from './resume-modal'
import { smoothScrollTo } from '@/utils/scroll'


export default function HeroSection() {
    const [isResumeOpen, setIsResumeOpen] = useState(false)

    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="pb-24 pt-12 md:pb-32 lg:pb-40 lg:pt-32"> 
                        <div className="mx-auto max-w-4xl px-6 text-center"> 
                            <h1 className="mt-8 text-balance text-5xl font-medium md:text-6xl xl:text-7xl">
                                Hi, I&apos;m Carolyn.
                            </h1>
                            <p className="mt-8 text-pretty text-lg mx-auto max-w-2xl"> 
                                I build data-driven solutions—from full-stack apps to AI/ML pipelines—using Python, GCP, and modern web stacks.
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
                <section className="bg-background pb-16 md:pb-32">
                    <div className="group relative m-auto max-w-6xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-sm">My tech arsenal</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                            <InfiniteSlider
                                speedOnHover={20}
                                speed={40}
                                gap={112}>
                                <div className="flex">
                                <Image
                                    className="mx-auto h-10 w-fit"
                                    src="/icons/python.svg"
                                    alt="Python Logo"
                                    height={20}
                                    width={40} // Adjusted to maintain aspect ratio
                                />
                                </div>

                                <div className="flex">
                                <Image
                                    className="mx-auto h-10 w-fit"
                                    src="/icons/google-cloud.svg"
                                    alt="Google Cloud Logo"
                                    height={16}
                                    width={40}
                                />
                                </div>
                                <div className="flex">
                                <Image
                                    className="mx-auto h-6 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/github.svg"
                                    alt="GitHub Logo"
                                    height={18}
                                    width={36}
                                />
                                </div>
                                <div className="flex">
                                <Image
                                    className="mx-auto h-10 w-fit"
                                    src="/icons/docker.svg"
                                    alt="Docker Logo"
                                    height={20}
                                    width={40}
                                />
                                </div>
                                <div className="flex">
                                <Image
                                    className="mx-auto h-10 w-fit dark:invert"
                                    src="/icons/linux.svg"
                                    alt="Linux Logo"
                                    height={20}
                                    width={40}
                                />
                                </div>
                                <div className="flex">
                                <Image
                                    className="mx-auto h-10 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/openai.svg"
                                    alt="OpenAI Logo"
                                    height={24}
                                    width={48}
                                />
                                </div>
                                <div className="flex">
                                <Image
                                    className="mx-auto h-10 w-fit dark:invert"
                                    src="/icons/java.svg"
                                    alt="Java Logo"
                                    height={24}
                                    width={48}
                                />
                                </div>
                            </InfiniteSlider>

                            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                            <ProgressiveBlur
                                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                direction="left"
                                blurIntensity={1}
                            />
                            <ProgressiveBlur
                                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                direction="right"
                                blurIntensity={1}
                            />
                            </div>
                        </div>
                    </div>
                </section>

                <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
            </main>
        </>
    )
}
