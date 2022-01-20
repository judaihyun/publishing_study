

const size = {
    mobile: '600px',
    tablet: '900px',
    laptop: '1200px',
    desktop: '1800px',
}
  
const device = {
    mobile: `screen and (min-width: ${size.mobile})`,
    tablet: `screen and (min-width: ${size.tablet})`,
    laptop: `screen and (min-width: ${size.laptop})`,
    desktop: `screen and (min-width: ${size.desktop})`,
}

const theme = {
    device
}
  
export default theme