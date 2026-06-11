import { motion } from 'framer-motion'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function GlassCard({ children, className = '', delay = 0 }: GlassCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay }}
      className={`rounded-3xl border border-white/10 bg-white/8 p-6 shadow-[0_20px_60px_rgba(17,24,39,0.45)] backdrop-blur-xl ${className}`}
    >
      {children}
    </motion.article>
  )
}
