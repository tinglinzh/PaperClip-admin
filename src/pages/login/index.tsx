import paperclipIcon from '@/assets/images/paperclip.png'
import { useEffect } from 'react'

export function Login() {
  useEffect(() => {
  }, [])
  return (
    <div className="flex h-screen items-center justify-center bg-[url('@/assets/images/login-bg.png')] bg-contain bg-center bg-no-repeat">
      <div className="flex items-center rounded-md bg-white shadow-sm">
        <img src={paperclipIcon} className="size-16" alt="" />
        <p className="text-2xl">
          paperclip 管理系统
        </p>
      </div>
    </div>
  )
}
