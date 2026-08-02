---
layout: page
---

<script setup>
import { VPTeamPageTitle, VPTeamMembers } from 'vitepress/theme'
import members from './team-data.json'
</script>

<VPTeamPageTitle>
  <template #title>Наша команда</template>
  <template #lead>Познакомьтесь с разработчиками, дизайнерами и участниками, которые посвящают своё время созданию Trinity Launcher.</template>
</VPTeamPageTitle>

<VPTeamMembers size="small" :members="members" />
