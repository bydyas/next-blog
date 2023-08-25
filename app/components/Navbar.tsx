import Link from 'next/link';
import { IconType } from 'react-icons';
import { FaGithub, FaTelegram, FaLinkedin } from 'react-icons/fa';

const myNetworkLinks = [
  { href: 'https://github.com/bydyas', Icon: FaGithub },
  { href: 'https://t.me/bydyas', Icon: FaTelegram },
  { href: 'https://www.linkedin.com/in/bogdan-shkaran/', Icon: FaLinkedin },
];

function NetworkLink({ href, Icon }: { href: string; Icon: IconType }) {
  return (
    <Link className="text-white/90 hover:text-white" href={href}>
      <Icon />
    </Link>
  );
}

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link href="/" className="text-white/90 no-underline hover:text-white">
            Bohdan Shkaran
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
          {myNetworkLinks.map((myLink, i) => (
            <NetworkLink key={i} {...myLink} />
          ))}
        </div>
      </div>
    </nav>
  );
}
