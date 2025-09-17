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
  const [activeTab, setActiveTab] = useState('Image Gen');
  const [prompt, setPrompt] = useState('');

  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-4">
          <div className="space-y-6">
            {/* Generate Section */}
            <div>
              <SidebarItem 
                icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>}
                label="Generate" 
                active={true}
              />
            </div>

            {/* Explore Section */}
            <div>
              <SidebarItem 
                icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
                label="Explore" 
                hasSubmenu={true}
              />
              <div className="ml-8 mt-2 space-y-1">
                <div className="text-sm text-gray-500 py-1">Creations</div>
                <div className="text-sm text-gray-500 py-1">Users</div>
                <div className="text-sm text-gray-500 py-1">Models</div>
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
          <div className="w-80 bg-white border-r border-gray-200 p-6">
            {/* Tab Navigation */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">Generate</h2>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setActiveTab('Image Gen')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${activeTab === 'Image Gen' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
                >
                  Image Gen
                </button>
                <button 
                  onClick={() => setActiveTab('Video Gen')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${activeTab === 'Video Gen' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
                >
                  Video Gen
                </button>
              </div>
            </div>

            {/* Pro Features Banner */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-lg mb-6">
              <div className="text-xs font-semibold mb-1">Try more features with Gencraft Pro</div>
              <div className="text-xs opacity-90">Describe image to generate</div>
            </div>

            {/* Prompt Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What do you want to see? Tip: Start your prompt with a subject (like "a cat"). Also, be specific in your prompt or add a "style" for best results
              </label>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={4} 
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none" 
                placeholder="A serene lake with snowy mountains, golden hour lighting"
              />
            </div>

            {/* Enhancement Options */}
            <div className="flex items-center gap-3 mb-4">
              <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Auto-Enhance
              </button>
              <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Ask Gennie
              </button>
            </div>

            {/* Add Photo and Style */}
            <div className="flex gap-3 mb-6">
              <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Photo
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
                Style (op)
              </button>
            </div>

            {/* Custom Style Builder */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold">Create your own Custom Style</div>
                  <div className="text-sm font-semibold">with Style Builder</div>
                </div>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Select Model */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-800 mb-3">Select Model</h3>
              <div className="bg-gray-50 p-3 rounded-lg flex items-center gap-3">
                <img src="https://picsum.photos/seed/selectedmodel/60/40" alt="Selected Model" className="w-15 h-10 rounded object-cover" />
                <div className="flex-1">
                  <div className="text-xs text-blue-600 font-semibold">Selected Model</div>
                  <div className="text-sm font-semibold text-gray-800">Image 3.0</div>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Blend Mode Toggle */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-medium text-gray-700">Blend Mode</span>
              <div className="relative">
                <input type="checkbox" className="sr-only" />
                <div className="w-10 h-6 bg-blue-600 rounded-full shadow-inner"></div>
                <div className="absolute w-4 h-4 bg-white rounded-full shadow top-1 right-1 transition"></div>
              </div>
            </div>

            {/* Advanced Settings */}
            <button className="text-blue-600 text-sm font-medium mb-6 hover:underline">
              + Advanced Settings
            </button>

            {/* Generate Button */}
            <button className="w-full bg-blue-600 text-white text-base font-bold px-4 py-3 rounded-full hover:bg-blue-700 transition-colors mb-3">
              ✨ GENERATE
            </button>
            <p className="text-xs text-gray-500 text-center">4 prompts left</p>
          </div>

          {/* Model Gallery */}
          <div className="flex-1 p-6">
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