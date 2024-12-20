import React from "react";
import { Gavel, Users, Briefcase, ExternalLink } from "lucide-react";

const OurServices = () => {
  const services = [
    {
      icon: <Gavel className="w-12 h-12 text-gray-700 mb-4" />,
      title: "Policy Advisory",
      description:
        "Our professionals work in different National, Regional and International policy making and shaping bodies and are available to advise policy groups on different thematic areas.",
    },
    {
      icon: <Users className="w-12 h-12 text-gray-700 mb-4" />,
      title: "Community Engagement",
      description:
        "As Chevening Alumni, we are passionate about empowering our local communities and are engaged in different capacity building activities like Digital inclusion, Legal outreach, public health education, Civil participation in national discourses.",
    },
    {
      icon: <Briefcase className="w-12 h-12 text-gray-700 mb-4" />,
      title: "Professional Consultancy",
      description:
        "Chevening Alumni has professionals in all key areas such as Law, Finance & Audit, Technology, International trade & development, Media, Environment and climate change, Education policy, Security studies, Public health. These professionals are accessible for consultancies in their areas of expertise.",
    },
  ];

  return (
    <section className="w-full px-10 py-8 flex flex-col items-center">
      <p className="text-center text-black text-4xl font-medium mb-8">Our Services</p>
      <div className="w-full flex justify-center flex-wrap">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-start p-4 min-w-[300px] max-w-[33%] flex-1 border-r border-gray-300 box-border"
          >
            {service.icon}
            <h3 className="text-center text-black text-2xl font-medium mb-2">
              {service.title}
            </h3>
            <p className="text-center text-black text-base font-light leading-6 mb-4">
              {service.description}
            </p>
            <button className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md text-sm font-medium hover:bg-gray-700">
              Learn More
              <ExternalLink className="w-4 h-4 ml-2" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
