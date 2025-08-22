import { Img } from "remotion";
import clsx from "clsx";
import { FC, Fragment } from "react";
import { ProfileCard } from "./ProfileCard";
import { AbsoluteFillTemplate } from "../components/AbsoluteFillTemplate";
import { SpecComp } from "../utils";

const BORDER_CLASSES = [
  "border-main-pink",
  "border-main-yellow",
  "border-main-blue",
];

const TEAM_MEMBERS = [
  {
    name: "Junior Asante",
    title: "Founder",
    imageUrl: "https://enbrasak.com/media/20220121_143710.jpg",
  },
  {
    name: "Kwabena Asante",
    title: "Co-Founder",
    imageUrl: "https://enbrasak.com/media/1703850852410.jpg",
  },
  {
    name: "Gregory Mwangi",
    title: "Developer",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQEBpOYNC6ACoQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709362936494?e=1758153600&v=beta&t=ZtZyMI_C3xJPSrNLpn5VV-7oRsdPy6VRWPEqgc5X4Ko",
  },
  {
    name: "Hampton Macharia",
    title: "Developer",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/C4D03AQFVQWo1iRSAIA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1549826293436?e=1758153600&v=beta&t=mSbYF0tqqOLWz239qtZc-H5t5pfPq8h9M1qtGyCeoeQ",
  },
  {
    name: "Elias Norberg",
    title: "Developer",
    imageUrl: "https://www.aisle.se/images/elias.jpg",
  },
];

const SUPPORTING_ROLES = [
  {
    role: "Product Design",
    people: ["Elias Engelholm", "Axel Edwall"],
  },
  {
    role: "Content Creation",
    people: "Laura Morales",
  },
  {
    role: "Visual Design",
    people: "Taurai Mtake",
  },
  {
    role: "Content Strategy",
    people: "Allan Adala",
  },
  {
    role: "Electronic Design",
    people: "Wenbo Zheng",
  },
];

// Add py-28 to AbsoluteFill for padding

export const MeetTheTeam: FC<SpecComp> = ({ transparentBg }) => {
  return (
    <AbsoluteFillTemplate
      className="gap-40 text-[5rem]"
      transparentBg={transparentBg}
    >
      <h1 className="text-center text-9xl font-bold">Meet the ViSo Team</h1>
      <div className="grid grid-cols-2 gap-y-40 px-20">
        {TEAM_MEMBERS.map((profile, index) => {
          const isLast = index === TEAM_MEMBERS.length - 1;
          const unevenProfileCount = TEAM_MEMBERS.length % 2 === 1;

          return (
            <ProfileCard
              key={profile.name}
              className={clsx(isLast && unevenProfileCount && "col-span-2")}
              name={profile.name}
              title={profile.title}
              imageUrl={profile.imageUrl}
              imageDivClassName={BORDER_CLASSES[index % BORDER_CLASSES.length]}
            />
          );
        })}
      </div>
      <div className="text-[3.2rem]">
        <h1 className="text-center text-[4rem] text-white/90 font-semibold my-20">
          With additional support from
        </h1>
        <div className="grid grid-cols-2 font-medium gap-x-12 gap-y-4 uppercase">
          {SUPPORTING_ROLES.map((role) => {
            const people =
              typeof role.people === "string" ? [role.people] : role.people;
            return people.map((person, index) => {
              const showRole = index === 0;
              return (
                <Fragment key={person}>
                  {showRole ? (
                    <span className="text-right text-white/60">
                      {role.role}
                    </span>
                  ) : (
                    <span></span>
                  )}
                  <span className="text-white/80">{person}</span>
                </Fragment>
              );
            });
          })}
        </div>
      </div>
      <Img
        className="block w-[400px] mx-auto mt-20"
        src="https://enbrasak.com/media/Logo-Gradient-Large.webp"
      />
    </AbsoluteFillTemplate>
  );
};
