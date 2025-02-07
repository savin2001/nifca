import React, { useState } from "react";
import teamMember1 from "../assets/michael_kamiru.jpg";
import teamMember2 from "../assets/darshan_shah.jpg";
import teamMember3 from "../assets/william_ruto.jpg";
import teamMember5 from "../assets/kithure_kindiki.jpg";
import teamMember6 from "../assets/john_mbadi.jpg";
import teamMember7 from "../assets/dorcus_oduor.jpg";
import teamMember8 from "../assets/dr_thugge.jpg";
import teamMember9 from "../assets/wyclife_chamia.jpg";
import teamMember10 from "../assets/godfrey_kiptum.jpg";
import teamMember11 from "../assets/c_macharia.jpg";
import teamMember12 from "../assets/daniel_mainda.jpg";
import teamMember13 from "../assets/tonia_mutiso.jpg";
import teamMember14 from "../assets/francis_mutua.jpg";
import teamMember15 from "../assets/dinah_mboje.jpg";
import teamMember16 from "../assets/michael_maina.png";
import teamMember17 from "../assets/james_akali.jpg";
import teamMember18 from "../assets/kiptorus.jpg";
import teamMember19 from "../assets/munzher.jfif";
import teamMember20 from "../assets/nelson.jpg";
import teamMember21 from "../assets/chelelgo.jpeg";
import defaultAvatar from "../assets/default-avatar.jpg"; 

const TeamMemberCard = ({ name, role, image, bio, category, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Use the imported images based on some condition or prop
  const getImage = () => {
    if (image === "michael_kamiru") return teamMember1;
    if (image === "darshan_shah") return teamMember2;
    if (image === "william_ruto") return teamMember3;
    if (image === "kithure_kindiki") return teamMember5;
    if (image === "john_mbadi") return teamMember6;
    if (image === "dorcas_oduor") return teamMember7; 
    if (image === "dr_thuge") return teamMember8;
  if (image === "wyclife_chamia") return teamMember9;
  if (image === "godfrey_kiptum") return teamMember10;
  if (image === "c_macharia") return teamMember11;  
  if (image === "daniel_mainda") return teamMember12;
  if (image === "tonia_mutiso") return teamMember13;
  if (image === "francis_mutua") return teamMember14;
  if (image === "dinah_mboje") return teamMember15;
  if (image === "michael_maina") return teamMember16;
  if (image === "james_akali") return teamMember17;
  if (image === "kiptorus") return teamMember18;
  if (image === "munzher") return teamMember19;
  if (image === "nelson") return teamMember20;
  if (image === "chelelgo") return teamMember21;
    return defaultAvatar; // Fallback to default avatar
  };

  return (
    <>
      <div
        className="card bg-base-100 hover:shadow-md rounded-none p-6 hover:bg-base-200 hover:cursor-pointer transition duration-300"
        onClick={openModal}
      >
        <img
          src={getImage()}
          alt={name}
          className="w-full max-w-md h-96 object-cover rounded-md mb-4"
        />
        <h3 className="text-lg font-semibold mb-2 text-center">{name}</h3>
        <p className="text-neutral text-center">{role}</p>
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
            <div className="flex flex-col">
              <img
                src={getImage()}
                alt={name}
                className="w-full h-auto object-cover rounded-md"
              />
              <div className="mt-4 text-center">
                <h3 className="font-bold text-xl">{name}</h3>
                <p className="text-neutral">{role}</p>
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