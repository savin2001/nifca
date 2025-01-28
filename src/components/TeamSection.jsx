import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import TeamMemberCard from './TeamMemberCard'; // Import the reusable card component

const TeamSection = ({ category, members }) => {
  return (
    <div className="flex justify-center items-center flex-col mt-20">
      <h2 className="text-center mb-8 uppercase text-primary text-3xl">{category}</h2>
      <div className="w-full p-6 bg-base-100">
        <div
          className={`grid grid-cols-1 ${category === 'Board' ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-6`}
        >
          {members.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              bio={member.bio}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Add PropTypes for better type checking
TeamSection.propTypes = {
  category: PropTypes.string.isRequired,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TeamSection;