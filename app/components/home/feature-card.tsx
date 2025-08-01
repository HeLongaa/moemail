interface FeatureCardProps { 
  icon: React.ReactNode
  title: string
  description: string 
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-3 sm:p-4 rounded border-2 border-primary/20 hover:border-primary/40 transition-colors bg-white/5 backdrop-blur">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="rounded-lg bg-primary/10 text-primary p-1.5 sm:p-2">
          {icon}
        </div>
        <div className="text-left min-w-0 flex-1">
          <h3 className="font-bold text-sm sm:text-base">{title}</h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{description}</p>
        </div>
      </div>
    </div>
  )
} 