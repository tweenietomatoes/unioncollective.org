// images
import defaultImage from '../../assets/images/players/default.png'
import hamiImage from '../../assets/images/players/hami.png'
import lewhghImage from '../../assets/images/players/lewhgh.png'

export class PlayerSocial {
  public icon: string
  public link: string

  constructor (icon: string, link: string) {
    this.icon = icon
    this.link = link
  }
}

export class Player {
  public alias: string
  public name: string
  public socials: PlayerSocial[]
  public image: any
  public country: string
  public roles: string[]

  constructor (alias: string, name: string, socials: PlayerSocial[], image: any, country: string, roles: string[]) {
    this.alias = alias
    this.name = name
    this.socials = socials
    this.image = image
    this.country = country
    this.roles = roles
  }
}

export default [
  new Player('hami', 'Sean Hamilton', [
    new PlayerSocial('twitter', 'https://twitter.com/y0hami'),
    new PlayerSocial('twitch', 'https://twitch.tv/y0hami'),
    new PlayerSocial('youtube', 'https://youtube.com/y0hami')
  ], hamiImage, 'uk', ['In-Game Leader', 'AWP']),
  new Player('LewHgh', 'Lewis Hughes', [
    new PlayerSocial('twitter', 'https://twitter.com/LewHgh'),
    new PlayerSocial('twitch', 'https://twitch.tv/LewHgh'),
    new PlayerSocial('youtube', 'https://www.youtube.com/channel/UC8gQzza01Now-c-kMVI9HAw')
  ], lewhghImage, 'uk', ['Support', 'AWP']),
  new Player('obwi', 'Yaqub Warsame', [
    new PlayerSocial('twitter', 'https://twitter.com/ObwiK'),
    new PlayerSocial('twitch', 'https://twitch.tv/obwi')
  ], defaultImage, 'de', ['Entry Fragger', 'Rifler', 'AWP']),
  new Player('molotov', 'Nick Flora', [
    new PlayerSocial('twitter', 'https://twitter.com/molotovXcrypt'),
    new PlayerSocial('twitch', 'https://twitch.tv/molotovxcrypt')
  ], defaultImage, 'us', ['Support', 'Lurker']),
  new Player('YiKES', 'Arnie Petty', [
    new PlayerSocial('twitter', 'https://twitter.com/thatsayikes_')
  ], defaultImage, 'uk', ['Support', 'Rifler', 'AWP'])
]
