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
  CoPython,
  CoLaravel,
  ViFileTypePgsql,
  SiMicrosoftsqlserver,
  ViFileTypeNginx,
  FcDebian,
  SiFastapi,
  ViFileTypeXml,
  ViFileTypeApache,
  FcLinux,
  ViFileTypePhp,
  MdEmail,
  RiWhatsappFill,
  PrSpinner
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
  CoPython,
  CoLaravel,
  ViFileTypePgsql,
  SiMicrosoftsqlserver,
  ViFileTypeNginx,
  FcDebian,
  SiFastapi,
  ViFileTypeXml,
  ViFileTypeApache,
  FcLinux,
  ViFileTypePhp,
  MdEmail,
  RiWhatsappFill,
  PrSpinner
)

const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.mount('#app')
