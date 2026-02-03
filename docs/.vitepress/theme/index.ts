import DefaultTheme from 'vitepress/theme'
import CommunityCard from './components/CommunityCard.vue'
import DiscordCard from './components/DiscordCard.vue'
import FlatpakButton from './components/FlatpakButton.vue'
import MinecraftButton from './components/MinecraftButton.vue'
import './style.css'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }: { app: any }) {
        app.component('CommunityCard', CommunityCard)
        app.component('DiscordCard', DiscordCard)
        app.component('FlatpakButton', FlatpakButton)
        app.component('MinecraftButton', MinecraftButton)
    }
}
