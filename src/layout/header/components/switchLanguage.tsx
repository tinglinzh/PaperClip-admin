import type { MenuProps } from 'antd'
import { TranslationOutlined } from '@ant-design/icons'
import { Button, Dropdown } from 'antd'
import { useTranslation } from 'react-i18next'

export default function SwitchLanguage() {
  const { i18n } = useTranslation()
  const items: MenuProps['items'] = [{
    key: 'zh-CN',
    label: '简体中文',
  }, {
    key: 'en',
    label: 'English',
  }]
  return (
    <Dropdown
      placement="bottom"
      menu={{
        items,
        selectable: true,
        defaultSelectedKeys: [i18n.language === 'zh-CN' ? 'zh-CN' : 'en'],
        onClick: ({ key }) => {
          i18n.changeLanguage(key)
        },
      }}
    >
      <Button type="text" icon={<TranslationOutlined />} />
    </Dropdown>
  )
}
