
import React, { useState, useMemo, useEffect } from 'react';
import { Specialty, Template, SearchFilters } from './types';
import { CLERKING_TEMPLATES } from './data';
import TemplateCard from './components/TemplateCard';
import TemplateDetails from './components/TemplateDetails';
import Pagination from './components/Pagination';
import TemplateListView from './components/TemplateListView';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    specialty: Specialty.All
  });
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeModal, setActiveModal] = useState<'docs' | 'contribute' | 'help' | null>(null);
  const ITEMS_PER_PAGE = 10;

  // Sync state with URL on initial load and popstate
  useEffect(() => {
    const handleUrlChange = () => {
      const params = new URLSearchParams(window.location.search);
      const templateId = params.get('template');
      if (templateId) {
        const found = CLERKING_TEMPLATES.find(t => t.id === templateId);
        if (found) setSelectedTemplate(found);
      } else {
        setSelectedTemplate(null);
      }
    };

    handleUrlChange(); // Check on mount
    window.addEventListener('popstate', handleUrlChange); // Listen for back/forward
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  const handleTemplateSelect = (template: Template | null) => {
    setSelectedTemplate(template);
    if (template) {
      const url = new URL(window.location.href);
      url.searchParams.set('template', template.id);
      window.history.pushState({}, '', url);
    } else {
      const url = new URL(window.location.href);
      url.searchParams.delete('template');
      window.history.pushState({}, '', url);
    }
  };

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
      // Split query by comma or space and filter out empty strings
      const searchTerms = filters.query.toLowerCase().split(/[\s,]+/).filter(term => term.length > 0);

      const matchesQuery = searchTerms.length === 0 || searchTerms.every(term =>
        t.title.toLowerCase().includes(term) ||
        t.condition.toLowerCase().includes(term) ||
        t.subSpecialty.toLowerCase().includes(term) ||
        t.symptoms.some(s => s.toLowerCase().includes(term))
      );

      const matchesSpecialty = filters.specialty === Specialty.All || t.specialty === filters.specialty;

      return matchesQuery && matchesSpecialty;
    });
  }, [filters]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const totalPages = Math.ceil(filteredTemplates.length / ITEMS_PER_PAGE);
  const currentTemplates = filteredTemplates.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content).then(() => {
      setCopyFeedback("Copied");
      setTimeout(() => setCopyFeedback(null), 2000);
    });
  };

  const goHome = () => {
    handleTemplateSelect(null);
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
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
              <h3 className="text-lg font-semibold text-slate-800">
                {filters.query || filters.specialty !== Specialty.All ? (
                  <span>Found <span className="text-indigo-950">{filteredTemplates.length}</span> results</span>
                ) : (
                  <span>Explore all templates</span>
                )}
              </h3>

              <div className="flex items-center gap-4">
                <div className="flex bg-slate-100 p-1 rounded-xl">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`nav-btn px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${viewMode === 'grid'
                      ? 'bg-white text-indigo-950 shadow-sm'
                      : 'text-slate-500 hover:text-indigo-900'
                      }`}
                  >
                    <i className="fa-solid fa-grid-2"></i> Grid
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`nav-btn px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${viewMode === 'list'
                      ? 'bg-white text-indigo-950 shadow-sm'
                      : 'text-slate-500 hover:text-indigo-900'
                      }`}
                  >
                    <i className="fa-solid fa-list"></i> List
                  </button>
                </div>

                {(filters.query || filters.specialty !== Specialty.All) && (
                  <button
                    onClick={clearFilters}
                    className="text-sm font-medium text-indigo-950 hover:text-black px-4 py-1.5 rounded-full hover:bg-slate-100 transition-colors"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            </div>

            {currentTemplates.length > 0 ? (
              <>
                {viewMode === 'grid' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {currentTemplates.map(template => (
                      <TemplateCard
                        key={template.id}
                        template={template}
                        onView={handleTemplateSelect}
                        onCopy={handleCopy}
                      />
                    ))}
                  </div>
                ) : (
                  <TemplateListView
                    templates={currentTemplates}
                    onView={handleTemplateSelect}
                    onCopy={handleCopy}
                  />
                )}

                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </>
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
      <footer className="bg-indigo-950 text-slate-400 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center">
              <i className="fa-solid fa-file-medical text-white text-xs"></i>
            </div>
            <span className="text-white font-bold tracking-tight text-xl font-brand">clerkly</span>
          </div>
          <p className="text-xs max-w-md mx-auto mb-6 leading-relaxed">
            Repository for clinical clerking templates.
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <button
              onClick={() => setActiveModal('help')}
              className="hover:text-white transition-colors text-xs font-semibold bg-transparent border-none cursor-pointer"
            >
              Help
            </button>
            <button
              onClick={() => setActiveModal('contribute')}
              className="hover:text-white transition-colors text-xs font-semibold bg-transparent border-none cursor-pointer"
            >
              Contribute
            </button>
          </div>
          <div className="text-[10px] border-t border-slate-800 pt-4">
            &copy; {new Date().getFullYear()} Clerkly. All rights reserved. <br /> For educational purposes.
          </div>
        </div>
      </footer>

      {/* Modals */}
      <Modal
        isOpen={activeModal === 'docs'}
        onClose={() => setActiveModal(null)}
        title="Documentation"
      >
        <div className="space-y-4 text-slate-600">
          <p>
            Welcome to Clerkly! This tool helps you quickly generate and manage clinical notes.
          </p>
          <div>
            <h4 className="font-bold text-slate-800 mb-1">Search Guide</h4>
            <p className="text-sm">Use keywords like 'asthma', 'fever', or 'pediatrics' to filter results instantly.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-1">Template Structure</h4>
            <p className="text-sm">Standard format includes: Title, Specialty, Condition, History, Examination, and Plan.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-1">Copying</h4>
            <p className="text-sm">Click the copy icon <i className="fa-solid fa-copy text-xs"></i> to copy the template text to your clipboard for use in your EMR.</p>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'contribute'}
        onClose={() => setActiveModal(null)}
        title="Contribute"
      >
        <div className="space-y-6">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Help us build a robust repository of relevant clinical templates.
          </p>

          <div className="bg-gradient-to-br from-indigo-50 to-white p-4 rounded-2xl border border-indigo-100">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <i className="fa-solid fa-lightbulb text-indigo-600 text-[10px]"></i>
              </div>
              <h4 className="text-xs font-bold text-indigo-950 uppercase tracking-wider">Submission Guidelines</h4>
            </div>

            <p className="text-xs text-indigo-900/70 mb-3">There are no strict guidelines for now. Simply send in your templates.</p>

            <ul className="space-y-2.5">
              {[
                "Patient-identifiable information will be removed",
                "Templates will be reformatted if necessary",
                "Priority is given to detail, clarity, and medical accuracy"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-indigo-900">
                  <i className="fa-solid fa-check text-indigo-500 mt-0.5 text-[10px]"></i>
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] sm:text-xs italic text-slate-400 text-center mb-3 font-medium">
              You already have those templates on your phone, chief 🤲
            </p>
            <a
              href="https://forms.gle/ExampleLink"
              target="_blank"
              rel="noreferrer"
              className="group w-full flex items-center justify-center gap-2 bg-indigo-950 text-white font-bold py-3 px-4 rounded-xl hover:bg-indigo-900 transition-all shadow-lg shadow-indigo-200 active:scale-[0.98]"
            >
              <span className="text-xs sm:text-sm">Submit via Google Form</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
            </a>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'help'}
        onClose={() => setActiveModal(null)}
        title="Help"
      >
        <div className="space-y-6">
          <section>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Find what you're looking for</h4>
            <div className="grid gap-2">
              {[
                { label: 'Conditions', ex: 'e.g. appendicitis', icon: 'fa-stethoscope' },
                { label: 'Symptoms', ex: 'e.g. cough, fever', icon: 'fa-temperature-half' },
                { label: 'Specialty Clinics', ex: 'e.g. antenatal clinic', icon: 'fa-hospital' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm text-indigo-500">
                    <i className={`fa-solid ${item.icon} text-xs`}></i>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-slate-700">{item.label}</p>
                    <p className="text-[10px] text-slate-400">{item.ex}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Disclaimer</h4>
            <div className="bg-amber-50 p-3 rounded-xl border border-amber-100/50">
              <div className="flex gap-2">
                <i className="fa-solid fa-circle-info text-amber-500 text-xs mt-0.5"></i>
                <div className="space-y-2">
                  <p className="text-xs font-bold text-amber-900">Not Medical Advice</p>
                  <p className="text-[10px] sm:text-xs text-amber-800/80 leading-relaxed">
                    These templates are adapted from real clinical cases for educational purposes.
                    <span className="font-semibold"> Always apply your own clinical judgement.</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-2 border-t border-slate-100">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Contact & Support</h4>
            <p className="text-[10px] sm:text-xs text-slate-500 mb-3 leading-relaxed">
              Found a significant error? The kind that feels like an insult to your intelligence? 😅 Let us know.
            </p>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-4 py-2.5 rounded-xl hover:bg-emerald-100 transition-colors border border-emerald-100"
            >
              <i className="fa-brands fa-whatsapp text-sm"></i>
              Message on WhatsApp
            </a>
          </section>
        </div>
      </Modal>

    </div>
  );
};

export default App;
