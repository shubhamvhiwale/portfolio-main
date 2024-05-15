import { FaReact, FaBootstrap, FaNodeJs, FaPython } from "react-icons/fa";
import {
  // frontend
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiVisualstudiocode,
  SiPycharm,
  SiVisualstudio,
  SiLinux,
  SiWindows,
  SiAndroid,
  SiApple,
  SiGithub,
  SiBitbucket,
  SiMicrosoftazure,
  SiJira,
  SiAmazon,
  SiAzuredevops,
  SiJavascript,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiMaterialdesign,
  SiPhp,
  SiJest,
  SiHeroku,
  SiDigitalocean,
} from "react-icons/si";
import { AiOutlineDotNet } from "react-icons/ai";

export interface IngredientProps {
  icon: string;
  label: string;
  data: JSX.Element[];
  iconsProps: {
    iconCls: string[];
  };
}

export const initialTabs: IngredientProps[] = [
  {
    icon: "🍅",
    label: "Frontend",
    data: [
      <SiJavascript />,
      <SiHtml5 />,
      <SiRedux />,
      <SiCss3 />,
      <SiMaterialdesign />,
      <FaReact />,
      <FaBootstrap />,
      <SiTailwindcss />,
    ],
    iconsProps: {
      iconCls: [
        "icon-javascript",
        "icon-html",
        "icon-redux",
        "icon-css",
        "icon-materialdesign",
        "icon-react",
        "icon-bootstrap",
        "icon-tailwindcss",
      ],
    },
  },
  {
    icon: "🥬",
    label: "Backend",
    data: [<FaNodeJs />, <FaPython />, <AiOutlineDotNet />, <SiPhp />],
    iconsProps: {
      iconCls: ["icon-nodejs", "icon-python", "icon-dotnet", "icon-php"],
    },
  },
  {
    icon: "🧀",
    label: "Database",
    data: [<SiMongodb />, <SiMysql />, <SiFirebase />],
    iconsProps: {
      iconCls: ["icon-mongodb", "icon-mysql", "icon-firebase"],
    },
  },
  {
    icon: "🥕",
    label: "Platform",
    data: [<SiVisualstudiocode />, <SiPycharm />, <SiVisualstudio />],
    iconsProps: {
      iconCls: ["icon-visualstudiocode", "icon-pycharm", "icon-visualstudio"],
    },
  },
  {
    icon: "🍌",
    label: "OS",
    data: [<SiLinux />, <SiWindows />, <SiAndroid />, <SiApple />],
    iconsProps: {
      iconCls: ["icon-linux", "icon-windows", "icon-android", "icon-apple"],
    },
  },
  {
    icon: "🫐",
    label: "Management",
    data: [<SiGithub />, <SiBitbucket />, <SiAzuredevops />, <SiJira />],
    iconsProps: {
      iconCls: ["icon-github", "icon-bitbucket", "icon-azuredev", "icon-jira"],
    },
  },
  {
    icon: "🫐",
    label: "Testing",
    data: [<SiJest />],
    iconsProps: {
      iconCls: ["icon-jest"],
    },
  },
  {
    icon: "🥂",
    label: "Cloud",
    data: [<SiAmazon />, <SiFirebase />, <SiHeroku />, <SiDigitalocean />],
    iconsProps: {
      iconCls: [
        "icon-amazon",
        "icon-firebase",
        "icon-heroku",
        "icon-digitalocean",
      ],
    },
  },
];
