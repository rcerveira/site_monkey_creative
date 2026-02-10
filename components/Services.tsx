import React from 'react';
import { useCursor } from '../hooks';
import { servicesData } from '../data';

const Services: React.FC = () => {
    const { bananaCursor, defaultCursor } = useCursor();

    return (
        <>
            <section className="relative bg-black border-y-4 border-primary z-20 overflow-hidden whitespace-nowrap py-10 select-none">
                <div className="flex animate-marquee">
                    {[0, 1].map((i) => (
                        <div key={i} className="flex items-center shrink-0">
                            <span className="text-6xl md:text-8xl font-display uppercase text-primary font-bold mx-8">
                                PERFORMANCE • SEO • CONVERSÃO • TECNOLOGIA • REACT • NEXT.JS • LEADS •
                            </span>
                            <span className="text-6xl md:text-8xl font-display uppercase text-black font-bold text-stroke-primary mx-8">
                                PERFORMANCE • SEO • CONVERSÃO • TECNOLOGIA • REACT • NEXT.JS • LEADS •
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-24 bg-surface-light dark:bg-surface-dark relative z-10" id="services">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div>
                            <h2 className="font-display text-5xl md:text-6xl uppercase text-gray-900 dark:text-white mb-2">
                                NOSSOS SERVIÇOS
                            </h2>
                            <div className="h-2 w-24 bg-primary border border-black"></div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 max-w-md mt-6 md:mt-0 font-medium border-l-4 border-primary pl-4">
                            Desenvolvimento web orientado a resultados. Criamos infraestrutura digital para sua empresa vender mais.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {servicesData.map((service, idx) => (
                            <div
                                key={idx}
                                className="group bg-white dark:bg-background-dark p-8 border-2 border-black dark:border-gray-700 transition-all duration-300 shadow-sm rounded-none flex flex-col h-full"
                                onMouseEnter={bananaCursor}
                                onMouseLeave={defaultCursor}
                            >
                                <div className={`w-16 h-16 ${service.inverse ? 'bg-black dark:bg-white' : 'bg-primary'} flex items-center justify-center mb-6 border-2 ${service.inverse ? 'border-primary' : 'border-black'} rounded-none shadow-hard-sm shrink-0`}>
                                    <span className={`material-symbols-outlined text-3xl ${service.inverse ? 'text-white dark:text-black' : 'text-black'}`}>
                                        {service.icon}
                                    </span>
                                </div>
                                <h3 className="font-display text-2xl uppercase mb-4 text-gray-900 dark:text-white leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;