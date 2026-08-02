---
layout: page
---

<script setup>
import { VPTeamPageTitle, VPTeamMembers } from 'vitepress/theme'
import members from './team-data.json'
</script>

<VPTeamPageTitle>
  <template #title>Unser Team</template>
  <template #lead>Lerne die Entwickler, Designer und Mitwirkenden kennen, die ihre Zeit dem Trinity Launcher widmen.</template>
</VPTeamPageTitle>

<VPTeamMembers size="small" :members="members" />
