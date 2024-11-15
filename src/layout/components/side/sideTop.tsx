import paperclipIcon from '@/assets/images/paperclip.png'
// 定义子组件的 props 类型
interface SideTopProps {
  collapsed: boolean
}
export default function SideTop({ collapsed }: SideTopProps) {
  return (
    <div className="flex h-[56px] w-full items-center justify-center gap-1 px-[10px]">
      <img src={paperclipIcon} className="size-8" alt="" />
      {!collapsed && (
        <div className="w-full overflow-hidden text-ellipsis text-nowrap text-center text-[16px]">Paperclip 管理系统</div>
      )}
    </div>
  )
}
