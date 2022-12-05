import { IconSkillList } from "constants/SkillList.constants";

function getPathIcon(icon) {
  return `img/skills/${icon}.png`;
}

const ItemSkill = ({ skillIconName }) => {
  return (
    <div className="skill">
      <img
        className="img_skill"
        src={getPathIcon(skillIconName)}
        alt={`${skillIconName} icon`}
      />
      <h1 className="title_skill">{skillIconName}</h1>
    </div>
  );
};

export const SkillList = () => {
  return (
    <section id="skills" className="scroll">
      <div className="container_4">
        <h1 className="title_sections">Skills</h1>
        <div className="content_skills">
          {Object.keys(IconSkillList).map((key_sKillName, index) => {
            return (
              <ItemSkill
                key={index}
                skillIconName={IconSkillList[key_sKillName]}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
