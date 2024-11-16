import paperclipIcon from '@/assets/images/paperclip.png'
import { theme } from 'antd'

// 定义子组件的 props 类型
interface SideTopProps {
  collapsed: boolean
}
export default function SideTop({ collapsed }: SideTopProps) {
  const { t } = useTranslation('app')
  const { token } = theme.useToken()

  return (
    <div className="flex h-[56px] w-full items-center justify-center gap-1 px-[10px]">
      <img src={paperclipIcon} className="size-8" alt="" />
      {!collapsed && (
        <div className="w-full overflow-hidden text-ellipsis text-nowrap text-center text-[16px]" style={{ color: token.colorPrimary }}>{t('systemName')}</div>
      )}
    </div>
  )
}
