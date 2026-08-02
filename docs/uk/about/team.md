---
layout: page
---

<script setup>
import { VPTeamPageTitle, VPTeamMembers } from 'vitepress/theme'
import members from './team-data.json'
</script>

<VPTeamPageTitle>
  <template #title>Наша команда</template>
  <template #lead>Познайомтеся з розробниками, дизайнерами та учасниками, які присвячують свій час створенню Trinity Launcher.</template>
</VPTeamPageTitle>

<VPTeamMembers size="small" :members="members" />
