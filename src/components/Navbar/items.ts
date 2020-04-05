export class NavItem {
  public name: string
  public link: string

  constructor (name: string, link: string) {
    this.name = name
    this.link = link
  }
}

export default [
  new NavItem('TEAM', '#team'),
  new NavItem('RESULTS', '#results')
]
