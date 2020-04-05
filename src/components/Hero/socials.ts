export class SocialLink {
  public icon: string
  public link: string

  constructor (icon: string, link: string) {
    this.icon = icon
    this.link = link
  }
}

export default [
  new SocialLink('twitter', 'https://twitter.com/unioncollorg'),
  new SocialLink('youtube', 'https://www.youtube.com/channel/UCq3YPDPo0EKCC_88Hn-o2Jg'),
  new SocialLink('instagram', 'https://instagram.com/unioncollorg'),
  new SocialLink('steam', 'https://steamcommunity.com/groups/unioncollective'),
  new SocialLink('mail', 'mailto:contact@unioncollective.org')
]
