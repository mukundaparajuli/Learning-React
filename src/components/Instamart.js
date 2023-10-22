import { useState } from "react";
const Section = ({ title, description, isVisible, setIsVisible }) => {
  const [button, setButton] = useState("Show");
  return (
    <div className="border-2 border-solid border-black py-8 m-6 p-4">
      <h1 className="font-bold text-2xl">{title}</h1>
      <button
        className="underline p-1"
        onClick={() => {
          // setIsVisible;
          isVisible
            ? (setIsVisible(false), setButton("Show"))
            : (setIsVisible(true), setButton("Hide"));
        }}
      >
        {button}
      </button>
      {isVisible && <h1>{description}</h1>}
    </div>
  );
};

const Instamart = () => {
  const [sectionConfig, setSectionConfig] = useState({
    showAbout: false,
    showTeam: false,
    showCareer: false,
  });
  return (
    <div>
      <Section
        title={"Instamart About"}
        description={
          "this is the about section in the Instamart in the page Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
        isVisible={sectionConfig.showAbout}
        setIsVisible={() => {
          setSectionConfig({
            showAbout: true,
            showTeam: false,
            showCareer: false,
          });
        }}
      ></Section>
      <Section
        title={"Team Instamart"}
        description={
          "thsi is the section for team instamart in the page Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
        isVisible={sectionConfig.showTeam}
        setIsVisible={() => {
          setSectionConfig({
            showAbout: false,
            showTeam: true,
            showCareer: false,
          });
        }}
      ></Section>
      <Section
        title={"Instamart Career"}
        description={
          "this is the section for careers in the Instamart in the page Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
        isVisible={sectionConfig.showCareer}
        setIsVisible={() => {
          setSectionConfig({
            showAbout: false,
            showTeam: false,
            showCareer: true,
          });
        }}
      ></Section>
    </div>
  );
};
export default Instamart;
