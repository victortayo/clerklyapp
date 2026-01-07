
import React, { useEffect } from 'react';
import { Template } from '../types';

interface TemplateDetailsProps {
  template: Template;
  onView?: (t: Template) => void;
  onCopy: (content: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

const TemplateDetails: React.FC<TemplateDetailsProps> = ({
  template,
  onBack,
  onCopy,
  isBookmarked,
  onToggleBookmark
}) => {
  const [copied, setCopied] = React.useState(false);
  const [explanationModalOpen, setExplanationModalOpen] = React.useState(false);
  const [explanationLoading, setExplanationLoading] = React.useState(false);
  const [explanationData, setExplanationData] = React.useState<import('../services/aiService').CaseExplanation | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLocalCopy = () => {
    onCopy(template.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExplainCase = async () => {
    setExplanationModalOpen(true);
    if (!explanationData) {
      setExplanationLoading(true);
      try {
        const { generateCaseExplanation } = await import('../services/aiService');
        const data = await generateCaseExplanation(template);
        setExplanationData(data);
      } catch (error) {
        console.error("Failed to generate explanation", error);
      } finally {
        setExplanationLoading(false);
      }
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 py-6 animate-in fade-in slide-in-from-right-4 duration-500">
        {/* Navigation Header */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-indigo-950 dark:text-indigo-100 tracking-tight font-brand">{template.title}</h2>
            <div className="flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400 mt-2 items-center">
              <span className="flex items-center gap-1.5">
                <i className="fa-solid fa-user-doctor text-indigo-900 dark:text-indigo-300"></i> {template.contributor}
              </span>
              <span className="flex items-center gap-1.5">
                <i className="fa-solid fa-clock text-slate-400 dark:text-slate-500"></i> {template.lastModified}
              </span>
              <span className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-900 dark:text-indigo-200 px-2.5 py-1 rounded-full font-semibold border border-indigo-100 dark:border-indigo-800">
                {template.specialty}
              </span>
            </div>
          </div>
          <button
            onClick={onToggleBookmark}
            className={`flex flex-col items-center gap-1 p-3 rounded-2xl transition-all active:scale-95 ${isBookmarked ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800' : 'text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300'}`}
          >
            <i className={`fa-${isBookmarked ? 'solid' : 'regular'} fa-bookmark text-xl`}></i>
            <span className="text-[10px] font-bold">{template.bookmarkCount || 0}</span>
          </button>
        </div>

        {/* Main Content Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden mb-6 transition-colors">
          <div className="px-5 sm:px-8 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex justify-between items-center">
            <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              {template.subSpecialty}
            </div>
            <button
              onClick={handleExplainCase}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 rounded-lg text-xs font-bold border border-indigo-100 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors"
              title="Explain this case with AI"
            >
              <i className="fa-solid fa-wand-magic-sparkles"></i>
              Explain Case
            </button>
            <button
              onClick={handleLocalCopy}
              className={`p-2.5 rounded-xl transition-all duration-300 ease-out flex items-center justify-center ${copied ? 'bg-emerald-600 text-white shadow-emerald-100' : 'bg-indigo-950 dark:bg-indigo-900 text-white shadow-indigo-200 dark:shadow-none'} shadow-lg active:scale-95`}
              title={copied ? "Copied" : "Copy Template"}
            >
              <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`}></i>
            </button>
          </div>
          <div className="p-4 sm:p-8">
            <div className="bg-slate-50 dark:bg-slate-950/50 rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-slate-100 dark:border-slate-800 font-mono text-[11px] sm:text-xs text-slate-800 dark:text-slate-200 leading-relaxed overflow-x-auto shadow-inner">
              <pre className="whitespace-pre-wrap">{template.content}</pre>
            </div>
          </div>
        </div>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-2 mb-12">
          {template.symptoms.map((s, idx) => (
            <span key={idx} className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-4 py-1.5 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default">
              {s}
            </span>
          ))}
        </div>

        {/* Action Footer */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center py-10 border-t border-slate-100 dark:border-slate-800 transition-colors">
          <button
            onClick={onBack}
            className="text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Back to templates
          </button>

          <button
            onClick={handleExplainCase}
            className="sm:hidden px-6 py-3 rounded-xl font-bold active:scale-95 transition-all flex items-center justify-center gap-2 border w-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 border-indigo-100 dark:border-indigo-800"
          >
            <i className="fa-solid fa-wand-magic-sparkles"></i>
            Explain Case
          </button>
          <button
            onClick={onToggleBookmark}
            className={`px-6 py-3 rounded-xl font-bold active:scale-95 transition-all flex items-center justify-center gap-2 border w-full sm:w-auto ${isBookmarked ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 border-indigo-100 dark:border-indigo-800' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
          >
            <i className={`fa-${isBookmarked ? 'solid' : 'regular'} fa-bookmark`}></i>
            {isBookmarked ? 'Bookmarked' : 'Bookmark'}
          </button>
          <button
            onClick={handleLocalCopy}
            className={`px-8 py-3 rounded-xl font-bold active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl w-full sm:w-auto ${copied ? 'bg-emerald-600 text-white' : 'bg-indigo-950 dark:bg-indigo-900 text-white hover:bg-black dark:hover:bg-indigo-800'}`}
          >
            <i className={`fa-solid ${copied ? 'fa-check text-xs' : 'fa-copy text-sm'}`}></i>
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>

      {/* Floating Back Button */}
      <button
        onClick={onBack}
        className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full shadow-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-indigo-950 dark:hover:text-white hover:scale-110 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 transition-all duration-300 flex items-center justify-center group"
        title="Back to templates"
      >
        <i className="fa-solid fa-arrow-left text-sm group-hover:-translate-x-0.5 transition-transform"></i>
      </button>

      {/* AI Explanation Modal */}
      {explanationModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300" onClick={() => setExplanationModalOpen(false)}></div>
          <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col animate-in zoom-in-95 duration-300 overflow-hidden">

            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <i className="fa-solid fa-robot text-lg"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-brand">AI Case Analysis</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Powered by Clerkly AI</p>
                </div>
              </div>
              <button onClick={() => setExplanationModalOpen(false)} className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center justify-center">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto">
              {explanationLoading ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
                  <p className="text-slate-500 dark:text-slate-400 font-medium animate-pulse">Analyzing clinical data...</p>
                </div>
              ) : explanationData ? (
                <div className="space-y-6">
                  {/* Summary */}
                  <div className="bg-indigo-50/50 dark:bg-indigo-900/20 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800/50">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2">
                      <i className="fa-solid fa-stethoscope"></i> Case Summary
                    </h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {explanationData.summary}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Key Findings */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-400 mb-3 flex items-center gap-2">
                        <i className="fa-solid fa-magnifying-glass"></i> Key Findings
                      </h4>
                      <ul className="space-y-2">
                        {explanationData.keyFindings.map((item, i) => (
                          <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex gap-2">
                            <span className="text-emerald-500 mt-0.5">•</span>
                            <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 dark:text-slate-200">$1</strong>') }}></span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Management Rationale */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-400 mb-3 flex items-center gap-2">
                        <i className="fa-solid fa-user-check"></i> Management
                      </h4>
                      <ul className="space-y-2">
                        {explanationData.managementRationale.map((item, i) => (
                          <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex gap-2">
                            <span className="text-blue-500 mt-0.5">•</span>
                            <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 dark:text-slate-200">$1</strong>') }}></span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <div className="text-[10px] text-slate-400 dark:text-slate-500 text-center pt-4 border-t border-slate-100 dark:border-slate-800 italic">
                    {explanationData.disclaimer}
                  </div>
                </div>
              ) : (
                <div className="text-center py-10 text-slate-500">
                  <p>Failed to load explaination.</p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setExplanationModalOpen(false)}
                className="px-4 py-2 bg-indigo-950 dark:bg-indigo-900 text-white text-sm font-bold rounded-lg hover:bg-black transition-colors shadow-lg"
              >
                Close Analysis
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default TemplateDetails;
