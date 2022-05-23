import Image from 'next/image';
import { useRef } from 'react';
import useIntersection from '../../hooks/useIntersection';

function BlockLink({ link, name, bg, hover }) {
  const linkRef = useRef();
  const isVisible = useIntersection(linkRef);

  return (
    <a
      className={`${bg} ${hover}  hover:text-white transition duration-300 p-3 text-lg font-kalam rounded uppercase ${
        isVisible ? 'slide-up' : ''
      }`}
      href={link}
      target="_blank"
      rel="noreferrer"
      ref={linkRef}
    >
      {name}
    </a>
  );
}

export default function Contact() {
  return (
    <section className="bg-gradient-to-r from-amber-100 to-amber-200" id="contact">
      <div className="py-12 lg:py-20 px-10 lg:flex-row max-w-screen-xl mx-auto">
        <h2 className="w-max text-4xl sm:text-6xl font-bold text-amber-500 font-kalam pb-6 relative mx-auto">
          Contact
          <a
            className="absolute -left-12 -top-8 wiggle"
            href="https://twitter.com/nickderaj"
            target="_blank"
            rel="noreferrer"
          >
            <Image src="/svg/twitter.svg" alt="twitter" width="50" height="50" />
          </a>
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <BlockLink
            name="Discord"
            link="https://discordapp.com/channels/@me/240122878740267008"
            bg="bg-rose-200"
            hover="hover:bg-rose-400"
          />
          <BlockLink
            name="Email"
            link="mailto:nickderaj@gmail.com"
            bg="bg-teal-200"
            hover="hover:bg-teal-400"
          />
          <BlockLink
            name="LinkedIn"
            link="https://www.linkedin.com/in/nickderaj/"
            bg="bg-fuchsia-200"
            hover="hover:bg-fuchsia-400"
          />
          <BlockLink
            name="Twitter"
            link="https://twitter.com/nickderaj"
            bg="bg-blue-200"
            hover="hover:bg-blue-400"
          />
          <BlockLink
            name="Instagram"
            link="https://www.instagram.com/nickderaj/"
            bg="bg-orange-200"
            hover="hover:bg-orange-400"
          />
        </div>
      </div>
    </section>
  );
}
