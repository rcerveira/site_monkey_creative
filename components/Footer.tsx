import React, { useState } from 'react';
import { useCursor, useScrollTo } from '../hooks';
import { navLinks, socialLinks } from '../data';

const Footer: React.FC = () => {
    const { textCursor, buttonCursor, defaultCursor } = useCursor();
    const { scrollToId, scrollToTop } = useScrollTo();
    const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

    const Modal = ({ title, content, onClose }: { title: string, content: React.ReactNode, onClose: () => void }) => (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose}></div>
            <div className="relative bg-white dark:bg-surface-dark w-full max-w-4xl max-h-[80vh] overflow-hidden flex flex-col border-2 border-primary shadow-hard animate-breathe">
                <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark z-10">
                    <h3 className="font-display text-3xl uppercase text-black dark:text-white">{title}</h3>
                    <button 
                        onClick={onClose} 
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors group"
                        onMouseEnter={buttonCursor}
                        onMouseLeave={defaultCursor}
                    >
                        <span className="material-symbols-outlined group-hover:rotate-90 transition-transform text-2xl">close</span>
                    </button>
                </div>
                <div className="p-8 overflow-y-auto custom-scrollbar text-gray-700 dark:text-gray-300 space-y-4 bg-white dark:bg-surface-dark">
                    {content}
                </div>
            </div>
        </div>
    );

    const privacyContent = (
        <div className="space-y-4 font-sans">
            <p><strong>1. Introdução</strong><br/>Bem-vindo à Monkey Creative. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais ao utilizar nosso site e serviços.</p>
            <p><strong>2. Coleta de Dados</strong><br/>Coletamos informações que você nos fornece diretamente, como nome, e-mail e telefone através de nossos formulários de contato. Também coletamos dados técnicos automaticamente, como endereço IP e tipo de navegador, para melhorar a experiência do usuário.</p>
            <p><strong>3. Uso das Informações</strong><br/>Utilizamos seus dados para responder a solicitações de orçamento, melhorar nossos serviços, enviar comunicações de marketing (caso autorizado) e garantir a segurança do site.</p>
            <p><strong>4. Proteção de Dados</strong><br/>Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração ou destruição.</p>
            <p><strong>5. Seus Direitos</strong><br/>Você tem o direito de acessar, corrigir ou solicitar a exclusão de seus dados pessoais. Para exercer esses direitos, entre em contato através do e-mail ola@monkeycreative.agency.</p>
        </div>
    );

    const termsContent = (
        <div className="space-y-4 font-sans">
            <p><strong>1. Aceitação dos Termos</strong><br/>Ao acessar e usar o site da Monkey Creative, você concorda em cumprir estes Termos de Serviço e todas as leis aplicáveis.</p>
            <p><strong>2. Propriedade Intelectual</strong><br/>Todo o conteúdo presente neste site, incluindo textos, gráficos, logotipos e código, é propriedade da Monkey Creative e está protegido por leis de direitos autorais.</p>
            <p><strong>3. Uso Permitido</strong><br/>Você concorda em usar nosso site apenas para fins legais e não comprometer a segurança ou acessibilidade do mesmo.</p>
            <p><strong>4. Limitação de Responsabilidade</strong><br/>A Monkey Creative não se responsabiliza por danos diretos ou indiretos decorrentes do uso ou incapacidade de uso deste site.</p>
            <p><strong>5. Alterações</strong><br/>Reservamo-nos o direito de modificar estes termos a qualquer momento. O uso contínuo do site após as alterações constitui aceitação dos novos termos.</p>
        </div>
    );

    return (
        <footer className="bg-black text-white pt-24 pb-8 border-t border-gray-800 z-10 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none w-64 h-64">
                <img 
                    src="https://pub-9bd44561011b427d8901eec9c88e98a4.r2.dev/path3.png" 
                    alt="Background Icon" 
                    className="w-full h-full object-contain animate-float rotate-12"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center justify-center mb-24">
                    <h2 className="font-display text-5xl md:text-7xl uppercase text-white mb-8 text-center">
                        PRONTO PARA ESCALAR SEU NEGÓCIO?
                    </h2>
                    <a
                        href="#contact"
                        onClick={(e) => scrollToId(e, '#contact')}
                        className="inline-flex items-center justify-center bg-primary text-black font-display font-bold py-6 px-16 text-2xl md:text-4xl rounded-xl border-2 border-transparent shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all uppercase tracking-wider"
                    >
                        BORA FALAR!
                        <span className="material-symbols-outlined text-3xl md:text-5xl ml-4 font-bold">
                            arrow_outward
                        </span>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16 border-t border-gray-800 pt-16">
                    <div className="space-y-6">
                        <a 
                            href="#" 
                            onClick={scrollToTop}
                            className="flex items-center space-x-3 group w-fit"
                        >
                            <div className="relative w-12 h-12 flex items-center justify-center bg-primary border-2 border-white rounded-xl overflow-hidden shadow-hard-white">
                                <img 
                                    src="https://pub-9bd44561011b427d8901eec9c88e98a4.r2.dev/path3.png" 
                                    alt="Monkey Creative Icon" 
                                    className="w-7 h-7 object-contain"
                                />
                            </div>
                            <span className="self-center text-2xl font-display uppercase tracking-wide whitespace-nowrap text-white transition-colors">
                                Monkey Creative
                            </span>
                        </a>
                        <p className="text-gray-400 max-w-xs leading-relaxed font-medium">
                            Performance é inegociável. Unimos design estratégico e código limpo para construir máquinas de vendas que dominam o mercado.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h4 className="font-display text-2xl text-primary uppercase">Explorar</h4>
                        <ul className="space-y-3">
                            {navLinks.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        onClick={(e) => scrollToId(e, item.href)}
                                        className="text-gray-300 transition-colors font-medium uppercase tracking-wider text-sm w-fit block hover:text-primary"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="font-display text-2xl text-primary uppercase">Siga-nos</h4>
                        <div className="flex flex-col space-y-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-3 text-gray-300 transition-colors group w-fit hover:text-primary"
                                >
                                    <div className="bg-gray-800 p-2 rounded-lg transition-colors group-hover:bg-gray-700">
                                        {social.name === 'Instagram' && <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>}
                                        {social.name === 'LinkedIn' && <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>}
                                        {social.name === 'Behance' && <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.093 2.502-2.176 4.5-4.726 4.5h-14c-2.55 0-4.633-1.998-4.726-4.5h-.274v-5h.274c.093-2.502 2.176-4.5 4.726-4.5h14c2.55 0 4.633 1.998 4.726 4.5h.274v5h-.274zm-3.095-7.835c.019-.387-.031-.76-.145-1.114-.383-1.258-1.571-2.051-2.903-2.051h-11.166c-1.332 0-2.52.793-2.903 2.051-.114.354-.164.727-.145 1.114l1.248 8.63c.099.645.688 1.155 1.341 1.205h13.784c.653-.05 1.242-.56 1.341-1.205l1.548-8.63zm-5.631 3.835c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm-1.5 0c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5z"></path></svg>}
                                    </div>
                                    <span className="font-medium uppercase tracking-wider text-sm">{social.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© 2026 Monkey Creative Agency. Todos os direitos reservados.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <button 
                            onClick={() => setActiveModal('privacy')}
                            className="hover:text-primary transition-colors hover:underline text-left"
                            onMouseEnter={() => textCursor('Ler')}
                            onMouseLeave={defaultCursor}
                        >
                            Política de Privacidade
                        </button>
                        <button 
                            onClick={() => setActiveModal('terms')}
                            className="hover:text-primary transition-colors hover:underline text-left"
                            onMouseEnter={() => textCursor('Ler')}
                            onMouseLeave={defaultCursor}
                        >
                            Termos de Serviço
                        </button>
                    </div>
                </div>
            </div>

             <button 
                className="fixed bottom-8 right-8 bg-primary p-3 rounded-full shadow-hard-white transition-transform z-50 hover:scale-110"
                onClick={scrollToTop}
                onMouseEnter={() => textCursor('Topo')}
                onMouseLeave={defaultCursor}
             >
                <span className="material-symbols-outlined text-black font-bold text-2xl">arrow_upward</span>
             </button>

            {/* Modals */}
            {activeModal === 'privacy' && <Modal title="Política de Privacidade" content={privacyContent} onClose={() => setActiveModal(null)} />}
            {activeModal === 'terms' && <Modal title="Termos de Serviço" content={termsContent} onClose={() => setActiveModal(null)} />}
        </footer>
    );
};

export default Footer;