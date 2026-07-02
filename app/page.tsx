"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Github,
  Mail,
  Menu,
  Moon,
  Send,
  Sparkles,
  Sun,
  X
} from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  contactLinks,
  highlights,
  journey,
  navItems,
  projects,
  services,
  skills,
  techStack
} from "@/lib/data";
import { useThemeStore } from "@/lib/theme-store";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Please write at least 10 characters.")
});

type ContactValues = z.infer<typeof contactSchema>;

export default function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { mode, toggleMode } = useThemeStore();
  const isDark = mode === "dark";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  function onSubmit() {
    setSubmitted(true);
    reset();
  }

  return (
    <main className="min-h-screen overflow-hidden">
      <SiteHeader
        isDark={isDark}
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((value) => !value)}
        onThemeToggle={toggleMode}
        onNavClick={() => setMenuOpen(false)}
      />

      <section id="home" className="relative isolate min-h-screen px-5 pb-16 pt-28 sm:px-8 lg:px-10">
        <HeroBackground />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative z-10 animate-fadeUp">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm text-muted shadow-card backdrop-blur">
              <Sparkles className="h-4 w-4 text-accent" />
              Electronics Engineer to Full-Stack Developer
            </div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-accent">
              Javaid Khan
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-tight text-foreground sm:text-6xl lg:text-7xl">
              Aspiring Junior Full-Stack Developer
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-muted">
              Electronics Engineer transitioning into modern web development,
              building scalable digital solutions with clean and efficient code.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="#skills" className="btn-primary group">
                View Skills
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Link>
              <Link href="#contact" className="btn-secondary group">
                Contact Me
                <Mail className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {highlights.map((item) => (
                <div key={item.label} className="glass-card p-4">
                  <p className="text-xs text-muted">{item.label}</p>
                  <p className="mt-1 font-semibold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-xl animate-fadeUp lg:max-w-none">
            <div className="relative min-h-[500px]">
              <div className="absolute inset-6 rounded-[2rem] border border-accent/25 bg-accent/10 blur-3xl" />
              <div className="relative ml-auto max-w-[430px] overflow-hidden rounded-[2rem] border border-border bg-card/80 p-4 shadow-card backdrop-blur-xl">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-900">
                  <Image
                    src="/images/javaid-khan-photo.jpg"
                    alt="Portrait of Javaid Khan"
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, 430px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-transparent p-6">
                    <p className="text-sm text-sky-100">Learning stack</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {techStack.slice(0, 4).map((tech) => (
                        <span key={tech} className="rounded-full bg-white/12 px-3 py-1 text-xs text-white backdrop-blur">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-0 top-10 hidden w-48 animate-float rounded-2xl border border-border bg-white p-4 shadow-card dark:bg-white/95 sm:block">
                <Image
                  src="/images/jkhan-design-logo.png"
                  alt="JK Design logo"
                  width={320}
                  height={120}
                  className="h-auto w-full object-contain"
                />
              </div>
              <div className="absolute bottom-4 left-2 right-2 rounded-2xl border border-border bg-card/90 p-4 shadow-card backdrop-blur sm:left-auto sm:w-72">
                <p className="text-sm text-muted">Current focus</p>
                <p className="mt-1 font-semibold text-foreground">
                  Practical full-stack foundations for useful web applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="about" eyebrow="About Me" title="Engineering discipline, developer mindset.">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-card p-6 sm:p-8">
            <p className="text-lg leading-8 text-muted">
              I am Javaid Khan, an Electronics Engineering graduate from Sir Syed
              University of Engineering and Technology, Karachi.
              I am now focused on modern full-stack web development, nowadays studying 
              in GIAIC, Karachi. Learning by building with YouTube, online platforms, 
              documentation, and consistent hands-on practice.
            </p>
            <p className="mt-5 text-lg leading-8 text-muted">
              My goal is to help businesses and communities transform ideas into
              scalable, functional web applications. I value clean code,
              adaptability, real-world problem solving, and technology that keeps
              creating value over time.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {journey.map((item) => (
              <div key={item.text} className="glass-card group p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50">
                <item.icon className="h-8 w-8 text-accent" />
                <p className="mt-5 leading-7 text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="skills" eyebrow="Skills" title="A growing full-stack toolkit.">
        <div className="grid gap-5 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.title} className="glass-card p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent">
                  <group.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{group.title}</h3>
              </div>
              <div className="mt-6 space-y-5">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between gap-3 text-sm">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-muted">{skill.level}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted/20">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent to-accent2"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="services" eyebrow="Services" title="Future-focused ways I can help.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="glass-card group p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/60">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent transition group-hover:bg-accent group-hover:text-slate-950">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold">{service.title}</h3>
              <p className="mt-3 leading-7 text-muted">{service.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="projects" eyebrow="Projects" title="Building in progress.">
        <div className="glass-card overflow-hidden p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-2 text-sm font-medium text-accent">
                <CheckCircle2 className="h-4 w-4" />
                Coming Soon
              </div>
              <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
                Projects are currently under development as I continue building
                my skills in full-stack web development.
              </p>
              <Link href="https://github.com/dashboard" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 font-semibold text-accent">
                GitHub placeholder
                <Github className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4">
              {projects.map((project) => (
                <article key={project.title} className="rounded-2xl border border-border bg-background/45 p-5">
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                      <project.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-bold">{project.title}</h3>
                        <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                          {project.status}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted">{project.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Let’s connect and build forward.">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-card p-6 sm:p-8">
            <p className="text-lg leading-8 text-muted">
              I am open to learning opportunities, junior developer roles,
              collaboration, and practical projects that turn useful ideas into
              dependable web experiences.
            </p>
            <div className="mt-8 space-y-4">
              {contactLinks.map((link) => (
                <Link key={link.label} href={link.href} className="flex items-center gap-4 rounded-2xl border border-border bg-background/45 p-4 transition hover:border-accent/60 hover:text-accent">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent">
                    <link.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-muted">{link.label}</span>
                    <span className="font-semibold">{link.value}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" error={errors.name?.message}>
                <input {...register("name")} className="form-input" placeholder="Your name" />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input {...register("email")} className="form-input" placeholder="you@example.com" />
              </Field>
            </div>
            <div className="mt-5">
              <Field label="Message" error={errors.message?.message}>
                <textarea {...register("message")} className="form-input min-h-36 resize-y" placeholder="Tell me about your idea or opportunity" />
              </Field>
            </div>
            <button type="submit" disabled={isSubmitting} className="btn-primary mt-6 w-full justify-center sm:w-auto">
              Submit Message
              <Send className="h-4 w-4" />
            </button>
            {submitted ? (
              <p className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300 dark:text-emerald-200">
                Thanks. This frontend form is ready for a backend connection later.
              </p>
            ) : null}
          </form>
        </div>
      </Section>
    </main>
  );
}

function SiteHeader({
  isDark,
  menuOpen,
  onMenuToggle,
  onThemeToggle,
  onNavClick
}: {
  isDark: boolean;
  menuOpen: boolean;
  onMenuToggle: () => void;
  onThemeToggle: () => void;
  onNavClick: () => void;
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="#home" className="flex items-center gap-3" onClick={onNavClick}>
          <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-xl bg-white p-1 shadow-glow">
            <Image src="/images/jkhan-design-logo.png" alt="JK Design" width={96} height={48} className="h-auto w-full object-contain" />
          </span>
          <span className="font-black leading-tight">
            Javaid Khan
            <span className="block text-sm font-medium text-muted">Developer Portfolio</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm font-medium text-muted transition hover:bg-card hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button aria-label="Toggle theme" onClick={onThemeToggle} className="icon-button">
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button aria-label="Toggle menu" onClick={onMenuToggle} className="icon-button lg:hidden">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className={cn("grid transition-all duration-300 lg:hidden", menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <nav className="overflow-hidden px-5 sm:px-8">
          <div className="mb-5 grid gap-2 rounded-2xl border border-border bg-card/95 p-3 shadow-card">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={onNavClick} className="rounded-xl px-4 py-3 text-sm font-medium text-muted transition hover:bg-background hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-sm text-red-300">{error}</span> : null}
    </label>
  );
}

function HeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.14)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_32%),radial-gradient(circle_at_78%_18%,rgba(16,185,129,0.14),transparent_30%),linear-gradient(to_bottom,transparent, hsl(var(--background))_86%)]" />
      <div className="absolute left-1/2 top-28 h-24 w-[70vw] -translate-x-1/2 rotate-6 rounded-full bg-accent/10 blur-2xl animate-scan" />
    </div>
  );
}
