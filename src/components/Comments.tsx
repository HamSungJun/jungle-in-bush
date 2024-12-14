import Giscus from '@giscus/react'
import { useColorMode } from '@docusaurus/theme-common'

export default function Comments() {
  const { colorMode } = useColorMode()

  return (
    <div>
      <Giscus repo="HamSungJun/jungle-in-bush" repoId="R_kgDONTT9-w" category="Announcements" categoryId="DIC_kwDONTT9-84ClOG3" mapping="pathname" strict="0" reactionsEnabled="1" emitMetadata="0" inputPosition="top" theme={colorMode} lang="ko"></Giscus>
    </div>
  )
}
