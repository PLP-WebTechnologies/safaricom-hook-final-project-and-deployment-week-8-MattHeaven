import React from 'react'
import chevKenya from '../assets/chevKenya.png';
import Logo from '../assets/CheveningLogo.png';

const About = () => {
  return (
    <>
      <div className="w-full h-full px-10 sm:px-20 lg:px-36 py-8 bg-[#fafaf9] flex flex-col space-y-8 items-start gap-4">
      {/* About Us Section */}
      
      <div className="flex flex-col space-y-4 ">
        
        <h1 className="text-3xl sm:text-4xl font-medium text-center text-black mt-20">
          About Us
        </h1>
        <img
          src={chevKenya}
          alt="Mission Image"
          className="w-full h-80 object-cover  mb-10"
        />
        <p className="text-lg sm:text-xl text-black">
          The <span className=''>Chevening Scholarship Alumni Association</span> is a registered
          community-based organization located in Nairobi, Kenya. Our
          membership comprises former scholars of the prestigious Chevening
          Scholarship program, sponsored by the British Foreign, Commonwealth,
          and Development Office (FCDO). These scholars pursued their master’s
          studies in the United Kingdom and have returned home to channel their
          expertise, experience, and passion into fostering the growth and
          development of the Republic of Kenya.
        </p>
      </div>

      {/* Our Vision Section */}
      <div className="flex flex-col space-y-4">
        <h2 className="text-3xl sm:text-4xl font-medium text-center text-black">
          Our Vision
        </h2>
        <p className="text-lg sm:text-xl text-black">
          To harness the collective synergies, knowledge, and expertise of
          Chevening Alumni into a force that propels Kenya’s development,
          fosters impactful policies, and creates opportunities for all.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="flex flex-col space-y-4">
        <h2 className="text-3xl sm:text-4xl font-medium text-center text-black">
          Our Mission
        </h2>
        <p className="text-lg sm:text-xl text-black">
          To be a driving force for national and local development by
          championing good governance, economic growth, human rights, climate
          action, and active community engagement while strengthening Kenya’s
          ties with the United Kingdom.
        </p>
        <img
          src="https://via.placeholder.com/982x315"
          alt="Mission Image"
          className="w-full h-80 object-cover"
        />
      </div>

      {/* Our Objectives Section */}
      <div className="flex flex-col space-y-4">
        <h2 className="text-3xl sm:text-4xl font-medium text-center text-black">
          Our Objectives
        </h2>
        <p className="text-lg sm:text-xl text-black space-y-2">
          <strong>Policy Leadership:</strong> To be the leading advisory group
          across governance, economic development, technology, media, law, and
          business sectors.
          <br />
          <strong>Community Development:</strong> To enhance Chevening
          scholars’ active engagement in civil discourse and impactful
          community initiatives.
          <br />
          <strong>Global Collaboration:</strong> To serve as a key link between
          local communities and the British High Commission in areas of mutual
          interest.
          <br />
          <strong>Catalyst for Development:</strong> To leverage our diverse
          skills and expertise to drive sustainable development at both the
          national and local levels.
          <br />
          <strong>Partnerships for Progress:</strong> To collaborate with
          like-minded organizations to promote good governance, economic
          development, human rights, climate action, and civic participation.
          <br />
          <strong>Professional Growth:</strong> To seek professional and
          business opportunities for our members through partnerships and
          stakeholder engagement.
        </p>
      </div>

      {/* Our Services Section */}
      <div className="flex flex-col space-y-4">
        <h2 className="text-3xl sm:text-4xl font-medium text-center text-black">
          Our Services
        </h2>
        <div className="text-lg sm:text-xl text-black space-y-4">
          <div>
            <strong>1. Policy Advisory:</strong> Our members, who are deeply
            engaged in national, regional, and international policymaking
            bodies, provide expert advice on various thematic areas, including
            governance, technology, economics, and social issues.
          </div>
          <div>
            <strong>2. Community Engagement for Economic Development:</strong>{" "}
            Chevening alumni empower local communities through initiatives like:
            <ul className="list-disc ml-6">
              <li>Digital inclusion programs.</li>
              <li>Legal outreach and public health education.</li>
              <li>Promoting civil participation in national discourses.</li>
            </ul>
          </div>
          <div>
            <strong>3. Professional Consultancy Services:</strong> Our alumni
            network includes professionals from diverse fields such as law,
            finance, technology, international trade, media, environmental
            studies, education, public health, and security studies.
          </div>
        </div>
      </div>

      {/* Why Work With Us Section */}
      <div className="flex flex-col space-y-4">
        <h2 className="text-3xl sm:text-4xl font-medium text-center text-black">
          Why Work With Us?
        </h2>
        <div className="flex flex-wrap justify-between gap-8">
          {[
            {
              title: "Diverse Expertise",
              content:
                "Our members represent a wide range of disciplines, offering a multidisciplinary approach to addressing challenges.",
            },
            {
              title: "Global Perspective",
              content:
                "As scholars with UK education and international experience, we bring a unique outlook to local and global issues.",
            },
            {
              title: "Passion for Development",
              content:
                "We are driven by the shared vision of a prosperous Kenya, where every individual and community thrives.",
            },
            {
              title: "Strong Networks",
              content:
                "Our connections with the British High Commission and other international organizations ensure impactful collaborations.",
            },
          ].map((item, index) => (
            <div key={index} className="w-72 space-y-2">
              <h3 className="text-xl font-bold">{item.title}:</h3>
              <p>{item.content}</p>
            </div>
          ))}
          <img
            src="https://via.placeholder.com/338x463"
            alt="Why Work With Us"
            className="w-full h-96 rounded-md object-cover"
          />
        </div>
      </div>

      {/* Join Us Section */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-medium text-black mb-6">Join Us</h2>
        <p className="text-lg sm:text-xl text-black">
          Are you passionate about making a difference in Kenya?{" "}
          <a href="#" className="text-blue-500 underline">
            Partner with us
          </a>{" "}
          to create transformative solutions for our communities and beyond.
          Whether you’re seeking expert advice, community outreach programs, or
          professional consultancy services, the{" "}
          <strong>Chevening Scholarship Alumni Association</strong> is your
          trusted partner for growth and innovation.
        </p>
        <div className="inline-flex items-center justify-center mt-4 px-4 py-2 bg-gray-800 text-white rounded-md">
          Join Us!
        </div>
      </div>
    </div>
    </>
  )
}

export default About