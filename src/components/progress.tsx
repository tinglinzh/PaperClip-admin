import nProgress from 'nprogress'

import React, { Fragment, useEffect } from 'react'
import './progress.css'

const NProgress: React.FC = () => {
  useEffect(() => {
    nProgress.start()
    return () => {
      nProgress.done()
    }
  }, [])
  return (
    <span className="loader"></span>
  )
}

export default NProgress
