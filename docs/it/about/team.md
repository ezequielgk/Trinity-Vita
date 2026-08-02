---
layout: page
---

<script setup>
import { VPTeamPageTitle, VPTeamMembers } from 'vitepress/theme'
import members from './team-data.json'
</script>

<VPTeamPageTitle>
  <template #title>Il nostro team</template>
  <template #lead>Scopri gli sviluppatori, i designer e i collaboratori che dedicano il loro tempo a rendere possibile Trinity Launcher.</template>
</VPTeamPageTitle>

<VPTeamMembers size="small" :members="members" />
