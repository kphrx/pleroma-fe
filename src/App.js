import UserPanel from './components/user_panel/user_panel.vue'
import NavPanel from './components/nav_panel/nav_panel.vue'
import Notifications from './components/notifications/notifications.vue'
import UserFinder from './components/user_finder/user_finder.vue'

export default {
  name: 'app',
  components: {
    UserPanel,
    NavPanel,
    Notifications,
    UserFinder
  },
  data: () => ({
    mobileActivePanel: 'timeline'
  }),
  computed: {
    currentUser () { return this.$store.state.users.currentUser },
    background () {
      return this.currentUser.background_image || this.$store.state.config.background
    },
    logoStyle () { return { 'background-image': `url(${this.$store.state.config.logo})` } },
    style () { return { 'background-image': `url(${this.background})` } },
    sitename () { return this.$store.state.config.name }
  },
  methods: {
    activatePanel (panelName) {
      this.mobileActivePanel = panelName
    },
    scrollToTop () {
      window.scrollTo(0, 0)
    },
    logout () {
      this.$store.dispatch('logout')
    }
  }
}