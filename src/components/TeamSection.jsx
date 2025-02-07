import React from "react";
import TeamMemberCard from "./TeamMemberCard"; // Import the reusable card component

const TeamSection = ({ category, members }) => {
  // Extract President and Deputy President
  const [president, deputy, ...others] = category === "Steering Council" ? members : [null, null, ...members];

  return (
    <div className="flex justify-center items-center flex-col mt-20">
      <h2 className="text-center mb-8 uppercase text-primary text-3xl">{category}</h2>
      <div className="w-full p-6 bg-base-100">
        {category === "Steering Council" && (
          <>
            {/* President & Deputy President */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
              {president && (
                <TeamMemberCard
                  name={president.name}
                  role={president.role}
                  image={president.image}
                  bio={president.bio}
                  category={category}
                />
              )}
              {deputy && (
                <TeamMemberCard
                  name={deputy.name}
                  role={deputy.role}
                  image={deputy.image}
                  bio={deputy.bio}
                  category={category}
                />
              )}
            </div>

            {/* Divider */}
            <div className="w-full border-t-2 border-gray-300 my-6"></div>
          </>
        )}

        {/* Remaining Members */}
        <div
          className={`grid grid-cols-1 ${(category === "Board") ? "md:grid-cols-2" : "md:grid-cols-3"} gap-6`}
        >
          {others.map((member, index) => (
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

export default TeamSection;
