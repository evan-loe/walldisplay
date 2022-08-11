import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const backdrop = {
  visible: { 
    opacity: 1,
    height: '0px'
  },
  hidden: { 
    opacity: 0,
  }
}

const Fadable = ({ showFadable, children }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      { showFadable && (
        <motion.div 
          key='fadable'
          className='fixed top-0 right-0 h-full bg-gray-400/75 z-5'
          variants={backdrop}
          initial={{ opacity: 0, width: '0px' }}
          animate={{ opacity: 1, width: '100%' }}
          exit={{ opacity: 0, width: '0px'}}
          >
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Fadable