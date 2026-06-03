import { portfolio } from "../../data/portfolio";
import { BsArrowRightShort } from "../Icons";
import RevealText from "../RevealText/RevealText.component";

const Skills = () => {
  return (
    <div className="my-16 px-3 font-sen text-white" id="skills">
      <RevealText as="h2" className="text-3xl font-bold text-white">
        Skills
      </RevealText>

      <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
        {portfolio.skills.featured.map((skill, index) => (
          <RevealText
            as="p"
            key={skill.title}
            className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300"
            delay={index * 0.05}
            variant="list"
          >
            <BsArrowRightShort size="30" />
            <span className="text-white">{skill.title}</span>
            &nbsp;{skill.description}
          </RevealText>
        ))}
      </div>

      <RevealText
        as="p"
        className="text-lg font-medium text-slate-300"
        variant="body"
      >
        ...more skills include{" "}
        {portfolio.skills.additional.map((skill, index) => (
          <span key={skill}>
            <span className="text-white">{skill}</span>
            {index < portfolio.skills.additional.length - 1 ? ", " : " "}
          </span>
        ))}
      </RevealText>
    </div>
  );
};

export default Skills;
