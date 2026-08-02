---
layout: page
---

<script setup>
import { VPTeamPageTitle, VPTeamMembers } from 'vitepress/theme'
import members from './team-data.json'
</script>

<VPTeamPageTitle>
  <template #title>Nossa Equipe</template>
  <template #lead>Conheça os desenvolvedores, designers e colaboradores que dedicam seu tempo para tornar o Trinity Launcher possível.</template>
</VPTeamPageTitle>

<VPTeamMembers size="small" :members="members" />
