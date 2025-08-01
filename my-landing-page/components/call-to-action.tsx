import Link from 'next/link'

export default function CallToAction() {
    return (
        <section id="contact" className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Contact Me</h2>
                    <p className="mt-4">Additionally, visit my LinkedIn and GitHub pages!</p>

                    <div className="mt-12 flex justify-center gap-6">              
                        {/* Email */}
                        <Link 
                            href="mailto:bozincarolyn@gmail.com" 
                            aria-label="Email" 
                            className="text-muted-foreground hover:text-primary transition-colors duration-200">
                            <svg 
                                className="size-12" 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="currentColor">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                        </Link>

                        {/* GitHub */}
                        <Link
                            href="https://github.com/cbozin"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="text-muted-foreground hover:text-primary transition-colors duration-200">
                            <svg
                                className="size-12"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                />
                            </svg>
                        </Link>

                        {/* LinkedIn */}
                        <Link
                            href="https://linkedin.com/in/carolyn-bozin/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="text-muted-foreground hover:text-primary transition-colors duration-200">
                            <svg
                                className="size-12"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor">
                                <path
                                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                                />
                            </svg>
                        </Link>
                    </div>
                     {/* Contact Info Text */}
                        <div className=" mt-5 text-center space-y-2">
                            <p className="text-muted-foreground">
                                Email: <a href="mailto:bozincarolyn@gmail.com" className="hover:text-primary transition-colors">bozincarolyn@gmail.com</a>
                            </p>
                            <p className="text-muted-foreground">
                                GitHub: <a href="https://github.com/cbozin" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">github.com/cbozin</a>
                            </p>
                            <p className="text-muted-foreground">
                                LinkedIn: <a href="https://linkedin.com/in/carolyn-bozin/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">linkedin.com/in/carolyn-bozin</a>
                            </p>
                        </div>
                </div>
            </div>
        </section>
    )
}