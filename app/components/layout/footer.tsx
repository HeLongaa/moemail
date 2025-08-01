import { Github } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-3 max-w-4xl">
        <div className="text-center space-y-2 text-sm text-muted-foreground">
          {/* 第一行 */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span>由</span>
            <Link 
              href="https://blog.helong.online" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              HeLong
            </Link>
            <span>使用</span>
            <Link 
              href="https://github.com/beilunyang/moemail" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <Github className="w-4 h-4" />
              NeoMail
            </Link>
            <span>搭建</span>
          </div>
          
          {/* 分割线 */}
          <div className="border-t border-border/30 w-16 mx-auto"></div>
          
          {/* 第二行 */}
          <div className="flex items-center justify-center gap-2">
            <span>部署于</span>
            <div className="inline-flex items-center gap-1 text-primary font-medium">
              <CloudflareIcon className="w-4 h-4 fill-current" />
              Cloudflare
            </div>
          </div>
          
          {/* 分割线 */}
          <div className="border-t border-border/30 w-16 mx-auto"></div>
          
          {/* 第三行 */}
          <div>
            <span>陇ICP备2024006356号-2</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Cloudflare 图标组件
function CloudflareIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.7 14.7c.2-.3.3-.7.3-1.1 0-1-.8-1.8-1.8-1.8h-.1c-.6-3.2-3.4-5.6-6.8-5.6-2.8 0-5.3 1.7-6.4 4.3-.5-.2-1-.3-1.6-.3C3.2 10.2 2 11.4 2 12.5c0 .3.1.6.2.9-.1.2-.2.5-.2.8 0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2 0-.4-.1-.8-.3-1.5z"/>
    </svg>
  )
}
