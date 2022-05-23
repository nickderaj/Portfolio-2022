import { useEffect } from 'react';

function BrickRow({ length, short, identifier }) {
  return (
    <div className={`flex w-full h-[10%] ${short ? '-translate-x-12' : ''}`}>
      {Array.from({ length }).map((_, i) => {
        const colours = [
          'bg-teal-200',
          'bg-indigo-200',
          'bg-rose-200',
          'bg-emerald-200',
          'bg-violet-200',
          'bg-orange-200',
          'bg-blue-200',
        ];
        const colour = colours[Math.floor(Math.random() * colours.length)];
        return (
          <div key={`${identifier} ${i}`} className={`w-[20%] ${colour} rounded m-0.5 animated-brick`} />
        );
      })}
    </div>
  );
}

export default function BrickWall({ children }) {
  useEffect(() => {
    // Give the bricks a random interval before they start pulsing
    const bricks = document.querySelectorAll('.animated-brick');
    bricks.forEach((el) =>
      setTimeout(() => {
        el.classList.add('animate-pulse');
      }, Math.random() * 5 * 1000)
    );
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-screen flex justify-center items-center">
      {/* Small screen */}
      <div className="block md:hidden w-full h-screen -skew-y-6 absolute overflow-hidden -z-10 scale-150">
        {Array.from({ length: 15 }).map((_, i) => {
          if (i % 2 === 0) {
            return <BrickRow length={5} short identifier={i} key={i} />;
          } else {
            return <BrickRow length={5} identifier={i} key={i + 50} />;
          }
        })}
      </div>
      {/* Large screen */}
      <div className="hidden md:block w-full h-screen -skew-y-6 absolute overflow-hidden -z-10 scale-150">
        {Array.from({ length: 15 }).map((_, i) => {
          if (i % 2 === 0) {
            return <BrickRow length={8} short identifier={i} key={i + 100} />;
          } else {
            return <BrickRow length={8} identifier={i} key={i + 150} />;
          }
        })}
      </div>
      {children}
    </div>
  );
}
