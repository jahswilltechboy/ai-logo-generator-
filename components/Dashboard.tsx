import React from 'react';

const models = [
  { title: 'Image 3.0', tag: 'Try these', img: 'https://picsum.photos/seed/model1/400/240' },
  { title: 'Studio Ghibli', tag: 'Try these', img: 'https://picsum.photos/seed/model2/400/240' },
  { title: 'Realism 3.0', tag: 'Try these', img: 'https://picsum.photos/seed/model3/400/240' },
  { title: 'Realism 3.2 (ultra)', tag: 'Try these', img: 'https://picsum.photos/seed/model4/400/240' },
  { title: 'Realism 3.1', tag: 'Try these', img: 'https://picsum.photos/seed/model5/400/240' },
];

const community = [
  { title: '90s anime (brown)', img: 'https://picsum.photos/seed/community1/400/240' },
  { title: 'Cartoon Portrait', img: 'https://picsum.photos/seed/community2/400/240' },
  { title: 'Fantasy', img: 'https://picsum.photos/seed/community3/400/240' },
  { title: 'Japanese', img: 'https://picsum.photos/seed/community4/400/240' },
  { title: 'Monsters', img: 'https://picsum.photos/seed/community5/400/240' },
];

const Card: React.FC<{title: string; img: string; subtitle?: string}> = ({ title, img, subtitle }) => (
  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <img src={img} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      {subtitle && <p className="text-xs font-semibold text-blue-600">{subtitle}</p>}
      <h3 className="text-sm font-semibold text-gray-800 mt-1">{title}</h3>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left panel: prompt and controls */}
          <aside className="lg:col-span-4 bg-white rounded-2xl border border-gray-200 p-5 shadow-sm h-max">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Generate</h2>
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-600 font-semibold">Image Gen</span>
                <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-600">Video Gen</span>
              </div>
            </div>

            <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mt-5">
              Describe image to generate
            </label>
            <textarea id="prompt" rows={6} className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="A serene lake with snowy mountains, golden hour lighting" />

            <div className="grid grid-cols-2 gap-3 mt-4">
              <button className="w-full bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-lg font-medium hover:bg-gray-50">Add Photo</button>
              <button className="w-full bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-lg font-medium hover:bg-gray-50">Style</button>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold text-gray-800">Select Model</p>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {['Image 3.0', 'Realism 3.0', 'Studio Ghibli'].map((m) => (
                  <button key={m} className="text-xs bg-white border border-gray-300 rounded-lg px-2 py-1 hover:border-blue-500 hover:text-blue-600">
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white text-base font-bold px-4 py-3 rounded-full mt-6 hover:bg-blue-700 transition-colors">
              Generate
            </button>
            <p className="text-xs text-gray-500 mt-3">5 prompts left</p>
          </aside>

          {/* Main content: model gallery */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Model Gallery</h2>
              <input type="search" placeholder="Search models" className="hidden md:block rounded-lg border border-gray-300 px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>

            <div className="mt-5">
              <h3 className="text-sm font-semibold text-gray-700">Try these</h3>
              <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-4">
                {models.map((m) => (
                  <Card key={m.title} title={m.title} img={m.img} subtitle={m.tag} />
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-gray-700">Community Loved</h3>
              <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-4">
                {community.map((m) => (
                  <Card key={m.title} title={m.title} img={m.img} />
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
