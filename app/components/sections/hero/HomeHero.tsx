'use client';

import { hero } from '@/app/constants';
import { ArrowRightIcon, PauseIcon, PlayIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

const HomeHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const videoBtnStyle = 'h-6 w-6 text-white';

  const togglePlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <header className="relative">
      <div className="relative p-sides-2 bg-neutral-900 pb-6 pt-[124px]">
        <div className="">
          <h2 className="md:text-lg lg:text-xl text-white pb-6">
            Des experts passionnés de l&apos;automobile à votre service.
          </h2>
        </div>
      </div>

      <div className="relative grid grid-rows-2">
        <div className="row-start-1 h-full w-full absolute z-[5] row-end-2 bg-neutral-900"></div>

        <div className="relative lg:p-sides-2 row-start-1 col-start-1 row-end-3 col-end-2 z-[10]">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            className="max-md:hidden lg:rounded-xl"
          >
            <source src={hero.video} />
          </video>

          <div className="md:hidden h-[100vh]">
            <Image
              src={hero.image}
              layout="fill"
              alt="Car interior"
              objectFit="cover"
            />
          </div>

          {/* //? Gradient Background */}
          <div className="hero-dark-bg absolute z-[5] h-1/2 bg-gradient-to-t from-dark-gray to-transparent lg:rounded-b-xl"></div>
        </div>

        <div className="sticky py-6 lg:py-8 bottom-0 lg:px-12 row-start-1 col-start-1 row-end-3 col-end-2 self-end z-[50]">
          <div className="p-sides-2 w-full flex justify-between items-end">
            <div className="text-white font-exo w-full">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl min-[2000px]:text-8xl">
                Une Expérience
                <br className="max-md:hidden" /> sur Mesure
              </h1>

              <p className="max-lg:hidden xl:text-xl mt-4">
                Service de location premium
              </p>

              <Link
                href="/reservation"
                className="visible lg:hidden max-sm:w-full mt-6 sm:w-max h-[52px] text-sm flex items-center justify-center gap-2 px-5 bg-white rounded-md text-dark-gray hover:bg-light-gray transition-colors duration-200"
              >
                <span className="">Réservez maintenant</span>
                <ArrowRightIcon className="h-4 w-4 " />
              </Link>
            </div>

            <div className="flex items-center gap-3 whitespace-nowrap">
              <button
                onClick={togglePlayback}
                className="max-md:hidden flex items-center justify-center cursor-pointer w-[52px] h-[52px] z-[50] backdrop-blur-md bg-gray-500 bg-opacity-25 border-[1.5px] border-white rounded-md"
              >
                <div className="flex items-center gap-6">
                  {isPlaying ? (
                    <PauseIcon className={videoBtnStyle} />
                  ) : (
                    <PlayIcon className="h-4 w-4 text-white fill-current" />
                  )}
                </div>
              </button>

              <Link
                href="/reservation"
                className="h-[52px] max-lg:hidden text-sm flex items-center gap-2 px-5 bg-white rounded-md text-dark-gray hover:bg-light-gray transition-colors duration-200"
              >
                <span className="">Réservez maintenant</span>
                <ArrowRightIcon className="h-4 w-4 " />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default HomeHero;
