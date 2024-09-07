"use client"
import clsx from 'clsx';
import Image from 'next/image';

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)]  relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] llg:h-[800px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-80px)]"></div>
      <div className=" relative">
        <section className="relative h-[650px] overflow-hidden">
          <div className="absolute left-0 top-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] !border-[#B48CDE]">
            <div className="col-span-1 flex h-full items-center justify-center" />
            <div className="col-span-1 flex h-full items-center justify-center border-x border-[#B48CDE]" />
            <div className="col-span-1 flex h-full items-center justify-center" />
          </div>
          <figure className="pointer-events-none absolute -bottom-[70%] left-1/2 z-0 block aspect-square w-[520px] -translate-x-1/2 rounded-full bg-accent-500/40 blur-[200px]" />
          <figure className="pointer-events-none absolute left-[4vw] top-[64px] z-20 hidden  aspect-square w-[32vw] rounded-full bg-surface-primary opacity-50 blur-[100px] bg-dark-surface-primary md:block" />
          <figure className="pointer-events-none absolute bottom-[-50px] right-[7vw] z-20 hidden  aspect-square w-[30vw] rounded-full bg-surface-primary opacity-50 blur-[100px] bg-dark-surface-primary md:block" />
          <div className="relative z-10 flex flex-col divide-y divide-[#B48CDE] pt-[35px]  !border-[#B48CDE]">
            <div className="flex flex-col items-center justify-end">
              <div className="flex items-center gap-2 !border !border-b-0 border-[#B48CDE] px-4 py-2 border-dark-border">
                <div className="flex -space-x-4 rtl:space-x-reverse">
                  <Image width={40} height={40} className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK4uGPXkQ7ZXukjdKvnTEikcaDWj53OiZPdQ&s" alt="" />
                  <Image width={40} height={40} className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://media.licdn.com/dms/image/v2/D5635AQGPeQN1qQ0fHQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1712998994170?e=1724659200&v=beta&t=m84O1m_NAMNyn3WAcHKkVf31F9OPHkYdTrZntcvz0uA" alt="" />
                  <Image width={40} height={40} className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK4uGPXkQ7ZXukjdKvnTEikcaDWj53OiZPdQ&s" alt="" />
                  <Image width={40} height={40} className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK4uGPXkQ7ZXukjdKvnTEikcaDWj53OiZPdQ&s" alt="" />
                </div>
                <p className="text-sm tracking-tight text-text-tertiary text-dark-text-tertiary">
                  10k+ happy customers
                </p>
              </div>
            </div>
            <div>
              <div className="mx-auto flex h-[288px] max-w-[80vw] shrink-0 flex-col items-center justify-center gap-2 px-2 py-4 sm:px-16 lg:px-24">
                <h1 className="cursor-pointer max-w-screen-lg text-pretty text-center text-[clamp(32px,7vw,64px)] font-medium leading-none tracking-[-1.44px] text-text-primary text-dark-text-primary md:tracking-[-2.16px]">
                  Streamlined APIs for Instant Compilation & Scalability 
                </h1>
                <h2 className="text-md max-w-2xl text-pretty text-center text-text-tertiary text-dark-text-tertiary md:text-lg">
                Self Hosted compiler API service designed to seamlessly integrate into your CI/CD pipeline, providing reliable, real-time code compilation that scales with your needs.
                </h2>
              </div>
            </div>
            <div className="flex items-start justify-center px-8 sm:px-24">
              <div className="flex w-full max-w-[80vw] flex-col items-center justify-start md:!max-w-[392px]">
                <button
                  className={clsx(
                    "!h-14 flex-col items-center justify-center rounded-none !text-base",
                    "max-w-sm:!border-x-0 flex w-full !border-x !border-y-0 !bg-transparent border-[#B48CDE] backdrop-blur-xl transition-colors duration-150 border-dark-border hover:!bg-white/5 hover:font-semibold",
                  )}
                >
                  Get Started Now
                </button>
                <button
                  className={clsx(
                    "!h-14 flex-col items-center justify-center rounded-none !text-base",
                    "max-w-sm:!border-x-0 flex w-full bg-[#8615ff]  !border-x !border-y border-[#B48CDE]  backdrop-blur-xl transition-colors duration-150 border-dark-border hover:!!bg-white/5 hover:font-semibold",
                  )}
                >
                  Contact Sales / Request Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
};
