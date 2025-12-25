
import React, { useState, useMemo, useEffect } from 'react';
import { Specialty, Template, SearchFilters } from './types';
import { CLERKING_TEMPLATES } from './data';
import TemplateCard from './components/TemplateCard';
import TemplateDetails from './components/TemplateDetails';

const App: React.FC = () => {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    specialty: Specialty.All
  });
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isDropdownOpen && !(event.target as Element).closest('.specialty-dropdown')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  const filteredTemplates = useMemo(() => {
    return CLERKING_TEMPLATES.filter(t => {
      const matchesQuery = !filters.query ||
        t.title.toLowerCase().includes(filters.query.toLowerCase()) ||
        t.condition.toLowerCase().includes(filters.query.toLowerCase()) ||
        t.subSpecialty.toLowerCase().includes(filters.query.toLowerCase()) ||
        t.symptoms.some(s => s.toLowerCase().includes(filters.query.toLowerCase()));

      const matchesSpecialty = filters.specialty === Specialty.All || t.specialty === filters.specialty;

      return matchesQuery && matchesSpecialty;
    });
  }, [filters]);

  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content).then(() => {
      setCopyFeedback("Copied");
      setTimeout(() => setCopyFeedback(null), 2000);
    });
  };

  const goHome = () => {
    setSelectedTemplate(null);
    setFilters({ query: '', specialty: Specialty.All });
  };

  const clearFilters = () => {
    setFilters(prev => ({ ...prev, query: '', specialty: Specialty.All }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Feedback Toast */}
      {copyFeedback && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] bg-indigo-950 text-white px-6 py-3 rounded-full shadow-2xl animate-bounce flex items-center gap-2">
          <i className="fa-solid fa-circle-check text-emerald-400"></i>
          <span className="font-medium text-sm">{copyFeedback}</span>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-40 w-full glass-morphism border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={goHome}
            className="flex items-center gap-2 group p-1.5 -ml-1.5 rounded-xl hover:bg-slate-50 transition-all"
            title="Go to Homepage"
          >
            <div className="w-8 h-8 bg-indigo-950 rounded-lg flex items-center justify-center group-hover:bg-black transition-colors shadow-lg shadow-indigo-100">
              <i className="fa-solid fa-file-medical text-white text-lg"></i>
            </div>
          </button>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-950 transition-colors">Documentation</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-950 transition-colors">Contribute</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-950 transition-colors">Help</a>
          </nav>
        </div>
      </header>

      {/* Hero Section - Only show when no template selected */}
      {!selectedTemplate && (
        <section className="bg-white border-b border-slate-100 py-20 sm:py-32">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-6xl sm:text-8xl font-bold text-indigo-950 mb-2 tracking-tighter font-brand">
              clerkly
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-medium tracking-[0.2em] uppercase mb-12">
              patients notes
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 bg-white p-2 rounded-2xl shadow-xl border border-slate-100">
                <div className="flex-1 flex items-center px-4 bg-slate-50 rounded-xl">
                  <i className="fa-solid fa-magnifying-glass text-slate-400 mr-3"></i>
                  <input
                    type="text"
                    placeholder="Search condition, symptom, or clinic..."
                    className="w-full py-3 bg-transparent text-slate-700 focus:outline-none text-sm sm:text-base"
                    value={filters.query}
                    onChange={(e) => setFilters(prev => ({ ...prev, query: e.target.value }))}
                  />
                </div>
                <div className="relative specialty-dropdown">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full sm:w-48 px-4 py-3 bg-slate-100 text-indigo-950 rounded-xl font-bold focus:outline-none flex items-center justify-between gap-2 hover:bg-slate-200 transition-colors text-sm"
                  >
                    <span className="truncate">{filters.specialty}</span>
                    <i className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 w-full sm:w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-200">
                      {Object.values(Specialty).map(s => (
                        <button
                          key={s}
                          onClick={() => {
                            setFilters(prev => ({ ...prev, specialty: s }));
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors flex items-center justify-between ${filters.specialty === s
                            ? 'bg-indigo-50 text-indigo-950'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-indigo-950'
                            }`}
                        >
                          {s}
                          {filters.specialty === s && <i className="fa-solid fa-check text-[10px]"></i>}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Content Section */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {selectedTemplate ? (
          <TemplateDetails
            template={selectedTemplate}
            onBack={() => setSelectedTemplate(null)}
            onCopy={handleCopy}
          />
        ) : (
          <>
            {/* Statistics & Quick Filter Info */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
              <h3 className="text-lg font-semibold text-slate-800">
                {filters.query || filters.specialty !== Specialty.All ? (
                  <span>Found <span className="text-indigo-950">{filteredTemplates.length}</span> results</span>
                ) : (
                  <span>Explore all templates</span>
                )}
              </h3>
              {(filters.query || filters.specialty !== Specialty.All) && (
                <button
                  onClick={clearFilters}
                  className="text-sm font-medium text-indigo-950 hover:text-black px-4 py-1.5 rounded-full hover:bg-slate-100 transition-colors"
                >
                  Clear filters
                </button>
              )}
            </div>

            {filteredTemplates.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {filteredTemplates.map(template => (
                  <TemplateCard
                    key={template.id}
                    template={template}
                    onView={setSelectedTemplate}
                    onCopy={handleCopy}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-24 bg-white rounded-3xl border-2 border-dashed border-slate-100">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fa-solid fa-clipboard-question text-slate-300 text-3xl"></i>
                </div>
                <h4 className="text-xl font-bold text-slate-700 mb-2">No templates found</h4>
                <p className="text-slate-500 max-w-sm mx-auto">
                  We couldn't find any templates matching your search criteria. Try a broader keyword or change the specialty.
                </p>
              </div>
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-indigo-950 text-slate-400 py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center">
              <i className="fa-solid fa-file-medical text-white text-xs"></i>
            </div>
            <span className="text-white font-bold tracking-tight text-xl font-brand">clerkly</span>
          </div>
          <p className="text-sm max-w-md mx-auto mb-8 leading-relaxed">
            Repository for clinical clerking templates.           </p>
          <div className="flex justify-center gap-8 mb-8">
            {/* <a href="#" className="hover:text-white transition-colors">Privacy</a> */}
            {/* <a href="#" className="hover:text-white transition-colors">Terms</a> */}
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-xs border-t border-slate-800 pt-8">
            &copy; {new Date().getFullYear()} Clerkly. All rights reserved. For educational purposes.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
