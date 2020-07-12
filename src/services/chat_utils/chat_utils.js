import { showDesktopNotification } from '../desktop_notification_utils/desktop_notification_utils.js'

export const maybeShowChatNotification = (store, chat) => {
  if (!chat.lastMessage) return

  const opts = {
    tag: chat.lastMessage.id,
    title: chat.account.name,
    icon: chat.account.profile_image_url,
    body: chat.lastMessage.content
  }

  if (chat.lastMessage.attachment && chat.lastMessage.attachment.type === 'image') {
    opts.image = chat.lastMessage.attachment.preview_url
  }

  showDesktopNotification(store.rootState, opts)
}
