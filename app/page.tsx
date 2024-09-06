import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa6';

const ProfilePicture = () => {
  return (
    <img
      src="/self2.png"
      alt="Profile picture of Atabek"
      className="bg-gradient-to-br from-indigo-500 to-fuchsia-500 rounded-full w-[350px] md:w-2/5"
    />
  );
};

const BulletPoints = () => {
  return (
    <ul className="space-y-1 text-xl text-center md:text-left">
      <li>☕ fueled by coffee</li>
      <li>
        <a href="mailto:atabek122002@gmail.com">📧 let's get in touch!</a>
      </li>
      <li>
        📝download my{' '}
        <a className="link link-primary" href="/Atabek's Resume.pdf" download="Atabek's Resume">
          resume
        </a>
      </li>
    </ul>
  );
};

const WavingHand = () => {
  return <span className="animate-wave inline-block">🤚🏻</span>;
};

const socials = [
  {
    icon: <FaGithub />,
    href: 'https://github.com/atabekdeveloper/',
  },
  {
    icon: <FaLinkedin />,
    href: 'https://linkedin.com/in/atabekdeveloper/',
  },
  {
    icon: <FaTelegram />,
    href: 'https://t.me/atabekdev/',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
      {/* picture of me */}
      <ProfilePicture />
      {/* little bio */}
      <div>
        <div className="text-center md:text-left mb-4">
          <h1 className="text-5xl">
            Hi, I'm{' '}
            <span className="bg-gradient-to-tl from-indigo-500 to-fuchsia-500 text-transparent bg-clip-text font-bold">
              Atabek
            </span>
            <WavingHand />
          </h1>
          <h2 className="text-3xl">I'm a frontend developer.</h2>
        </div>
        <BulletPoints />
        {/* socials */}
        <ul className="flex justify-center text-3xl gap-10 mt-4">
          {socials.map((social, index) => (
            <li key={index} className="hover:scale-125 hover:text-white transition-all ease-in-out">
              <Link href={social.href} target="_blank">
                {social.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
