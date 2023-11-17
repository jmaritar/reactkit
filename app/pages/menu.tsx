import { DemoPage } from 'components/DemoPage'
import { OpenMenuButton } from '@reactkit/ui/buttons/OpenMenuButton'
import { EditIcon } from '@reactkit/ui/icons/EditIcon'
import { MoonIcon } from '@reactkit/ui/icons/MoonIcon'
import { TrashBinIcon } from '@reactkit/ui/icons/TrashBinIcon'
import { Menu } from '@reactkit/ui/menu'
import { MenuOption, MenuOptionProps } from '@reactkit/ui/menu/MenuOption'
import { makeDemoPage } from 'layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="dW9nVeeVc20" title="Menu">
      <div style={{ maxWidth: 320, width: '100%' }}>
        <Menu
          title="Manage project"
          renderOpener={({ ref, ...props }) => (
            <OpenMenuButton ref={ref} {...props} />
          )}
          renderContent={({ view, onClose }) => {
            const options: MenuOptionProps[] = [
              {
                text: 'Edit project',
                onSelect: () => {
                  console.log('Edit project')
                  onClose()
                },
                icon: <EditIcon />,
              },
              {
                text: 'Make project inactive',
                onSelect: () => {
                  console.log('Make project inactive')
                  onClose()
                },
                icon: <MoonIcon />,
              },
              {
                icon: <TrashBinIcon />,
                text: 'Delete project',
                kind: 'alert',
                onSelect: () => {
                  console.log('Delete project')
                  onClose()
                },
              },
            ]

            return options.map((props, index) => (
              <MenuOption view={view} key={index} {...props} />
            ))
          }}
        />
      </div>
    </DemoPage>
  )
})
