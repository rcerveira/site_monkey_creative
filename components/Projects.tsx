
import React, { useState, useEffect } from 'react';
import { useCursor } from '../hooks';
import { ProjectData } from '../types';
import { projectsData } from '../data';

const Projects: React.FC = () => {
  const { textCursor, buttonCursor, defaultCursor } = useCursor();
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  
  // Store default meta tags to restore later
  const [defaultMeta, setDefaultMeta] = useState({
    title: document.title,
    description: document.querySelector('meta[name="description"]')?.getAttribute('content') || ''
  });

  // Helper to create URL slug from project title
  const createSlug = (text: string) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

  const getProjectFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    const projectSlug = params.get('projeto');

    if (!projectSlug) return null;
    return projectsData.find((project) => createSlug(project.title) === projectSlug) || null;
  };

  // Handle URL changes and initial load (deep linking)
  useEffect(() => {
    const syncFromUrl = () => {
      setSelectedProject(getProjectFromUrl());
    };

    syncFromUrl();

    const handlePopState = () => {
      syncFromUrl();
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync Metadata and URL with Selected Project
  useEffect(() => {
    if (selectedProject) {
      // 1. Update Document Title
      document.title = `${selectedProject.title} | Portfólio Monkey Creative`;
      
      // 2. Update Meta Description
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', selectedProject.description || `Veja detalhes do projeto ${selectedProject.title} desenvolvido pela Monkey Creative.`);
      }

      // 3. Update URL without reloading (SEO Friendly query param)
      const slug = createSlug(selectedProject.title);
      const newUrl = `${window.location.pathname}?projeto=${slug}`;
      window.history.pushState({ project: selectedProject.id }, '', newUrl);

      // 4. Lock Body Scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Restore defaults
      document.title = defaultMeta.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', defaultMeta.description);
      
      // Clean URL
      if (window.location.search.includes('projeto=')) {
        window.history.pushState({}, '', window.location.pathname);
      }

      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject, defaultMeta]);

  return (
    <>
      <section className="py-20 bg-surface-dark relative z-10 border-b-4 border-primary overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(#FFDE00 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <h2 className="font-display text-4xl md:text-5xl uppercase text-white">
              QUEM CONFIA <span className="text-stroke-primary text-transparent">NA GENTE</span>
            </h2>
            <div className="h-[1px] flex-grow mx-8 bg-gray-800 hidden md:block"></div>
            <p className="text-gray-400 font-medium text-sm uppercase tracking-widest hidden md:block">
              Parceiros de Classe Mundial
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i} 
                className="group relative w-full flex justify-center items-center p-4 opacity-40 transition-all duration-300 text-white"
                onMouseEnter={() => textCursor('Explorar')}
                onMouseLeave={defaultCursor}
              >
                 <span className="material-symbols-outlined text-5xl">
                    {i === 1 ? 'diamond' : i === 2 ? 'change_history' : i === 3 ? 'all_inclusive' : i === 4 ? 'token' : 'view_in_ar'}
                 </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background-light dark:bg-background-dark z-10 relative" id="projects">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-7xl uppercase text-gray-900 dark:text-white mb-4">
              PROJETOS SELECIONADOS
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 font-display uppercase tracking-widest">
              Apenas os mais recentes
            </p>
          </div>

          <div className="border-y-2 border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-4 md:p-8">
            <div className="max-h-[800px] overflow-y-auto pr-2 custom-scrollbar scroll-smooth">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="relative group block overflow-hidden border-2 border-black dark:border-gray-700 rounded-none shadow-hard cursor-none bg-white dark:bg-transparent transition-transform duration-300 hover:-translate-y-1 h-full w-full text-left"
                    onMouseEnter={() => textCursor('Ver Mais')}
                    onMouseLeave={defaultCursor}
                    aria-label={`Ver detalhes do projeto ${project.title}`}
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                      <img
                        src={project.image}
                        alt={`Captura de tela do projeto ${project.title}`}
                        width="800"
                        height="600"
                        loading={index < 4 ? "eager" : "lazy"}
                        decoding="async"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-6 text-center z-10">
                      <span className="text-black font-bold uppercase text-xs mb-2 tracking-widest border border-black px-2 py-1 bg-white/20 backdrop-blur-sm">
                          {project.category}
                      </span>
                      <h4 className="font-display text-4xl text-black uppercase mb-2">
                        {project.title}
                      </h4>
                      <div className="flex items-center space-x-2 text-black font-bold">
                        <span className="uppercase tracking-wider text-sm">Ver Detalhes</span>
                        <span className="material-symbols-outlined">visibility</span>
                      </div>
                    </div>
                    {project.hasHoverState && (
                      <div className="absolute top-4 right-4 bg-black text-white text-[10px] uppercase font-bold px-2 py-1 rounded-none z-20 shadow-sm">
                        High Performance
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              className="inline-flex items-center justify-center bg-black text-white dark:bg-primary dark:text-black font-bold py-4 px-10 rounded-none border-2 border-transparent shadow-hard hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all uppercase tracking-wider text-sm"
              onMouseEnter={() => textCursor('Mais')}
              onMouseLeave={defaultCursor}
            >
              <span>Ver Portfólio Completo</span>
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProject(null)}
          ></div>

          <div className="bg-white dark:bg-surface-dark w-full max-w-7xl h-[85vh] md:h-[90vh] relative z-10 flex flex-col lg:flex-row shadow-2xl border-2 border-primary overflow-hidden animate-breathe rounded-sm">
            
            <button 
              className="absolute top-4 right-4 z-50 bg-black text-primary p-2 rounded-full hover:rotate-90 transition-transform duration-300 shadow-hard-white"
              onClick={() => setSelectedProject(null)}
              onMouseEnter={buttonCursor}
              onMouseLeave={defaultCursor}
              aria-label="Fechar Modal"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            <div className="lg:w-2/3 h-1/2 lg:h-full overflow-y-auto custom-scrollbar bg-gray-100 dark:bg-black/50 relative group">
               <img 
                 src={selectedProject.image} 
                 alt={selectedProject.title} 
                 loading="eager"
                 className="w-full h-auto object-contain"
               />
            </div>

            <div className="lg:w-1/3 h-1/2 lg:h-full bg-white dark:bg-surface-dark border-t-2 lg:border-t-0 lg:border-l-2 border-black dark:border-gray-700 p-8 flex flex-col overflow-y-auto">
              
              <div className="mb-8">
                <span className="inline-block bg-primary text-black text-xs font-bold px-3 py-1 uppercase tracking-widest mb-4 border border-black shadow-hard-sm">
                  {selectedProject.category}
                </span>
                <h3 id="modal-title" className="font-display text-4xl md:text-5xl uppercase text-black dark:text-white leading-none mb-6">
                  {selectedProject.title}
                </h3>
                <div className="w-20 h-2 bg-black dark:bg-white mb-6"></div>
                
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-medium">
                  {selectedProject.description}
                </p>
              </div>

              <div className="mt-auto pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-display text-xl uppercase mb-4 text-gray-500">Tecnologias & Tags</h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {(selectedProject.technologies || ['React', 'Next.js', 'Tailwind', 'Performance', 'SEO', 'UI/UX']).map(tag => (
                    <span key={tag} className="text-xs font-bold uppercase border border-gray-300 dark:border-gray-600 px-2 py-1 text-gray-500">
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={selectedProject.url || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center bg-black text-white dark:bg-white dark:text-black font-bold py-4 px-6 uppercase tracking-wider hover:bg-primary hover:text-black transition-colors border-2 border-transparent shadow-hard"
                  onMouseEnter={() => textCursor('Visitar')}
                  onMouseLeave={defaultCursor}
                >
                  Visitar Projeto
                  <span className="material-symbols-outlined ml-2">open_in_new</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
