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

const Card: React.FC<{title: string; img: string; subtitle?: string; selected?: boolean; isPro?: boolean}> = ({ title, img, subtitle, selected, isPro }) => (
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
      <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
    </div>
  </div>
);

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

  const handleBusinessToolClick = (tool: string) => {
    setSelectedBusinessTool(tool);
    setShowGenerationPanel(true);
  };

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
            <button className="w-full bg-blue-600 text-white text-base font-bold px-4 py-3 rounded-full hover:bg-blue-700 transition-colors mb-3">
              ✨ GENERATE
            </button>
            <p className="text-xs text-gray-500 text-center">4 prompts left</p>
          </div>
          )}

          {/* Model Gallery */}
          <div className={`${showGenerationPanel ? 'flex-1' : 'w-full'} p-6`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Model Gallery</h2>
              <div className="flex items-center gap-4">
                <button className="text-sm text-blue-600 hover:underline">View all features</button>
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
                  <Card key={index} title={model.title} img={model.img} subtitle={model.tag} selected={model.selected} />
                ))}
              </div>
            </div>

            {/* Community Loved section */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
                🏆 Community Loved 🏆
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {communityModels.map((model, index) => (
                  <Card key={index} title={model.title} img={model.img} />
                ))}
              </div>
            </div>

            {/* Additional Models */}
            <div className="mb-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {additionalModels.map((model, index) => (
                  <Card key={index} title={model.title} img={model.img} />
                ))}
              </div>
            </div>

            {/* Exclusive models section */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Exclusive models</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {exclusiveModels.map((model, index) => (
                  <Card key={index} title={model.title} img={model.img} isPro={model.isPro} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
