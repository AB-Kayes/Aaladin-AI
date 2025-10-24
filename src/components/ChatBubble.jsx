"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ChatBubble(){
  const [open, setOpen] = useState(false)
  return (
    <div className="fixed right-6 bottom-6 z-50">
      <motion.button whileTap={{ scale: 0.95 }} onClick={()=>setOpen(!open)} className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-cyan-400 text-white shadow-xl flex items-center justify-center">🤖</motion.button>
      {open && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-3 w-80 bg-white/6 backdrop-blur rounded-2xl p-4 border border-white/6">
          <div className="text-sm text-slate-200">Hi, I'm Aaladin — ask me about our services.</div>
        </motion.div>
      )}
    </div>
  )
}
