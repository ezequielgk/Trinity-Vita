<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()

const isSpanish = computed(() => lang.value.startsWith('es'))

const texts = computed(() => {
  if (isSpanish.value) {
    return {
      discordTitle: '¿Necesitas ayuda?',
      discordSubtitle: 'Únete a nuestra comunidad de Discord para obtener soporte',
      discordButton: 'Unirse a Discord',
      fluxerTitle: 'Mantente actualizado',
      fluxerSubtitle: 'Sigue nuestra comunidad en Fluxer',
      fluxerButton: 'Unirse a Fluxer',
      redditTitle: 'Únete a la Comunidad',
      redditSubtitle: 'Participa en nuestra comunidad de Reddit r/TrinityUnix',
      redditButton: 'Unirse a Reddit'
    }
  }
  return {
    discordTitle: 'Need help?',
    discordSubtitle: 'Join our Discord community to get support',
    discordButton: 'Join Discord',
    fluxerTitle: 'Stay updated',
    fluxerSubtitle: 'Follow our community on Fluxer',
    fluxerButton: 'Join Fluxer',
    redditTitle: 'Join the Community',
    redditSubtitle: 'Discuss in our Reddit community at r/TrinityUnix',
    redditButton: 'Join Reddit'
  }
})

const openDiscord = () => {
  window.open('https://discord.gg/EFFpSCDmcJ', '_blank')
}

const openFluxer = () => {
  window.open('https://fluxer.gg/OlQ0bSc8', '_blank')
}

const openReddit = () => {
  window.open('https://www.reddit.com/r/TrinityUnix/', '_blank')
}

</script>

<template>
  <div class="community-cards-container">
    <!-- Discord Card -->
    <div class="community-card discord-card">
      <div class="content">
        <h3 class="title">{{ texts.discordTitle }}</h3>
        <p class="subtitle">{{ texts.discordSubtitle }}</p>
        
        <button class="action-btn discord-btn" @click="openDiscord">
          <span class="icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.772-.6083 1.1583a18.3249 18.3249 0 00-5.4678 0 12.3533 12.3533 0 00-.6168-1.1583.0768.0768 0 00-.0785-.037 19.7363 19.7363 0 00-4.8851 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" fill="currentColor"/>
            </svg>
          </span>
          {{ texts.discordButton }}
        </button>
      </div>
    </div>

    <!-- Fluxer Card -->
    <div class="community-card fluxer-card">
      <div class="content">
        <h3 class="title">{{ texts.fluxerTitle }}</h3>
        <p class="subtitle">{{ texts.fluxerSubtitle }}</p>
        
        <button class="action-btn fluxer-btn" @click="openFluxer">
          <span class="icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3C6.48 3 2 6.58 2 11c0 2.05.98 3.9 2.56 5.32-.15 1.23-.58 2.32-1.25 3.26-.1.14.02.34.19.29 1.38-.39 2.55-1.06 3.53-1.89.94.32 1.95.5 3 .5 5.52 0 10-3.58 10-8s-4.48-8-10-8z" fill="currentColor"/>
              <circle cx="8" cy="11" r="1.5" fill="var(--vp-c-bg)"/>
              <circle cx="12" cy="11" r="1.5" fill="var(--vp-c-bg)"/>
              <circle cx="16" cy="11" r="1.5" fill="var(--vp-c-bg)"/>
            </svg>
          </span>
          {{ texts.fluxerButton }}
        </button>
      </div>
    </div>

    <!-- Reddit Card -->
    <div class="community-card reddit-card">
      <div class="content">
        <h3 class="title">{{ texts.redditTitle }}</h3>
        <p class="subtitle">{{ texts.redditSubtitle }}</p>
        
        <button class="action-btn reddit-btn" @click="openReddit">
          <span class="icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12A1.25 1.25 0 0 0 8 13.25a1.25 1.25 0 0 0 1.25 1.25 1.25 1.25 0 0 0 0-2.5zm5.5 0a1.25 1.25 0 0 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.094z" fill="currentColor"/>
            </svg>
          </span>
          {{ texts.redditButton }}
        </button>
      </div>
    </div>

  </div>
</template>

<style scoped>
.community-cards-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

@media (min-width: 768px) {
  .community-cards-container {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

.community-card {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 1;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
}

.title {
  color: var(--vp-c-text-1);
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 !important;
  line-height: 1.2;
}

.subtitle {
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  margin: 0 !important;
  margin-bottom: 20px !important;
}

.action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 12px 24px;
  color: white;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
}

.action-btn:hover {
  opacity: 0.9;
}

.action-btn:active {
  transform: scale(0.98);
}

.discord-btn {
  background-color: #5865F2; /* Discord Blurple */
}

.fluxer-btn {
  background-color: #4641D9; /* Fluxer Indigo */
}

.reddit-btn {
  background-color: #FF4500; /* Reddit Orange */
}


.icon {
  display: flex;
  align-items: center;
}
</style>
