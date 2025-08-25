import Image from 'next/image'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function LogoCloud() {
    return (
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
                            gap={112}
                        >
                            {/* Standardized logo container size */}
                            <div className="flex h-16 w-32 items-center justify-center">
                                <Image
                                    className="mx-auto h-25 w-auto object-contain"
                                    src="/icons/python2.svg"
                                    alt="Python Logo"
                                    width={80}
                                    height={32}
                                />
                            </div>

                            <div className="flex h-16 w-32 items-center justify-center">
                                <Image
                                    className="mx-auto h-8 w-auto object-contain"
                                    src="/icons/google-cloud2.svg"
                                    alt="Google Cloud Logo"
                                    width={80}
                                    height={40}
                                />
                            </div>

                            <div className="flex h-16 w-32 items-center justify-center">
                                <Image
                                    className="mx-auto h-6 w-auto object-contain dark:invert"
                                    src="https://html.tailus.io/blocks/customers/github.svg"
                                    alt="GitHub Logo"
                                    width={80}
                                    height={20}
                                />
                            </div>

                            <div className="flex h-16 w-32 items-center justify-center">
                                <Image
                                    className="mx-auto h-8 w-auto object-contain"
                                    src="/icons/docker2.svg"
                                    alt="Docker Logo"
                                    width={80}
                                    height={32}
                                />
                            </div>

                            <div className="flex h-16 w-32 items-center justify-center">
                                <Image
                                    className="mx-auto h-25 w-auto object-contain dark:invert"
                                    src="/icons/linux2.svg"
                                    alt="Linux Logo"
                                    width={80}
                                    height={32}
                                />
                            </div>

                            <div className="flex h-16 w-32 items-center justify-center">
                                <Image
                                    className="mx-auto h-8 w-auto object-contain dark:invert"
                                    src="https://html.tailus.io/blocks/customers/openai.svg"
                                    alt="OpenAI Logo"
                                    width={80}
                                    height={32}
                                />
                            </div>

                            <div className="flex h-16 w-32 items-center justify-center">
                                <Image
                                    className="mx-auto h-20 w-auto object-contain"
                                    src="/icons/java2.svg"
                                    alt="Java Logo"
                                    width={80}
                                    height={32}
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
    )
}