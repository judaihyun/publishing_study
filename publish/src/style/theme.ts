

const size = {
    mobile: '600px',
    tablet: '900px',
    laptop: '1200px',
    desktop: '1800px',
    wide: '1800px',
}
  
const device = {
    mobile: `screen and (max-width: ${size.mobile})`,
    tablet: `screen and (max-width: ${size.tablet})`,
    laptop: `screen and (max-width: ${size.laptop})`,
    desktop: `screen and (max-width: ${size.desktop})`,
    wide: `screen and (min-width: ${size.wide})`,
}

const theme = {
    device
}
  
export default theme