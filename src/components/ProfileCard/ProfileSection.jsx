import React from 'react';
import ProfileCard from './ProfileCard';
import {profile1, profile2, profile3, profile4, profile5, profile6} from '../../components/Img/ImportedImage'; 

const ProfileSection = () => {
  const profiles = [
    {
      image: profile1,
      name: 'Dr. Nivedita Jha',
      title: 'President Kawach Foundation',
      description: 'She is a dentist by profession having hands-on experience since 2010. She has expertise in RCT, implant, etc. Her devotion towards people, especially the deprived and unempowered, is remarkable.',
      link: '/teacher-registration',
    },
    {
      image: profile4,
      name: 'Adv Sushmita ',
      title: 'Vice Secretary ',
      description: 'Sushmita is an accomplished advocate with five years of experience practicing law in the esteemed Patna High Court. Throughout her career, she has demonstrated a steadfast commitment.',
      link: '/teacher-registration',
    },
    {
      image: profile3,
      name: 'Adv Ashok Kr Choudhary',
      title: 'Settler Kawach Foundation',
      description: 'He is an advocate practicing at Patna High Court since 1986. He has been involved in several high-profile civil cases and started his career with criminal matters.',
      link: '/teacher-registration',
    },
    {
        image: profile5,
        name: 'Dr. Suprita Jha',
        title: 'Vice Treasurer',
        description: 'Dr. Suprita Jha is a highly skilled physiotherapist dedicated to promoting physical fitness and preventive healthcare. With a steadfast belief in the power of preventive treatment, she.',
        link: '/teacher-registration',
      },
      {
        image: profile2,
      name: 'Dr. Aman Jha',
      title: 'Secretary / Treasurer',
      description: 'A famous dental implantologist of Dehradun with advanced dental techniques, his dedication extends beyond the clinic to the underprivileged and marginalized segments of society.',
      link: '/teacher-registration',
      },
      {
        image: profile6,
        name: 'Miss Nishita',
        title: 'Project Manager',
        description: 'Nishita, a dedicated scholar pursuing her PHD in Psychology from Banaras Hindu University (BHU). With a specialization in hypnotism from California, USA, and a distinguished rec',
        link: '/teacher-registration',
      },
  ];

  return (
    <div className="bg-white px-4 md:px-20 py-10 columns-1 md:columns-2 lg:columns-3">
      <div className="">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            image={profile.image}
            name={profile.name}
            title={profile.title}
            description={profile.description}
            link={profile.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileSection;
