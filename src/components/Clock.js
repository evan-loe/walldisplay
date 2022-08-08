import React from 'react'
import { useEffect, useState } from 'react'

function Clock({ className }) {

  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const refreshTimer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(refreshTimer)
  }, [])


  return (
    <div className={className}>
      <div className="text-white font-urbanist text-6xl">{time.toLocaleTimeString()}</div>
    </div>
  )
}

export default Clock