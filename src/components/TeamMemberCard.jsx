import React, { useState } from "react";
import teamMember1 from "../assets/michael_kamiru.jpg";
import teamMember2 from "../assets/darshan_shah.jpg";
import defaultAvatar from "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"; 
const TeamMemberCard = ({ name, role, image, bio, category, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Use the imported images based on some condition or prop
  const getImage = () => {
    if (image === "michael_kamiru") return teamMember1;
    if (image === "darshan_shah") return teamMember2;
    return defaultAvatar; // Fallback to default avatar
  };

  return (
    <>
      <div
        className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:bg-base-200 transition duration-300"
        onClick={openModal}
      >
        <img
          src={getImage()}
          alt={name}
          className="w-full h-fit object-cover rounded-md mb-4"
        />
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <dialog id={`my_modal_${index}`} className="modal modal-open">
          <div className="modal-box">
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-outline btn-primary absolute right-2 top-2"
                onClick={closeModal}
              >
                ✕
              </button>
            </form>
            <div className="flex">
              <img
                src={getImage()}
                alt={name}
                className="w-1/3 h-auto object-cover rounded-md"
              />
              <div className="ml-6">
                <h3 className="font-bold text-xl">{name}</h3>
                <p className="text-gray-600">{role}</p>
                <p className="mt-4 text-gray-800">{bio}</p>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default TeamMemberCard;