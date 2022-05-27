import Image from 'next/image';

function Project({ href, src, alt }) {
  return (
    <a
      className="rounded-xl drop-shadow-lg hover:drop-shadow-2xl hover:scale-[1.03] transition-all duration-300 relative"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <div className="opacity-0 hover:opacity-100 h-full w-full absolute bg-gradient-to-t from-zinc-800/[0.8] to-transparent rounded-xl z-20 transition-all duration-300">
        <p className="absolute bottom-1 left-0 w-full text-center uppercase text-white">{alt}</p>
      </div>
      <Image src={src} alt={alt} width="600" height="300" className="rounded-xl" layout="responsive" />
    </a>
  );
}

export default function Projects() {
  return (
    <section className="bg-gradient-to-r from-rose-100 to-rose-200" id="projects">
      <div className="relative px-4 h-full py-12 lg:px-10 lg:flex-row max-w-screen-xl mx-auto">
        <h2 className="text-4xl sm:text-6xl font-bold text-rose-500 font-kalam pb-0 lg:pb-6">
          Recent Projects
        </h2>
        <div className="h-full w-full flex flex-col items-end font-kalam text-lg px-2 sm:px-6">
          <p className="px-6 text-center relative pt-4">
            Github <span className="text-2xl">&#8605;</span>
            <a
              href="https://github.com/nickderaj"
              target="_blank"
              rel="noreferrer"
              className="absolute -top-8 -right-4 cursor-pointer wiggle"
            >
              <Image src="/svg/octocat.svg" alt="robot" width="50" height="50" />
            </a>
          </p>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6 py-6 w-full h-full">
            <Project
              href="https://github.com/nickderaj/Node-Natours-Project"
              src="/projects/1. natours.png"
              alt="Tour Booking API w/ Stripe"
            />
            <Project
              href="https://github.com/nickderaj/NFT-Minting-Dapp"
              src="/projects/2. ghostcat.png"
              alt="NFT Minting Dapp"
            />
            <Project
              href="https://github.com/nickderaj/dnd-API"
              src="/projects/3. stripe.png"
              alt="Next.js Shop w/ Stripe"
            />
            <Project
              href="https://github.com/nickderaj/Node-Natours-Project"
              src="/projects/4. dnd.png"
              alt="D&D API"
            />
            <Project
              href="https://creds-demo.vercel.app/"
              src="/projects/5. creds.png"
              alt="Modern Next.js Website"
            />
            <Project
              href="https://github.com/nickderaj/Workout-Map-Logger"
              src="/projects/6. mapty.png"
              alt="Workout Logger"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
