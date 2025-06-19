'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface HelloResponse {
  message: string
  timestamp: string
  app: string
}

interface GlassHelloProps {
  message?: string
}

export function GlassHello({ message }: GlassHelloProps) {
  const [apiMessage, setApiMessage] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchHello() {
      try {
        const response = await fetch('/api/hello')
        const data: HelloResponse = await response.json()
        setApiMessage(data.message)
      } catch (error) {
        console.error('Erreur lors de la récupération du message:', error)
        setApiMessage('Bonjour')
      } finally {
        setIsLoading(false)
      }
    }

    if (!message) {
      fetchHello()
    } else {
      setIsLoading(false)
    }
  }, [message])

  const displayMessage = message || apiMessage

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.175, 0.885, 0.32, 2.2]
      }}
      className="glass-container"
    >
      <div className="glass-filter" />
      <div className="glass-overlay" />
      <div className="glass-specular" />
      <motion.div 
        className="glass-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        {isLoading ? (
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ...
          </motion.div>
        ) : (
          displayMessage
        )}
      </motion.div>
    </motion.div>
  )
}
