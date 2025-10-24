"use client"

import { useEffect, useRef } from 'react'

export default function Starfield({ density = 0.0006 }){
  const ref = useRef(null)

  useEffect(()=>{
    const canvas = ref.current
    if(!canvas) return
    const ctx = canvas.getContext('2d')

    let w = canvas.width = innerWidth
    let h = canvas.height = innerHeight
    let raf = null

  const stars = []

    function rand(min, max){ return Math.random() * (max - min) + min }

    function initStars(){
      stars.length = 0
      const count = Math.ceil(w * h * density)
      for(let i=0;i<count;i++){
        stars.push({
          x: Math.random()*w,
          y: Math.random()*h,
          r: Math.random()*1.25 + 0.2,
          a: Math.random()*0.9 + 0.1,
          tw: Math.random()*0.02 + 0.005
        })
      }
    }


    function resize(){
      w = canvas.width = innerWidth
      h = canvas.height = innerHeight
      initStars()
    }

    function tick(){
      ctx.clearRect(0,0,w,h)

      // draw stars
      for(const s of stars){
        s.a += (Math.random()-0.5) * s.tw
        if(s.a < 0.05) s.a = 0.05
        if(s.a > 1) s.a = 1
        ctx.beginPath()
        ctx.fillStyle = `rgba(255,255,255,${s.a})`
        ctx.arc(s.x, s.y, s.r, 0, Math.PI*2)
        ctx.fill()
      }

  // (shooting stars disabled) -- keep only static stars for a cleaner background

      raf = requestAnimationFrame(tick)
    }

    initStars()
    raf = requestAnimationFrame(tick)
    window.addEventListener('resize', resize)

    return ()=>{
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [density])

  return (
    <canvas ref={ref} className="fixed inset-0 -z-10 w-full h-full pointer-events-none" />
  )
}
