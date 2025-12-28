
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
          <div className="flex justify-center gap-8 mb-4">
            <button
              onClick={() => setActiveModal('docs')}
              className="hover:text-white transition-colors text-sm font-medium bg-transparent border-none cursor-pointer"
            >
              Documentation
            </button>
            <button
              onClick={() => setActiveModal('contribute')}
              className="hover:text-white transition-colors text-sm font-medium bg-transparent border-none cursor-pointer"
            >
              Contribute
            </button>
            <button
              onClick={() => setActiveModal('help')}
              className="hover:text-white transition-colors text-sm font-medium bg-transparent border-none cursor-pointer"
            >
              Help
            </button>
          </div>
          <div className="text-xs border-t border-slate-800 pt-2">
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
        <div className="space-y-4 text-slate-600">
          <p>
            Help us build the largest repository of clinical templates!
          </p>
          <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
            <h4 className="font-bold text-indigo-900 mb-2">Submission Guidelines</h4>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Ensure <strong>NO patient identifiable information (PII)</strong> is included.</li>
              <li>Follow the standard format (History, Exam, Plan).</li>
              <li>Verify medical accuracy before submitting.</li>
            </ul>
          </div>
          <p className="text-sm">
            You can submit new templates by opening an issue on our GitHub repository or contacting the admin team.
          </p>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'help'}
        onClose={() => setActiveModal(null)}
        title="Help & Support"
      >
        <div className="space-y-4 text-slate-600">
          <div>
            <h4 className="font-bold text-slate-800 mb-1">Frequently Asked Questions</h4>
            <div className="space-y-2 text-sm">
              <p><strong>Q: Why can't I find a template?</strong><br />A: Try using broader search terms or checking the 'All Specialties' filter.</p>
              <p><strong>Q: Is this medical advice?</strong><br />A: No, these are templates for documentation purposes only. Always use clinical judgment.</p>
            </div>
          </div>
          <div className="pt-4 border-t border-slate-100">
            <h4 className="font-bold text-slate-800 mb-1">Contact Support</h4>
            <p className="text-sm">Found a bug? Email us at <a href="#" className="text-indigo-600 hover:underline">support@clerkly.app</a></p>
          </div>
        </div>
      </Modal>

    </div>
  );
};

export default App;
