import FakeTerminalWindow from '../components/about/FakeTerminalWindow';
import Prompt from '../components/about/Prompt';
import { skills } from '../../lib/constants';

const SkillList = ({ title, items }: { title: string; items: string[] }) => (
  <>
    <li className="text-secondary font-semibold">{title}/</li>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </>
);

const About = () => {
  return (
    <div className="space-y-10 my-10 break-words">
      {/* general bio */}
      <FakeTerminalWindow>
        <Prompt content="cd aboutAtabek/" />
        <Prompt directory="/aboutAtabek" branch={true} content="cat README.md" />
        <p>
          Hi! My name is Atabek, and I am 21 years old. I am committed to continuous growth and
          development in web development. I am passionate about learning new technologies and
          materials to become the best developer I can be. For more than two years, I have been
          studying web development independently. I am open to offers and opportunities for
          professional growth
        </p>
      </FakeTerminalWindow>

      {/* skills & tools */}
      <FakeTerminalWindow>
        <Prompt content="cd skillsAndTools/Proficient" />
        <Prompt directory="/skillsAndTools/Proficient" branch={true} content="ls" />
        <div className="flex justify-start flex-wrap md:justify-between">
          <ul>
            <SkillList title="TheObvious" items={skills.theObvious} />
            <SkillList title="ToolsOfTheTrade" items={skills.toolsOfTheTrade} />
          </ul>
          <ul className="md:text-right">
            <SkillList title="LibrariesAndFrameworks" items={skills.librariesFrameworks} />
          </ul>
        </div>
      </FakeTerminalWindow>

      {/* hobbies / interests */}
      <FakeTerminalWindow>
        <Prompt content="cd HobbiesAndInterests/" />
        <Prompt directory="/HobbiesAndInterests" branch={true} content="ls" />
        <ul>
          <li>📚 reading</li>
          <li>🎬 movies</li>
          <li>🎹 piano</li>
        </ul>
      </FakeTerminalWindow>
    </div>
  );
};

export default About;
