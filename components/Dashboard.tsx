import React from 'react';

const models = [
  { title: 'Image 3.0', img: 'https://picsum.photos/seed/model1/400/240' },
  { title: 'Studio Ghibli', img: 'https://picsum.photos/seed/model2/400/240' },
  { title: 'Realism 3.0', img: 'https://picsum.photos/seed/model3/400/240' },
  { title: 'Realism 3.2 (ultra)', img: 'https://picsum.photos/seed/model4/400/240' },
  { title: 'Realism 3.1', img: 'https://picsum.photos/seed/model5/400/240' },
];

const community = [
  { title: '90s anime (brown)', img: 'https://picsum.photos/seed/community1/400/240' },
  { title: 'CoGencrafter Carto...', img: 'https://picsum.photos/seed/community2/400/240' },
  { title: 'Fantasy', img: 'https://picsum.photos/seed/community3/400/240' },
  { title: 'Japanese', img: 'https://picsum.photos/seed/community4/400/240' },
  { title: 'Monsters', img: 'https://picsum.photos/seed/community5/400/240' },
];

const exclusiveModels = [
  { title: 'Logos', img: 'https://picsum.photos/seed/exclusive1/400/240' },
  { title: 'Textify', img: 'https://picsum.photos/seed/exclusive2/400/240' },
  { title: 'Realistic Details', img: 'https://picsum.photos/seed/exclusive3/400/240' },
  { title: 'Tattoos', img: 'https://picsum.photos/seed/exclusive4/400/240' },
  { title: 'Professional Portrait', img: 'https://picsum.photos/seed/exclusive5/400/240' },
];

const moreModels = [
  { title: 'Olafs-More Eerie Pe...', img: 'https://picsum.photos/seed/more1/400/240' },
  { title: 'Misc Dall-E', img: 'https://picsum.photos/seed/more2/400/240' },
  { title: 'ConceptChar', img: 'https://picsum.photos/seed/more3/400/240' },
  { title: 'LACE', img: 'https://picsum.photos/seed/more4/400/240' },
  { title: 'Ultimate Muscle V...', img: 'https://picsum.photos/seed/more5/400/240' },
];

const Card: React.FC<{title: string; img: string; isExclusive?: boolean}> = ({ title, img, isExclusive }) => (
  <div className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-colors cursor-pointer relative">
    <img src={img} alt={title} className="w-full h-32 object-cover" />
    <div className="p-4">
      <h3 className="text-sm font-medium text-white">{title}</h3>
    </div>
    {isExclusive && (
      <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">PRO</div>
    )}
  </div>
);

const Sidebar: React.FC = () => (
  <aside className="w-64 bg-gray-900 border-r border-gray-700 h-screen overflow-y-auto">
    <div className="p-4">
      <div className="space-y-2">
        <div className="flex items-center space-x-2 bg-gray-800 rounded-lg p-3">
          <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
            <span className="text-white text-sm">⚡</span>
          </div>
          <span className="text-white font-medium">Generate</span>
        </div>
        
        <div className="flex items-center space-x-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg p-3 cursor-pointer">
          <div className="w-6 h-6 flex items-center justify-center">
            <span className="text-lg">🔍</span>
          </div>
          <span>Explore</span>
        </div>
      </div>
      
      <div className="mt-6">
        <div className="text-gray-400 text-sm font-medium mb-2">My Library</div>
        <div className="space-y-1">
          <div className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg p-2 cursor-pointer text-sm">Creations</div>
          <div className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg p-2 cursor-pointer text-sm">Collections</div>
          <div className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg p-2 cursor-pointer text-sm">Uploads</div>
          <div className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg p-2 cursor-pointer text-sm">Models</div>
          <div className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg p-2 cursor-pointer text-sm">My Likes</div>
        </div>
      </div>
      
      <div className="mt-6">
        <div className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg p-2 cursor-pointer text-sm flex items-center space-x-2">
          <span>🔍</span>
          <span>Search</span>
        </div>
      </div>
      
      <div className="mt-6">
        <div className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg p-2 cursor-pointer text-sm flex items-center space-x-2">
          <span>👤</span>
          <span>Profile</span>
        </div>
      </div>
      
      <div className="mt-6">
        <div className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg p-2 cursor-pointer text-sm">Help</div>
        <div className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg p-2 cursor-pointer text-sm">More</div>
      </div>
    </div>
  </aside>
);

const GeneratePanel: React.FC = () => (
  <div className="w-80 bg-gray-900 border-r border-gray-700 p-4">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-2">
        <button className="bg-purple-600 text-white px-3 py-1 rounded text-sm">Image Gen</button>
        <button className="text-gray-400 px-3 py-1 rounded text-sm hover:text-white">Video Gen</button>
      </div>
    </div>
    
    <div className="bg-purple-600 text-white p-3 rounded-lg mb-4 text-sm">
      Try these features with GenCraft Pro ✨
      <div className="text-purple-200 mt-1">Describe image to generate</div>
    </div>
    
    <div className="mb-4">
      <textarea 
        className="w-full bg-gray-800 text-white rounded-lg p-3 text-sm resize-none border border-gray-700 focus:border-purple-500 focus:outline-none" 
        rows={4}
        placeholder="What do you want to see? Tip: Start your prompt with a subject (like 'a cat'). Also, be specific in your prompt or add a 'style' for best results"
      />
    </div>
    
    <div className="flex space-x-2 mb-4">
      <button className="flex items-center space-x-2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm hover:bg-gray-700">
        <span>🔒</span>
        <span>Add Photo</span>
      </button>
      <button className="flex items-center space-x-2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm hover:bg-gray-700">
        <span>✏️</span>
        <span>Style (op)</span>
      </button>
    </div>
    
    <div className="mb-4">
      <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 flex items-center justify-center space-x-2">
        <span>Create your own Custom Style with Style Builder</span>
        <span>→</span>
      </button>
    </div>
    
    <div className="mb-4">
      <div className="text-white text-sm mb-2">Select Model</div>
      <div className="bg-gray-800 rounded-lg p-3">
        <div className="text-white text-sm">Featured Model</div>
        <div className="text-gray-400 text-xs">Image 3.0</div>
      </div>
    </div>
    
    <div className="mb-4">
      <label className="flex items-center space-x-2 text-white text-sm">
        <input type="checkbox" className="rounded" />
        <span>Blend Mode</span>
      </label>
    </div>
    
    <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700">
      ✨ GENERATE
    </button>
    
    <div className="text-center text-gray-400 text-sm mt-2">4 prompts left</div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      <GeneratePanel />
      
      {/* Main content area */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-white">Model Gallery</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input 
                  type="search" 
                  placeholder="Search Models" 
                  className="bg-gray-800 text-white rounded-lg px-4 py-2 pl-10 w-80 border border-gray-700 focus:border-purple-500 focus:outline-none"
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <button className="text-white bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700">
                View all features
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold text-white mb-4">Try these</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {models.map((model) => (
                <Card key={model.title} title={model.title} img={model.img} />
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
              <span>🏆</span>
              <span>Community Loved</span>
              <span>🏆</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {community.map((model) => (
                <Card key={model.title} title={model.title} img={model.img} />
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {moreModels.map((model) => (
              <Card key={model.title} title={model.title} img={model.img} />
            ))}
          </div>
          
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-white mb-4">Exclusive models</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {exclusiveModels.map((model) => (
                <Card key={model.title} title={model.title} img={model.img} isExclusive />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
