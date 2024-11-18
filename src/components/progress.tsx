import nProgress from 'nprogress'

import './progress.css'

const NProgress: React.FC = () => {
  nProgress.configure({ showSpinner: false })
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
