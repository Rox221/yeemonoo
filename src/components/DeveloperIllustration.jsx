import freelancerIllustration from '../assets/illustrations/freelancer.svg'

export default function DeveloperIllustration({ className = '' }) {
  return (
    <div className={`relative mx-auto aspect-[4/5] w-full max-w-sm ${className}`}>
      <div className="absolute left-1/2 top-1/2 aspect-square w-[85%] -translate-x-1/2 -translate-y-1/2 -rotate-3 rounded-[58%_42%_45%_55%/45%_55%_48%_52%] border-t-[3px] border-r-[5px] border-b-[4px] border-l-[2px] border-accent-dim bg-paper shadow-[0_25px_50px_-18px_rgba(143,174,0,0.4)] dark:border-accent dark:bg-canvas dark:shadow-[0_25px_50px_-18px_rgba(198,255,0,0.25)]">
        <div className="flex h-full w-full rotate-3 items-center justify-center overflow-hidden">
          <img
            src={freelancerIllustration}
            alt=""
            aria-hidden="true"
            className="animate-float h-[82%] w-[82%] object-contain"
          />
        </div>
      </div>
    </div>
  )
}
