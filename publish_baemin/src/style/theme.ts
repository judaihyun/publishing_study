

const size = {
    mobile: '600px',
    tablet: '900px',
    laptop: '1200px',
    desktop: '1800px',
    wide: '1800px',
}
  
const device = {
    mobile: `only screen and (max-width: ${size.mobile})`,
    tablet: `only screen and (min-width: ${size.tablet})`,
    laptop: `only screen and (min-width: ${size.laptop})`,
    desktop: `only screen and (min-width: ${size.desktop})`,
    wide: `only screen and (min-width: ${size.wide})`,
}

const theme = {
    device
}
  
export default theme