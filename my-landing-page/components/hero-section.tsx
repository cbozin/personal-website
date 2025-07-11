import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { HeroHeader } from './header'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">Hi, I&apos;m Carolyn.</h1>
                                <p className="mt-8 max-w-2xl text-pretty text-lg">I build data-driven solutions—from full-stack apps to AI/ML pipelines—using Python, GCP, and modern web stacks.
                                            Passionate about turning raw data into actionable insights and scalable systems.</p>
                          <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="px-5 text-base">
                                        <Link href="#link">
                                            <span className="text-nowrap">View my Resume</span>
                                        </Link>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="px-5 text-base">
                                        <Link href="#contact">
                                            <span className="text-nowrap">Contact Me</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <Image
                                className="-z-10 order-first ml-auto h-56 w-full object-cover invert sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-96 lg:order-last lg:h-max lg:w-2/3 lg:object-contain dark:mix-blend-lighten dark:invert-0"
                                src="https://ik.imagekit.io/lrigu76hy/tailark/abstract-bg.jpg?updatedAt=1745733473768"
                                alt="Abstract Object"
                                height="4000"
                                width="3000"
                            />
                        </div>
                    </div>
                </section>
                <section className="bg-background pb-16 md:pb-32">
                    <div className="group relative m-auto max-w-6xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            {/* <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-sm">My tech arsenal</p>
                            </div> */}
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
            </main>
        </>
    )
}
