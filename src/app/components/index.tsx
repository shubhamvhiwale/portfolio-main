import DevMeven from "./DevMeven";
import WorkExpContent from "./WorkExpContent";
import Profile from "./Profile";
import { experience } from "@/app/data/experience";
import Hobbies from "./Hobbies";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";
import ProjectsList from "./ProjectsList";
import ProjectsV1 from "./ProjectsV1/index";
// import CurrentNPreperedLocation from "./CurrentNPreperedLocation";

import dynamic from "next/dynamic";

const CurrentNPreperedLocation = dynamic(
  () => import("@/app/components/CurrentNPreperedLocation/index"),
  { ssr: false }
);

export const components = [
  {
    title: "Who Am I?",
    Component: <DevMeven />,
  },
  {
    title: "Currenty Working experience",
    Component: (
      <WorkExpContent
        joinDate={experience[0].joinData}
        closeDate={experience[0].closeData}
        designation={experience[0].designation}
        organizationName={experience[0].organizationName}
        experience={experience[0].experience}
        number={experience[0].number}
        designationfS={experience[0].designationfS}
        orgnizationfS={experience[0].orgnizationfS}
        letterSpacing={experience[0].letterSpacing}
      />
    ),
  },
  {
    title: "Worked experience",
    Component: (
      <WorkExpContent
        joinDate={experience[1].joinData}
        closeDate={experience[1].closeData}
        designation={experience[1].designation}
        organizationName={experience[1].organizationName}
        experience={experience[1].experience}
        number={experience[1].number}
        designationfS={experience[1].designationfS}
        orgnizationfS={experience[1].orgnizationfS}
        letterSpacing={experience[1].letterSpacing}
      />
    ),
  },
  {
    title: "profile",
    Component: <Profile age={{ day: 0, month: 0, year: 0 }} image="" name="" />,
  },
  {
    title: "Skills",
    Component: <Skills />,
  },
  {
    title: "Education",
    Component: <Education />,
  },
  {
    title: "Projects",
    Component: <Projects />,
  },
  {
    title: "Hobbies",
    Component: <Hobbies />,
  },
  {
    title: "Current location and Prepered location",
    Component: <CurrentNPreperedLocation />,
  },
];
