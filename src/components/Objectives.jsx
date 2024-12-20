import React from 'react';
import { 
  Gavel, 
  Users, 
  Flag, 
  TrendingUp, 
  HandshakeIcon, 
  GraduationCap 
} from 'lucide-react';

const ObjectiveItem = ({ icon: Icon, title }) => (
  <div className="flex flex-col items-center text-center p-4 space-y-3">
    <div className="p-3 rounded-full bg-white/10">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <p className="text-sm font-medium text-white max-w-[120px]">{title}</p>
  </div>
);

const ObjectivesSection = () => {
  const objectives = [
    { icon: Gavel, title: "Policy Advisory Leadership" },
    { icon: Users, title: "Community Engagement" },
    { icon: Flag, title: "British High Commission Partnership" },
    { icon: TrendingUp, title: "National Development" },
    { icon: HandshakeIcon, title: "Strategic Partnerships" },
    { icon: GraduationCap, title: "Professional Development" }
  ];

  return (
    <div className="w-full bg-[#1e2332] py-12"> {/* Updated darker navy background color */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Our Objectives
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
          {objectives.map((objective, index) => (
            <ObjectiveItem
              key={index}
              icon={objective.icon}
              title={objective.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ObjectivesSection;