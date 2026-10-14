import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import photo from "./assets/photo.png"; // rename "New pr photo.png" to photo.png
import { profile, projects, skills, education, about, aboutGoal, dsaTopics } from "./data";
 
// One orchestrated moment: tiles appear one after another on page load.
function Tile({ className = "", children, item }) {
  return (
    <motion.section variants={item} className={`glass p-6 md:p-7 ${className}`}>
      {children}
    </motion.section>
  );
}
 
export default function App() {
  const reduce = useReducedMotion();
 
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08 } },
  };
  const item = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };
 
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 md:py-12">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[minmax(11rem,auto)]"
      >
        {/* Hero: the one memorable tile */}
        <Tile item={item} className="md:col-span-2 md:row-span-2 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4">
              <img
                src={photo}
                alt="Vijay Pawar"
                className="h-20 w-20 md:h-24 md:w-24 rounded-full object-cover border-2 border-[var(--yellow)]"
              />
              <p className="inline-flex items-center gap-2 text-sm text-[var(--muted)]">
                <span className="h-2 w-2 rounded-full bg-[var(--yellow)]" />
                Open to work
              </p>
            </div>
            <h1 className="display mt-6 text-5xl font-extrabold leading-[1.02] md:text-7xl">
              {profile.name}
            </h1>
            <p className="display mt-3 text-2xl font-semibold text-[var(--yellow)]">
              {profile.title}
            </p>
            <p className="mt-4 max-w-md text-[var(--muted)]">{profile.intro}</p>
          </div>
 
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn-primary" href={profile.cv} download>
              Download CV
            </a>
            <a className="btn-ghost" href={`mailto:${profile.email}`}>
              Email me
            </a>
          </div>
        </Tile>
 
        {/* Projects */}
        {projects.map((p) => (
          <Tile key={p.title} item={item} className="md:col-span-2 flex flex-col justify-between">
            <div>
              <h2 className="display text-2xl font-semibold">{p.title}</h2>
              <p className="mt-2 text-[var(--muted)]">{p.text}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-5 flex gap-5 text-sm font-medium">
              <a className="underline decoration-[var(--yellow)] underline-offset-4" href={p.repo} target="_blank" rel="noreferrer">
                {p.repo2 ? "Backend code" : "View code"}
              </a>
              {p.repo2 && (
                <a className="underline decoration-[var(--yellow)] underline-offset-4" href={p.repo2} target="_blank" rel="noreferrer">
                  Frontend code
                </a>
              )}
            </div>
          </Tile>
        ))}
 
        {/* Skills */}
        <Tile item={item} className="md:col-span-2">
          <h2 className="display text-2xl font-semibold">Skills</h2>
          <div className="mt-4 space-y-4">
            {skills.map((g) => (
              <div key={g.group}>
                <p className="text-sm text-[var(--muted)]">{g.group}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Tile>
 
        {/* DSA */}
        <Tile item={item} className="flex flex-col gap-4">
          <h2 className="display text-2xl font-semibold">Problem solving</h2>
          <div className="flex flex-wrap gap-2">
            {dsaTopics.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-auto">
            <p className="display text-5xl font-extrabold text-[var(--yellow)]">25+</p>
            <p className="mt-1 text-[var(--muted)]">LeetCode problems solved in Java</p>
          </div>
        </Tile>
 
        {/* Education */}
        <Tile item={item}>
          <h2 className="display text-2xl font-semibold">Education</h2>
          <div className="mt-3 space-y-4">
            {education.map((e) => (
              <div key={e.degree}>
                <p className="font-medium">{e.degree}</p>
                <p className="text-sm text-[var(--muted)]">{e.place}</p>
                <p className="text-sm text-[var(--yellow)]">{e.year}</p>
              </div>
            ))}
          </div>
        </Tile>
 
        {/* About */}
        <Tile item={item} className="md:col-span-2">
          <h2 className="display text-2xl font-semibold">About me</h2>
          <p className="mt-3 text-[var(--muted)] max-w-prose">{about}</p>
          <p className="mt-3 max-w-prose">{aboutGoal}</p>
        </Tile>
 
        {/* Contact */}
        <Tile item={item} className="md:col-span-2 flex flex-col justify-between">
          <h2 className="display text-2xl font-semibold">Let's talk</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <a className="btn-ghost inline-flex items-center gap-2" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <FaGithub /> GitHub
            </a>
            <a className="btn-ghost inline-flex items-center gap-2" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <FaLinkedinIn /> LinkedIn
            </a>
            <a className="btn-ghost inline-flex items-center gap-2" href={`mailto:${profile.email}`} aria-label="Send email">
              <FaEnvelope /> {profile.email}
            </a>
          </div>
        </Tile>
      </motion.div>
    </main>
  );
}