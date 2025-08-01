"use client"

import Link from "next/link"

export function Logo() {
  return (
    <Link 
      href="/"
      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
    >
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-px">
          <svg t="1754079332782" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6643" width="32" height="32"><path d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#608BE9" p-id="6644"></path><path d="M192 302m32 0l576 0q32 0 32 32l0 356q0 32-32 32l-576 0q-32 0-32-32l0-356q0-32 32-32Z" fill="#EAEDF5" p-id="6645"></path><path d="M224 722h576c17.673 0 32-14.327 32-32v-58C660.96 493.333 554.294 424 512 424c-42.294 0-148.96 69.333-320 208v58c0 17.673 14.327 32 32 32z" fill="#CCDAF7" p-id="6646"></path><path d="M224 302h576c17.673 0 32 14.327 32 32v58C651.35 517.333 544.683 580 512 580c-32.683 0-139.35-62.667-320-188v-58c0-17.673 14.327-32 32-32z" fill="#FFFFFF" p-id="6647"></path></svg>
        </div>
      </div>
      <span className="font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
        TMail - HeLong
      </span>
    </Link>
  )
}