import React, { useState } from 'react';

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
  'Technology', 'Fashion', 'Food & Beverage', 'Health & Wellness', 'Finance', 'Education', 'Real Estate', 'Travel', 'Beauty & Cosmetics', 'Sports & Fitness', 'Entertainment', 'Automotive', 'Home & Garden', 'E-commerce', 'Nonprofit', 'Marketing & Advertising', 'Arts & Design', 'Photography', 'Consulting', 'Legal', 'Construction', 'Agriculture', 'Gaming', 'Pets', "Children's Products"
];

const Card: React.FC<{title: string; img: string; subtitle?: string; selected?: boolean; isPro?: boolean; suggestedName?: string; onCopied?: (name: string) => void}> = ({ title, img, subtitle, selected, isPro, suggestedName, onCopied }) => {
  const [copied, setCopied] = useState(false);
  const nameToShow = suggestedName || title;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(nameToShow);
      setCopied(true);
      onCopied?.(nameToShow);
      alert(`Copied "${nameToShow}"`);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      alert(`Copied "${nameToShow}"`);
    }
  };

  return (
    <div className={`bg-white rounded-xl border overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer ${selected ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'}`}>
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
          <h3 className="text-sm font-semibold text-gray-800 truncate">{nameToShow}</h3>
          <button
            type="button"
            onClick={handleCopy}
            className="ml-2 text-xs px-2 py-1 rounded bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 border border-gray-200"
            aria-label={`Copy ${nameToShow}`}
          >
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
};

const SidebarItem: React.FC<{icon: React.ReactNode; label: string; active?: boolean; hasSubmenu?: boolean; badge?: string}> = ({ icon, label, active, hasSubmenu, badge }) => (
  <div className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}>
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
  const [activeTab, setActiveTab] = useState('Suggest Business Name');
    const [showGenerationPanel, setShowGenerationPanel] = useState(false);
  const [selectedBusinessTool, setSelectedBusinessTool] = useState('');
  const [fullName, setFullName] = useState('');
  const [businessDescription, setBusinessDescription] = useState('');
  const [niche, setNiche] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [promptsLeft, setPromptsLeft] = useState(4);
  const [isSuggesting, setIsSuggesting] = useState(false);
  const [toast, setToast] = useState('');

  const handleBusinessToolClick = (tool: string) => {
    setSelectedBusinessTool(tool);
    setShowGenerationPanel(true);
  };

  const stopwords = new Set([
    'the','and','for','with','your','you','our','about','this','that','from','into','using','use','in','on','at','to','of','a','an','is','are','be','by','as','it','we','they','their','them','or','but'
  ]);

  const hashString = (str: string) => {
    let h = 0;
    for (let i = 0; i < str.length; i++) h = (h << 5) - h + str.charCodeAt(i);
    return Math.abs(h);
  };

  const titleCase = (s: string) => s.replace(/\w\S*/g, (t) => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase());

  const buildSuggestions = (targetCount: number) => {
    const base = `${fullName} ${businessDescription} ${niche}`.trim();
    const h = hashString(base || 'default');

    const parts = fullName.trim().split(/\s+/).filter(Boolean);
    const first = parts[0] || '';
    const last = parts[parts.length - 1] || '';
    const initials = parts.map(p => p[0]?.toUpperCase() || '').join('');

    const descWords = businessDescription
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter(w => w.length > 2 && !stopwords.has(w));

    const nicheWords = (niche || '').toLowerCase().split(/\s*&\s*|\s+/).filter(Boolean);

    const keywords = Array.from(new Set([...(nicheWords || []), ...descWords]));
    const key = titleCase(keywords[0] || 'Brand');
    const key2 = titleCase(keywords[1] || 'Studio');

    const suffixes = ['Labs','Studio','Works','Hub','Co','Solutions','Space','Forge','Nest','Pulse','Craft','Collective','Designs','Factory','Partners','Group','Concepts','Dynamics'];
    const prefixes = ['Neo','Blue','Prime','Bright','Smart','Quantum','Ever','True','Ultra','Hyper','Aero','Astra','Pixel','Vivid','Nova','Turbo','Meta','Cloud','Solid'];

    const namesSet = new Set<string>();
    const push = (s: string) => {
      const cleaned = s.replace(/\s+/g, ' ').trim();
      if (cleaned) namesSet.add(titleCase(cleaned));
    };

    const f = titleCase(first);
    const l = titleCase(last);

    let i = 0;
    while (namesSet.size < targetCount && i < targetCount * 10) {
      const sA = suffixes[(h + i) % suffixes.length];
      const sB = suffixes[(h + i + 3) % suffixes.length];
      const pA = prefixes[(h + i) % prefixes.length];
      const pB = prefixes[(h + i + 5) % prefixes.length];
      const kA = titleCase(keywords[(i) % Math.max(1, keywords.length)] || key);
      const kB = titleCase(keywords[(i + 1) % Math.max(1, keywords.length)] || key2);

      push(`${kA} ${sA}`);
      push(`${kB} ${sB}`);
      push(`${pA}${kA}`);
      push(`${pB}${kB}`);
      if (f) push(`${f} ${sB}`);
      if (l) push(`${l} ${sA}`);
      if (f && kA) push(`${f} ${kA}`);
      if (l && kB) push(`${kB} ${l}`);
      if (initials) push(`${initials} ${sA}`);
      if (f && l) push(`${f} & ${l} ${sB}`);

      // Add a numeric variant for extra uniqueness
      push(`${kA} ${sA} ${((h + i) % 9) + 1}`);
      i++;
    }

    return Array.from(namesSet).slice(0, targetCount);
  };

  const handleSuggest = () => {
    setIsSuggesting(true);
    const totalCards = models.length + communityModels.length + additionalModels.length + exclusiveModels.length;
    const list = buildSuggestions(totalCards);
    setSuggestions(list);
    setPromptsLeft((v) => (v > 0 ? v - 1 : 0));
    setIsSuggesting(false);
  };


  const suggestionsLen = suggestions.length;
  const tryOffset = 0;
  const communityOffset = models.length;
  const additionalOffset = models.length + communityModels.length;
  const exclusiveOffset = models.length + communityModels.length + additionalModels.length;

  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-4">
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

        {/* Main Content Area */}
        <div className="flex-1 flex">
          {/* Generation Panel */}
          {showGenerationPanel && (
          <div className="w-80 bg-white border-r border-gray-200 p-6">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-900">Logo Generator</h2>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <button
                onClick={() => setActiveTab('Suggest Business Name')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${activeTab === 'Suggest Business Name' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
              >
                Suggest Business Name
              </button>
              <button
                onClick={() => setActiveTab('Generate Logo')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${activeTab === 'Generate Logo' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
              >
                Generate Logo
              </button>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="John Doe"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Business description</label>
              <textarea
                rows={4}
                value={businessDescription}
                onChange={(e) => setBusinessDescription(e.target.value)}
                placeholder="Describe what your business or brand is about"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Niche</label>
              <select
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Select a niche</option>
                {niches.map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>

            <button
              onClick={handleSuggest}
              disabled={isSuggesting}
              className={`w-full text-white text-base font-bold px-4 py-3 rounded-full transition-colors mb-3 ${isSuggesting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
            >
              {isSuggesting ? 'Suggesting…' : 'Suggest'}
            </button>

            <p className="text-xs text-gray-500 text-center">{promptsLeft} prompts left</p>
          </div>
          )}

          {/* Model Gallery */}
          <div className={`${showGenerationPanel ? 'flex-1' : 'w-full'} p-6`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Model Gallery</h2>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <input 
                    type="search" 
                    placeholder="Search Models" 
                    className="w-64 rounded-lg border border-gray-300 px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-600" 
                  />
                  <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Try these section */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Try these</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {models.map((model, index) => (
                  <Card
                    key={index}
                    title={model.title}
                    img={model.img}
                    subtitle={model.tag}
                    selected={model.selected}
                    suggestedName={suggestionsLen ? suggestions[(tryOffset + index) % suggestionsLen] : undefined}
                    onCopied={(name) => setToast(`Copied \"${name}\"`) || setTimeout(() => setToast(''), 1200)}
                  />
                ))}
              </div>
            </div>

            {/* Community Loved section */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
                🏆 Community Loved ���
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {communityModels.map((model, index) => (
                  <Card
                    key={index}
                    title={model.title}
                    img={model.img}
                    suggestedName={suggestionsLen ? suggestions[(communityOffset + index) % suggestionsLen] : undefined}
                    onCopied={(name) => setToast(`Copied \"${name}\"`) || setTimeout(() => setToast(''), 1200)}
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
                    suggestedName={suggestionsLen ? suggestions[(additionalOffset + index) % suggestionsLen] : undefined}
                    onCopied={(name) => setToast(`Copied \"${name}\"`) || setTimeout(() => setToast(''), 1200)}
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
                    suggestedName={suggestionsLen ? suggestions[(exclusiveOffset + index) % suggestionsLen] : undefined}
                    onCopied={(name) => setToast(`Copied \"${name}\"`) || setTimeout(() => setToast(''), 1200)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {toast && (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg shadow-lg">{toast}</div>
      )}
    </section>
  );
};

export default Dashboard;
