import { useState } from 'react'

/*
 * Editorial case-study visuals. Each project declares a `visualType` that
 * picks a composition (browser window, device frame, terminal, or a plain
 * plate). Every composition shares the same outer frame + caption strip so
 * the section still reads as one system even though the insides differ.
 *
 * Drop a real screenshot at `project.image` (see /public/projects/README.md)
 * and it replaces the placeholder automatically — no code changes needed.
 */

function Bar({ className = '' }) {
  return <div className={`rounded-[2px] bg-neutral-900/[0.07] dark:bg-bone/[0.08] ${className}`} />
}

function BrowserPlaceholder() {
  return (
    <div className="flex h-full flex-col gap-3 p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <Bar className="h-2 w-20" />
        <div className="flex gap-2">
          <Bar className="h-2 w-6" />
          <Bar className="h-2 w-6" />
        </div>
      </div>
      <Bar className="mt-2 h-7 w-3/4 sm:h-8" />
      <div className="h-2 w-1/2 rounded-[2px] bg-accent-dim/25 dark:bg-accent/25" />
      <div className="mt-3 grid flex-1 grid-cols-3 gap-3">
        <Bar className="h-full" />
        <Bar className="h-full" />
        <Bar className="h-full" />
      </div>
    </div>
  )
}

function DevicePlaceholder() {
  return (
    <div className="flex h-full flex-col gap-2.5 p-4">
      <Bar className="h-2 w-1/3" />
      <div className="h-2 w-2/3 rounded-[2px] bg-accent-dim/25 dark:bg-accent/25" />
      <div className="mt-2 flex flex-1 flex-col gap-2">
        <Bar className="h-9" />
        <Bar className="h-9" />
        <Bar className="h-9" />
      </div>
    </div>
  )
}

function TerminalPlaceholder({ command }) {
  return (
    <div className="flex h-full flex-col gap-2.5 p-5 font-mono text-[12.5px] leading-relaxed text-bone/60 sm:text-[13px]">
      <p>
        <span className="text-accent">❭</span> {command}
      </p>
      <div className="mt-1 space-y-1.5">
        <div className="h-2 w-4/5 rounded-[2px] bg-bone/10" />
        <div className="h-2 w-3/5 rounded-[2px] bg-bone/10" />
        <div className="h-2 w-2/3 rounded-[2px] bg-bone/10" />
      </div>
      <p className="mt-auto text-bone/35">done</p>
    </div>
  )
}

function MetricPlaceholder({ project }) {
  return (
    <div className="flex h-full flex-col items-start justify-center gap-2 p-6 sm:p-8">
      <p className="font-display text-5xl font-semibold leading-none tracking-tight text-accent-dim dark:text-accent sm:text-6xl">
        {project.metric?.value}
      </p>
      <p className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
        {project.metric?.label}
      </p>
    </div>
  )
}

function PlatePlaceholder({ layers }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-0 p-6">
      {layers.map((label, i) => (
        <div key={label} className="flex flex-col items-center">
          <div className="flex h-11 w-full max-w-[240px] items-center justify-center border border-neutral-900/15 px-4 font-mono text-[10px] uppercase tracking-widest text-neutral-500 dark:border-bone/15 dark:text-neutral-500">
            {label}
          </div>
          {i < layers.length - 1 && <div className="h-6 w-px bg-neutral-900/15 dark:bg-bone/15" aria-hidden="true" />}
        </div>
      ))}
    </div>
  )
}

function BrowserFrame({ project, media }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2 border-b border-neutral-900/10 px-3 py-2 dark:border-neutral-100/10">
        <span className="h-1.5 w-1.5 flex-none rounded-full bg-neutral-300 dark:bg-neutral-700" aria-hidden="true" />
        <span className="truncate font-mono text-[10px] text-neutral-400 dark:text-neutral-600">
          {project.url ?? 'localhost'}
        </span>
      </div>
      <div className="relative flex-1">{media ?? <BrowserPlaceholder />}</div>
    </div>
  )
}

function DeviceFrame({ project, media }) {
  return (
    <div className="flex h-full items-center justify-center py-6">
      <div className="relative flex h-full w-[58%] max-w-[220px] flex-col overflow-hidden rounded-[1.5rem] border-[3px] border-neutral-900/15 bg-paper dark:border-bone/15 dark:bg-ink">
        <div className="flex justify-center py-2">
          <span className="h-1 w-8 rounded-full bg-neutral-900/15 dark:bg-bone/15" aria-hidden="true" />
        </div>
        <div className="relative flex-1">{media ?? <DevicePlaceholder />}</div>
      </div>
    </div>
  )
}

function TerminalFrame({ project, media }) {
  return (
    <div className="flex h-full flex-col bg-ink text-bone">
      <div className="flex items-center border-b border-bone/10 px-3 py-2">
        <span className="truncate font-mono text-[10px] text-bone/40">
          {(project.name ?? 'session').toLowerCase().replace(/\s+/g, '-')} — zsh
        </span>
      </div>
      <div className="relative flex-1">{media ?? <TerminalPlaceholder command={project.command ?? 'run'} />}</div>
    </div>
  )
}

function PlateFrame({ project, media }) {
  return <div className="relative h-full">{media ?? <PlatePlaceholder layers={project.layers ?? ['Client', 'Server', 'Data']} />}</div>
}

function MetricFrame({ project, media }) {
  return <div className="relative h-full">{media ?? <MetricPlaceholder project={project} />}</div>
}

const FRAMES = {
  browser: BrowserFrame,
  device: DeviceFrame,
  terminal: TerminalFrame,
  plate: PlateFrame,
  metric: MetricFrame,
}

export default function ProjectVisual({ project, className = '' }) {
  const [imgFailed, setImgFailed] = useState(false)
  const Frame = FRAMES[project.visualType] ?? BrowserFrame
  const showImage = Boolean(project.image) && !imgFailed

  const media = showImage ? (
    <img
      src={project.image}
      alt={project.imageAlt || `${project.name} preview`}
      loading="lazy"
      onError={() => setImgFailed(true)}
      className="absolute inset-0 h-full w-full object-cover object-top"
    />
  ) : null

  return (
    <div
      className={`group relative flex flex-col overflow-hidden border border-neutral-900/10 bg-paper dark:border-neutral-100/10 dark:bg-ink ${className}`}
    >
      <div className="min-h-0 flex-1">
        <Frame project={project} media={media} />
      </div>
      <div className="flex items-center justify-between border-t border-neutral-900/10 px-4 py-2.5 dark:border-neutral-100/10">
        <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
          {project.tag}
        </span>
        <span className="font-mono text-[10px] text-neutral-400 dark:text-neutral-600">{project.year}</span>
      </div>
    </div>
  )
}
