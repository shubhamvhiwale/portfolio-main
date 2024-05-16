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
      <SiJavascript key="SiJavascript-icon" />,
      <SiHtml5 key="SiHtml5-icon" />,
      <SiRedux key="SiRedux-icon" />,
      <SiCss3 key="SiCss3-icon" />,
      <SiMaterialdesign key="SiMaterialdesign-icon" />,
      <FaReact key="FaReact-icon" />,
      <FaBootstrap key="FaBootstrap-icon" />,
      <SiTailwindcss key="SiTailwindcss-icon" />,
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
    data: [
      <FaNodeJs key="FaNodeJs-icon" />,
      <FaPython key="FaPython-icon" />,
      <AiOutlineDotNet key="AiOutlineDotNet-icon" />,
      <SiPhp key="SiPhp-icon" />,
    ],
    iconsProps: {
      iconCls: ["icon-nodejs", "icon-python", "icon-dotnet", "icon-php"],
    },
  },
  {
    icon: "🧀",
    label: "Database",
    data: [
      <SiMongodb key="SiMongodb-icon" />,
      <SiMysql key="SiMysql-icon" />,
      <SiFirebase key="SiFirebase-icon" />,
    ],
    iconsProps: {
      iconCls: ["icon-mongodb", "icon-mysql", "icon-firebase"],
    },
  },
  {
    icon: "🥕",
    label: "Platform",
    data: [
      <SiVisualstudiocode key="SiVisualstudiocode-icon" />,
      <SiPycharm key="SiPycharm-icon" />,
      <SiVisualstudio key="SiVisualstudio-icon" />,
    ],
    iconsProps: {
      iconCls: ["icon-visualstudiocode", "icon-pycharm", "icon-visualstudio"],
    },
  },
  {
    icon: "🍌",
    label: "OS",
    data: [
      <SiLinux key="SiLinux-icon" />,
      <SiWindows key="SiWindows-icon" />,
      <SiAndroid key="SiAndroid-icon" />,
      <SiApple key="SiApple-icon" />,
    ],
    iconsProps: {
      iconCls: ["icon-linux", "icon-windows", "icon-android", "icon-apple"],
    },
  },
  {
    icon: "🫐",
    label: "Management",
    data: [
      <SiGithub key="SiGithub-icon" />,
      <SiBitbucket key="SiBitbucket-icon" />,
      <SiAzuredevops key="SiAzuredevops-icon" />,
      <SiJira key="SiJira-icon" />,
    ],
    iconsProps: {
      iconCls: ["icon-github", "icon-bitbucket", "icon-azuredev", "icon-jira"],
    },
  },
  {
    icon: "🫐",
    label: "Testing",
    data: [<SiJest key="SiJest-icon" />],
    iconsProps: {
      iconCls: ["icon-jest"],
    },
  },
  {
    icon: "🥂",
    label: "Cloud",
    data: [
      <SiAmazon key="SiAmazon-icon" />,
      <SiFirebase key="SiFirebase-icon" />,
      <SiHeroku key="SiHeroku-icon" />,
      <SiDigitalocean key="SiDigitalocean-icon" />,
    ],
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
