import DevMeven from "./DevMeven";
import WorkExpContent from "./WorkExpContent";
import Profile from "./Profile";
import { experience } from "@/app/data/experience";
import Hobbies from "./Hobbies";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";

export const components = [
  {
    title: "devMeven",
    Component: <DevMeven />,
  },
  {
    title: "workExpContent2",
    Component: (
      <WorkExpContent
        joinDate={experience[0].joinData}
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
    title: "workExpContent2",
    Component: (
      <WorkExpContent
        joinDate={experience[1].joinData}
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
    title: "skills",
    Component: <Skills />,
  },
  {
    title: "education",
    Component: <Education />,
  },
  {
    title: "projects",
    Component: <Projects />,
  },
  {
    title: "Hobbies",
    Component: <Hobbies />,
  },
];
