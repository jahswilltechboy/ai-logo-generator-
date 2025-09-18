import React, { useState } from 'react';
import geminiService from '../src/services/geminiService';

const models = [
  { title: 'Image 3.0', tag: 'Try these', img: 'https://picsum.photos/seed/model1/400/240', selected: true },
  { title: 'Studio Ghibli', tag: 'Try these', img: 'https://picsum.photos/seed/model2/400/240' },
  { title: 'Realism 3.0', tag: 'Try these', img: 'https://picsum.photos/seed/model3/400/240' },
  { title: 'Realism 3.2 (ultra)', tag: 'Try these', img: 'https://picsum.photos/seed/model4/400/240' },
  { title: 'Realism 3.1', tag: 'Try these', img: 'https://picsum.photos/seed/model5/400/240' },
];

const communityModels = [
  { title: '90s anime (brown)', img: 'https://picsum.photos/seed/community1/400/240' },
  { title: 'GoGencrafter Carto...', img: 'https://picsum.photos/seed/community2/400/240' },
  { title: 'Fantasy', img: 'https://picsum.photos/seed/community3/400/240' },
  { title: 'Japanese', img: 'https://picsum.photos/seed/community4/400/240' },
  { title: 'Monsters', img: 'https://picsum.photos/seed/community5/400/240' },
];

const additionalModels = [
  { title: 'Olafs-More Eerie Pe...', img: 'https://picsum.photos/seed/additional1/400/240' },
  { title: 'Misc Dall-E', img: 'https://picsum.photos/seed/additional2/400/240' },
  { title: 'ConceptChar', img: 'https://picsum.photos/seed/additional3/400/240' },
  { title: 'LACE', img: 'https://picsum.photos/seed/additional4/400/240' },
  { title: 'Ultimate Muscle V...', img: 'https://picsum.photos/seed/additional5/400/240' },
];

const exclusiveModels = [
  { title: 'Logos', img: 'https://picsum.photos/seed/exclusive1/400/240', isPro: true },
  { title: 'Textify', img: 'https://picsum.photos/seed/exclusive2/400/240', isPro: true },
  { title: 'Realistic Details', img: 'https://picsum.photos/seed/exclusive3/400/240', isPro: true },
  { title: 'Tattoos', img: 'https://picsum.photos/seed/exclusive4/400/240', isPro: true },
  { title: 'Professional Port...', img: 'https://picsum.photos/seed/exclusive5/400/240', isPro: true },
];

const niches = [
  'Technology', 'Fashion', 'Food & Beverage', 'Health & Wellness', 'Finance', 'Education', 
  'Real Estate', 'Travel', 'Beauty & Cosmetics', 'Sports & Fitness', 'Entertainment', 
  'Automotive', 'Home & Garden', 'E-commerce', 'Nonprofit', 'Marketing & Advertising', 
  'Arts & Design', 'Photography', 'Consulting', 'Legal', 'Construction', 'Agriculture', 
  'Gaming', 'Pets', "Children's Products"
];

const Card: React.FC<{
  title: string; 
  img: string; 
  subtitle?: string; 
  selected?: boolean; 
  isPro?: boolean; 
  suggestedName?: string; 
  onCopied?: (name: string) => void;
  onSelect?: () => void;
}> = ({ title, img, subtitle, selected, isPro, suggestedName, onCopied, onSelect }) => {
  const [copied, setCopied] = useState(false);
  const nameToShow = suggestedName || title;

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(nameToShow);
      setCopied(true);
      onCopied?.(nameToShow);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  const handleCardClick = () => {
    onSelect?.();
  };

  return (
    <div 
      className={`bg-white rounded-xl border overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer ${
        selected ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200 hover:border-blue-300'
      }`}
      onClick={handleCardClick}
    >
      <div className="relative">
        <img src={img} alt={title} className="w-full h-32 object-cover" />
        {isPro && (
          <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-semibold">PRO</span>
        )}
        {selected && (
          <div className="absolute top-2 left-2 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-3">
        {subtitle && <p className="text-xs font-semibold text-blue-600 mb-1">{subtitle}</p>}
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-800 truncate flex-1 mr-2">{nameToShow}</h3>
          <button
            type="button"
            onClick={handleCopy}
            className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 border border-gray-200 transition-colors"
            aria-label={`Copy ${nameToShow}`}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
};

const SidebarItem: React.FC<{
  icon: React.ReactNode; 
  label: string; 
  active?: boolean; 
  hasSubmenu?: boolean; 
  badge?: string;
}> = ({ icon, label, active, hasSubmenu, badge }) => (
  <div className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${
    active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
  }`}>
    <div className="flex items-center space-x-3">
      <div className="w-5 h-5">{icon}</div>
      <span className="text-sm font-medium">{label}</span>
    </div>
    <div className="flex items-center space-x-2">
      {badge && (
        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-semibold">{badge}</span>
      )}
      {hasSubmenu && (
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      )}
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Generate Business Name');
  const [showGenerationPanel, setShowGenerationPanel] = useState(false);
  const [selectedBusinessTool, setSelectedBusinessTool] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Form states
  const [fullName, setFullName] = useState('');
  const [businessDescription, setBusinessDescription] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [niche, setNiche] = useState('');
  
  // UI states
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('Image 3.0');
  const [promptsLeft, setPromptsLeft] = useState(4);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');
  const [toast, setToast] = useState('');
  const [step, setStep] = useState<'input' | 'suggestions' | 'logo'>('input');

  const handleBusinessToolClick = (tool: string) => {
    setSelectedBusinessTool(tool);
    setShowGenerationPanel(true);
    setSidebarOpen(false);
    setStep('input');
    // Reset form when switching tools
    setFullName('');
    setBusinessDescription('');
    setBusinessName('');
    setNiche('');
    setSuggestions([]);
    setSelectedSuggestion('');
    setError('');
  };

  const handleGenerateNames = async () => {
    if (!fullName.trim() && !businessDescription.trim()) {
      setError('Please provide at least your name or business description');
      return;
    }

    setIsGenerating(true);
    setError('');
    setSuggestions([]);

    try {
      const totalCards = models.length + communityModels.length + additionalModels.length + exclusiveModels.length;
      const aiSuggestions = await geminiService.generateBusinessNames(
        fullName,
        businessDescription,
        niche,
        Math.max(totalCards, 20)
      );
      
      setSuggestions(aiSuggestions);
      setStep('suggestions');
      setPromptsLeft((v) => (v > 0 ? v - 1 : 0));
    } catch (err) {
      console.error('AI suggestion failed:', err);
      setError('Failed to generate AI suggestions. Please check your API key and try again.');
      setSuggestions([]);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerateLogo = () => {
    const nameToUse = activeTab === 'Use Existing Name' ? businessName : selectedSuggestion;
    
    if (!nameToUse.trim()) {
      setError('Please select a business name or enter your existing business name');
      return;
    }

    if (!businessDescription.trim()) {
      setError('Please provide a business description');
      return;
    }

    if (!selectedModel) {
      setError('Please select a logo style');
      return;
    }

    setStep('logo');
    setError('');
    setToast(`Generating logo for "${nameToUse}" using ${selectedModel} style...`);
    setTimeout(() => setToast(''), 3000);
  };

  const handleSelectSuggestion = (suggestion: string) => {
    setSelectedSuggestion(suggestion);
  };

  const handleModelSelect = (modelTitle: string) => {
    setSelectedModel(modelTitle);
  };

  const handleBackToInput = () => {
    setStep('input');
    setSuggestions([]);
    setSelectedSuggestion('');
    setError('');
  };

  const handleBackToSuggestions = () => {
    setStep('suggestions');
    setError('');
  };

  const suggestionsLen = suggestions.length;
  const tryOffset = 0;
  const communityOffset = models.length;
  const additionalOffset = models.length + communityModels.length;
  const exclusiveOffset = models.length + communityModels.length + additionalModels.length;

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Mobile quick actions */}
      <div className="md:hidden px-4 py-3 border-b border-gray-200 bg-white flex items-center justify-between">
        <button
          type="button"
          className="inline-flex items-center justify-center px-3 py-2 rounded-lg border border-gray-200 text-gray-700 hover:text-blue-600 hover:border-blue-300"
          onClick={() => setSidebarOpen((v) => !v)}
          aria-expanded={sidebarOpen}
          aria-controls="dashboard-sidebar"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          Menu
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center px-3 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700"
          onClick={() => setShowGenerationPanel(true)}
        >
          Open Generator
        </button>
      </div>

      <div className="flex relative">
        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 bg-black/30 md:hidden" onClick={() => setSidebarOpen(false)} aria-hidden="true"></div>
        )}

        {/* Left Sidebar */}
        <aside id="dashboard-sidebar" className="hidden md:block w-64 bg-white border-r border-gray-200 min-h-screen p-4">
          <div className="space-y-6">
            {/* Explore Section */}
            <div>
              <SidebarItem 
                icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
                label="Business Plan" 
                hasSubmenu={true}
              />
              <div className="ml-8 mt-2 space-y-1">
                <div className="text-sm text-gray-500 py-1 cursor-pointer hover:text-blue-600" onClick={() => handleBusinessToolClick('AI Logo Generator')}>AI Logo Generator</div>
                <div className="text-sm text-gray-500 py-1 cursor-pointer hover:text-blue-600" onClick={() => handleBusinessToolClick('Brand Kit')}>Brand Kit</div>
                <div className="text-sm text-gray-500 py-1 cursor-pointer hover:text-blue-600" onClick={() => handleBusinessToolClick('Business Cards Generator')}>Business Cards Generator</div>
                <div className="text-sm text-gray-500 py-1 cursor-pointer hover:text-blue-600" onClick={() => handleBusinessToolClick('Poster Generator')}>Poster Generator</div>
                <div className="text-sm text-gray-500 py-1 cursor-pointer hover:text-blue-600" onClick={() => handleBusinessToolClick('Social Media Profile Generator')}>Social Media Profile Generator</div>
                <div className="text-sm text-gray-500 py-1 cursor-pointer hover:text-blue-600" onClick={() => handleBusinessToolClick('Flyer')}>Flyer</div>
                <div className="text-sm text-gray-500 py-1 cursor-pointer hover:text-blue-600" onClick={() => handleBusinessToolClick('Premium Website')}>Premium Website</div>
              </div>
            </div>

            {/* My Library Section */}
            <div>
              <SidebarItem 
                icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>}
                label="My Library" 
                hasSubmenu={true}
              />
              <div className="ml-8 mt-2 space-y-1">
                <div className="text-sm text-gray-500 py-1">Creations</div>
                <div className="text-sm text-gray-500 py-1">Collections</div>
                <div className="text-sm text-gray-500 py-1">Uploads</div>
                <div className="text-sm text-gray-500 py-1">Models</div>
                <div className="text-sm text-gray-500 py-1">My Likes</div>
              </div>
            </div>

            {/* Other Menu Items */}
            <div className="space-y-2">
              <SidebarItem 
                icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
                label="Search" 
              />
              <SidebarItem 
                icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
                label="Profile" 
              />
              <SidebarItem 
                icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                label="Help" 
              />
              <SidebarItem 
                icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>}
                label="More" 
              />
            </div>
          </div>
        </aside>

        {/* Mobile off-canvas sidebar */}
        <aside className={`md:hidden fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200 p-4 transform transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`} aria-hidden={!sidebarOpen}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Menu</h2>
            <button
              aria-label="Close menu"
              className="inline-flex items-center justify-center p-2 rounded-lg border border-gray-200 text-gray-700 hover:text-blue-600 hover:border-blue-300"
              onClick={() => setSidebarOpen(false)}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div className="space-y-6">
            <div>
              <SidebarItem 
                icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
                label="Business Plan" 
                hasSubmenu={true}
              />
              <div className="ml-8 mt-2 space-y-1">
                <div className="text-sm text-gray-500 py-1 cursor-pointer hover:text-blue-600" onClick={() => handleBusinessToolClick('AI Logo Generator')}>AI Logo Generator</div>
                <div className="text-sm text-gray-500 py-1 cursor-pointer hover:text-blue-600" onClick={() => handleBusinessToolClick('Brand Kit')}>Brand Kit</div>
                <div className="text-sm text-gray-500 py-1 cursor-pointer hover:text-blue-600" onClick={() => handleBusinessToolClick('Business Cards Generator')}>Business Cards Generator</div>
                <div className="text-sm text-gray-500 py-1 cursor-pointer hover:text-blue-600" onClick={() => handleBusinessToolClick('Poster Generator')}>Poster Generator</div>
                <div className="text-sm text-gray-500 py-1 cursor-pointer hover:text-blue-600" onClick={() => handleBusinessToolClick('Social Media Profile Generator')}>Social Media Profile Generator</div>
                <div className="text-sm text-gray-500 py-1 cursor-pointer hover:text-blue-600" onClick={() => handleBusinessToolClick('Flyer')}>Flyer</div>
                <div className="text-sm text-gray-500 py-1 cursor-pointer hover:text-blue-600" onClick={() => handleBusinessToolClick('Premium Website')}>Premium Website</div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex">
          {/* Generation Panel */}
          {showGenerationPanel && (
            <>
              {/* Mobile overlay for generator */}
              <div className="fixed inset-0 z-40 bg-black/30 md:hidden" onClick={() => setShowGenerationPanel(false)} aria-hidden="true"></div>
              <div className="md:w-96 bg-white border-r border-gray-200 flex flex-col fixed inset-0 z-50 md:static md:inset-auto md:z-auto">
                {/* Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-gray-900">AI Logo Generator</h2>
                    <button
                      onClick={() => setShowGenerationPanel(false)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label="Close generator"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Progress Steps */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                      step === 'input' ? 'bg-blue-600 text-white' : 
                      step === 'suggestions' || step === 'logo' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      1
                    </div>
                    <div className={`flex-1 h-1 rounded ${
                      step === 'suggestions' || step === 'logo' ? 'bg-green-500' : 'bg-gray-200'
                    }`}></div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                      step === 'suggestions' ? 'bg-blue-600 text-white' : 
                      step === 'logo' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      2
                    </div>
                    <div className={`flex-1 h-1 rounded ${
                      step === 'logo' ? 'bg-green-500' : 'bg-gray-200'
                    }`}></div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                      step === 'logo' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      3
                    </div>
                  </div>

                  {/* Tab Navigation */}
                  <div className="flex bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setActiveTab('Generate Business Name')}
                      className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeTab === 'Generate Business Name' 
                          ? 'bg-white text-blue-600 shadow-sm' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Generate Name
                    </button>
                    <button
                      onClick={() => setActiveTab('Use Existing Name')}
                      className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeTab === 'Use Existing Name' 
                          ? 'bg-white text-blue-600 shadow-sm' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Use Existing
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 overflow-y-auto">
                  {step === 'input' && (
                    <div className="space-y-4">
                      {activeTab === 'Generate Business Name' ? (
                        <>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Your Name <span className="text-gray-400">(optional)</span>
                            </label>
                            <input
                              type="text"
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                              placeholder="e.g., John Smith"
                              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Business Description <span className="text-red-500">*</span>
                            </label>
                            <textarea
                              rows={4}
                              value={businessDescription}
                              onChange={(e) => setBusinessDescription(e.target.value)}
                              placeholder="Describe what your business does, your target audience, and what makes you unique..."
                              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Industry/Niche <span className="text-gray-400">(optional)</span>
                            </label>
                            <select
                              value={niche}
                              onChange={(e) => setNiche(e.target.value)}
                              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            >
                              <option value="">Select an industry</option>
                              {niches.map((n) => (
                                <option key={n} value={n}>{n}</option>
                              ))}
                            </select>
                          </div>

                          <button
                            onClick={handleGenerateNames}
                            disabled={isGenerating || (!fullName.trim() && !businessDescription.trim())}
                            className={`w-full text-white text-base font-semibold px-4 py-3 rounded-lg transition-colors ${
                              isGenerating || (!fullName.trim() && !businessDescription.trim())
                                ? 'bg-gray-400 cursor-not-allowed' 
                                : 'bg-blue-600 hover:bg-blue-700'
                            }`}
                          >
                            {isGenerating ? (
                              <div className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Generating Names...
                              </div>
                            ) : (
                              'Generate Business Names'
                            )}
                          </button>
                        </>
                      ) : (
                        <>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Business Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              value={businessName}
                              onChange={(e) => setBusinessName(e.target.value)}
                              placeholder="Enter your existing business name"
                              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Business Description <span className="text-red-500">*</span>
                            </label>
                            <textarea
                              rows={4}
                              value={businessDescription}
                              onChange={(e) => setBusinessDescription(e.target.value)}
                              placeholder="Describe what your business does, your values, and target audience..."
                              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Industry/Niche <span className="text-gray-400">(optional)</span>
                            </label>
                            <select
                              value={niche}
                              onChange={(e) => setNiche(e.target.value)}
                              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            >
                              <option value="">Select an industry</option>
                              {niches.map((n) => (
                                <option key={n} value={n}>{n}</option>
                              ))}
                            </select>
                          </div>

                          <button
                            onClick={() => setStep('logo')}
                            disabled={!businessName.trim() || !businessDescription.trim()}
                            className={`w-full text-white text-base font-semibold px-4 py-3 rounded-lg transition-colors ${
                              !businessName.trim() || !businessDescription.trim()
                                ? 'bg-gray-400 cursor-not-allowed' 
                                : 'bg-blue-600 hover:bg-blue-700'
                            }`}
                          >
                            Continue to Logo Generation
                          </button>
                        </>
                      )}

                      {error && (
                        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                          <p className="text-sm text-red-600">{error}</p>
                        </div>
                      )}

                      <p className="text-xs text-gray-500 text-center">{promptsLeft} AI generations remaining</p>
                    </div>
                  )}

                  {step === 'suggestions' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">Choose Your Business Name</h3>
                        <button
                          onClick={handleBackToInput}
                          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                        >
                          ← Back
                        </button>
                      </div>
                      
                      <p className="text-sm text-gray-600">Select a name that resonates with your brand:</p>
                      
                      <div className="space-y-2 max-h-64 overflow-y-auto">
                        {suggestions.map((suggestion, index) => (
                          <div
                            key={index}
                            onClick={() => handleSelectSuggestion(suggestion)}
                            className={`p-3 rounded-lg border cursor-pointer transition-all ${
                              selectedSuggestion === suggestion
                                ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                                : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-gray-900">{suggestion}</span>
                              {selectedSuggestion === suggestion && (
                                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={handleGenerateLogo}
                        disabled={!selectedSuggestion}
                        className={`w-full text-white text-base font-semibold px-4 py-3 rounded-lg transition-colors ${
                          !selectedSuggestion
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                      >
                        Generate Logo for "{selectedSuggestion}"
                      </button>
                    </div>
                  )}

                  {step === 'logo' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">Choose Logo Style</h3>
                        <button
                          onClick={activeTab === 'Generate Business Name' ? handleBackToSuggestions : handleBackToInput}
                          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                        >
                          ← Back
                        </button>
                      </div>
                      
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-start space-x-3">
                          <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <p className="text-sm font-medium text-blue-900">
                              Business: {activeTab === 'Generate Business Name' ? selectedSuggestion : businessName}
                            </p>
                            <p className="text-xs text-blue-700 mt-1">
                              Select a logo style below to generate your brand identity
                            </p>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600">Choose a style that matches your brand personality:</p>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Model Gallery */}
          <div className={`${showGenerationPanel ? 'flex-1' : 'w-full'} p-4 md:p-6`}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {step === 'logo' ? 'Choose Your Logo Style' : 'Model Gallery'}
                </h2>
                {step === 'logo' && (
                  <p className="text-sm text-gray-600 mt-1">
                    Select a style to generate your logo with AI
                  </p>
                )}
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-full md:w-auto">
                  <input 
                    type="search" 
                    placeholder="Search Models" 
                    className="w-full md:w-64 rounded-lg border border-gray-300 px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-600" 
                  />
                  <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Try these section */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
                ✨ {step === 'logo' ? 'Recommended Styles' : 'AI Generated Suggestions'}
                {suggestions.length > 0 && step !== 'logo' && (
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                    {suggestions.length} names
                  </span>
                )}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {models.map((model, index) => (
                  <Card
                    key={index}
                    title={model.title}
                    img={model.img}
                    subtitle={model.tag}
                    selected={step === 'logo' ? selectedModel === model.title : model.selected}
                    suggestedName={suggestionsLen && step !== 'logo' ? suggestions[(tryOffset + index) % suggestionsLen] : undefined}
                    onCopied={(name) => setToast(`Copied "${name}"`) || setTimeout(() => setToast(''), 1200)}
                    onSelect={step === 'logo' ? () => handleModelSelect(model.title) : undefined}
                  />
                ))}
              </div>
            </div>

            {/* Community Loved section */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
                🏆 Community Loved
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {communityModels.map((model, index) => (
                  <Card
                    key={index}
                    title={model.title}
                    img={model.img}
                    selected={step === 'logo' ? selectedModel === model.title : false}
                    suggestedName={suggestionsLen && step !== 'logo' ? suggestions[(communityOffset + index) % suggestionsLen] : undefined}
                    onCopied={(name) => setToast(`Copied "${name}"`) || setTimeout(() => setToast(''), 1200)}
                    onSelect={step === 'logo' ? () => handleModelSelect(model.title) : undefined}
                  />
                ))}
              </div>
            </div>

            {/* Additional Models */}
            <div className="mb-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {additionalModels.map((model, index) => (
                  <Card
                    key={index}
                    title={model.title}
                    img={model.img}
                    selected={step === 'logo' ? selectedModel === model.title : false}
                    suggestedName={suggestionsLen && step !== 'logo' ? suggestions[(additionalOffset + index) % suggestionsLen] : undefined}
                    onCopied={(name) => setToast(`Copied "${name}"`) || setTimeout(() => setToast(''), 1200)}
                    onSelect={step === 'logo' ? () => handleModelSelect(model.title) : undefined}
                  />
                ))}
              </div>
            </div>

            {/* Exclusive models section */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Exclusive models</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {exclusiveModels.map((model, index) => (
                  <Card
                    key={index}
                    title={model.title}
                    img={model.img}
                    isPro={model.isPro}
                    selected={step === 'logo' ? selectedModel === model.title : false}
                    suggestedName={suggestionsLen && step !== 'logo' ? suggestions[(exclusiveOffset + index) % suggestionsLen] : undefined}
                    onCopied={(name) => setToast(`Copied "${name}"`) || setTimeout(() => setToast(''), 1200)}
                    onSelect={step === 'logo' ? () => handleModelSelect(model.title) : undefined}
                  />
                ))}
              </div>
            </div>

            {/* Generate Logo Button for Logo Step */}
            {step === 'logo' && (
              <div className="mt-8 flex justify-center">
                <button
                  onClick={handleGenerateLogo}
                  disabled={!selectedModel}
                  className={`px-8 py-3 rounded-lg font-semibold text-lg transition-colors ${
                    !selectedModel
                      ? 'bg-gray-400 text-white cursor-not-allowed' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Generate Logo with {selectedModel}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white text-sm px-4 py-3 rounded-lg shadow-lg max-w-sm">
          {toast}
        </div>
      )}
    </section>
  );
};

export default Dashboard;
