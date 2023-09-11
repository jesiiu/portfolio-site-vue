import { createApp } from 'vue'
import App from './App.vue'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  BiLinkedin,
  BiGithub,
  FaFacebookMessenger,
  AiStackoverflowSquare,
  BiClipboardDataFill,
  BiTerminalFill,
  CoHome,
  OiPerson,
  BiBook,
  RiGitBranchFill,
  RiMessageLine,
  ViFileTypeVue,
  ViFileTypeHtml,
  ViFileTypeScss2,
  ViFileTypeJsOfficial,
  ViFileTypeCsharp2,
  ViFileTypePython,
  CoLaravel,
  ViFileTypePgsql,
  SiMicrosoftsqlserver,
  ViFileTypeNginx
} from 'oh-vue-icons/icons'

addIcons(
  BiLinkedin,
  BiGithub,
  FaFacebookMessenger,
  AiStackoverflowSquare,
  BiClipboardDataFill,
  BiTerminalFill,
  CoHome,
  OiPerson,
  BiBook,
  RiGitBranchFill,
  RiMessageLine,
  ViFileTypeVue,
  ViFileTypeHtml,
  ViFileTypeScss2,
  ViFileTypeJsOfficial,
  ViFileTypeCsharp2,
  ViFileTypePython,
  CoLaravel,
  ViFileTypePgsql,
  SiMicrosoftsqlserver,
  ViFileTypeNginx
)

const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.mount('#app')
