import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  techStack,
}) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-2xl p-12">
      <div className="absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          width={300}
          height={200}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 dark:text-light"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold ">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light ">
          {summary}
          <br />
          <span className="italic dark:text-light/75text-dark/75 ">
            Tech Stack :{techStack}
          </span>{" "}
        </p>
        <div className="mt-2 flex items-center dark:text-light">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github, techStack }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative">
      <div className="absolute top-0 -right-2 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          width={300}
          height={200}
          className="w-full h-auto"
          sizes="100vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light">
            {title}
          </h2>
          <span className="italic dark:text-light/75 text-dark/75 ">
            Tech Stack :{techStack}
          </span>
        </Link>
        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold dark:text-light"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 dark:text-light">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const MobileProject = ({ title, type, img, link, github, techStack }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative h-[67rem]">
      <div className="absolute top-0 -right-2 -z-10 w-[102%] h-[101.5%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          width={300}
          height={200}
          className="w-full h-auto"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light">
            {title}
          </h2>
          <span className="italic dark:text-light/75 text-dark/75 ">
            Tech Stack :{techStack}
          </span>
        </Link>
        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold dark:text-light"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 dark:text-light">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Octivion | Project</title>
        <meta name="Octivion" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Udbhav"
                img="https://ik.imagekit.io/octivion/Portfolio/udbhav?updatedAt=1688136734584"
                summary="Web portal for college cultural fest with React,
Tailwind , Spline, React-Router and Firebase. Here individual can login into there portal and register for upcoming events."
                link="https://www.udbhav.life/"
                github="https://github.com/Rohit22-dev/udbhav"
                type="Featured Project"
                techStack="React, Tailwind, DaisiUI, Firebase"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Blog"
                img="https://ik.imagekit.io/octivion/Portfolio/Screenshot_2023-07-17_183103_IWC5L_j7i.png?updatedAt=1689599178234"
                summary="Web portal for college cultural fest with React,
Tailwind , Spline, React-Router and Firebase. Here individual can login into there portal and register for upcoming events."
                link="https://storysage.vercel.app"
                github="https://github.com/Rohit22-dev/Blog"
                type="Featured Project"
                techStack="React, Tailwind, NodeJs, ExpressJs, MongoDB, Redux"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Chatapp"
                img="https://ik.imagekit.io/octivion/Portfolio/chatapp?updatedAt=1681589865178"
                summary="Web portal for college cultural fest with React,
Tailwind , Spline, React-Router and Firebase. Here individual can login into there portal and register for upcoming events."
                link="https://o-chatapp.vercel.app"
                github="https://github.com/Rohit22-dev/ChatApp"
                type="Featured Project"
                techStack="React, Tailwind, DaisiUI, Firebase, Redux"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Weather"
                img="https://ik.imagekit.io/octivion/Portfolio/weather?updatedAt=1681590452032"
                summary="Web portal for college cultural fest with React,
Tailwind , Spline, React-Router and Firebase. Here individual can login into there portal and register for upcoming events."
                link="https://forecastfox.vercel.app/"
                github="https://github.com/Rohit22-dev/Weather"
                type="Featured Project"
                techStack="React, Tailwind, Weather API"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Socialmedia"
                img="https://ik.imagekit.io/octivion/Portfolio/socialmedia?updatedAt=1681590860152"
                summary="Web portal for college cultural fest with React,
                Tailwind , Spline, React-Router and Firebase. Here individual can login into there portal and register for upcoming events."
                link="https://octipedia.netlify.app/"
                github="https://github.com/Rohit22-dev/Octimedia"
                type="Featured Project"
                techStack="React, Express, MongoDB , Node"
              />
            </div>
            {/* <div className="col-span-6">
              <Project
                title="NewsApp"
                img="https://ik.imagekit.io/octivion/Portfolio/newsapp?updatedAt=1681589362713"
                summary="Web portal for college cultural fest with React,
                Tailwind , Spline, React-Router and Firebase. Here individual can login into there portal and register for upcoming events."
                link="/"
                github="https://github.com/Rohit22-dev/NewsApp-web"
                type="Featured Project"
                techStack="React, Tailwind, NewsAPI"
              />
            </div> */}
            <div className="col-span-4">
              <MobileProject
                title="News"
                img="https://ik.imagekit.io/octivion/Portfolio/news-android?updatedAt=1681592819613"
                summary="Web portal for college cultural fest with React,
Tailwind , Spline, React-Router and Firebase. Here individual can login into there portal and register for upcoming events."
                link="/"
                github="https://github.com/Rohit22-dev/NewsApp"
                type="Featured Project"
                techStack="ReactNative, NewsAPI"
              />
            </div>
            <div className="col-span-4">
              <MobileProject
                title="ChatApp"
                img="https://ik.imagekit.io/octivion/Portfolio/Screenshot_1688618289_1__DvCQAyEo2.png?updatedAt=1688618562808"
                summary="Web portal for college cultural fest with React,
Tailwind , Spline, React-Router and Firebase. Here individual can login into there portal and register for upcoming events."
                link="/"
                github="https://github.com/Rohit22-dev/Chatapp-Android"
                type="Featured Project"
                techStack="ReactNative, Firebase, Redux"
              />
            </div>
            <div className="col-span-4">
              <MobileProject
                title="Food App"
                img="https://ik.imagekit.io/octivion/Portfolio/foodapp?updatedAt=1681592847694"
                summary="Web portal for college cultural fest with React,
Tailwind , Spline, React-Router and Firebase. Here individual can login into there portal and register for upcoming events."
                link="/"
                github="https://github.com/Rohit22-dev/ReactNative-foodApp"
                type="Featured Project"
                techStack="ReactNative"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
