import React from "react";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

const AgentTeam = () => {
  const agents = [
    {
      name: "Jack John",
      role: "Designer",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&q=80",
    },
    {
      name: "Krista John",
      role: "Designer",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&q=80",
    },
    {
      name: "Roger Jackson",
      role: "Designer",
      image:
        "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?w=500&q=80",
    },
    {
      name: "Johnny English",
      role: "Designer",
      image:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&q=80",
    },
  ];

  return (
    <div className="container-2xl mt-16 lg:mt-24 dark:bg-slate-900">
      {/* Header */}
      <div className="flex-center-center flex-col pb-8">
        <h1 className="sub-header  dark:text-white">Meet The Agent Team</h1>
        <p className="paragraph">
          A great platform to buy, sell and rent your properties without any
          agent or commissions.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto px-4">
        {agents.map((agent, index) => (
          <div key={index} className="text-center group">
            {/* Image */}
            <div className="relative w-48 h-48 mx-auto">
              <img
                src={agent.image}
                alt={agent.name}
                className="w-full h-full object-cover rounded-full transition duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center gap-2">
                <div className="w-7 h-7 bg-green-600 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-green-700">
                  <FiFacebook />
                </div>
                <div className="w-7 h-7 bg-green-600 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-green-700">
                  <FiInstagram />
                </div>
                <div className="w-7 h-7 bg-green-600 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-green-700">
                  <FiLinkedin />
                </div>
              </div>
            </div>

            {/* Text */}
            <h3 className="mt-6 font-semibold text-lg dark:text-white">
              {agent.name}
            </h3>
            <p className="text-gray-500">{agent.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentTeam;
