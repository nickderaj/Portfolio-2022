import Image from 'next/image';

export default function Projects() {
  return (
    <section className="bg-gradient-to-r from-rose-100 to-rose-200" id="projects">
      <div className="relative px-4 h-[25rem] md:h-[30rem] lg:py-12 lg:px-10 lg:flex-row max-w-screen-xl mx-auto">
        <h2 className="text-4xl sm:text-6xl font-bold text-rose-500 font-kalam pb-0 lg:pb-6">
          Recent Projects
        </h2>
        {/* <a
          href="https://github.com/nickderaj"
          target="_blank"
          rel="noreferrer"
          className="absolute top-12 right-12 lg:right-40 cursor-pointer wiggle"
        >
          <Image src="/svg/octocat.svg" alt="robot" width="50" height="50" />
        </a> */}
        <div className="h-full w-full flex flex-col items-center font-kalam text-lg gap-6 pt-20">
          <div className="h-[100px] w-[100px] shakey">
            <Image src="/svg/saw.svg" width="100" height="100" alt="Maintenance" />
          </div>
          <p className="px-6 text-center relative">
            Section under construction, click the Octocat to view Github!{' '}
            <span className="text-2xl">&#8605;</span>
            <a
              href="https://github.com/nickderaj"
              target="_blank"
              rel="noreferrer"
              className="absolute -top-12 -right-4 cursor-pointer wiggle"
            >
              <Image src="/svg/octocat.svg" alt="robot" width="50" height="50" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
