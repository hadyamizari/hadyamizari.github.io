// theme.ts

export const theme = {
  colors: {
    primary: '#135BA4', // Replaces all purple shades
    secondary: '#FFDE59', // You can adjust this as per your design
    tertiary: '#0C0513', // Background for preloader, navbar, etc.
    accent: '#FABC3C', // Accent color for highlights
    background: {
      section:
        'linear-gradient(to bottom left, rgba(17, 16, 16, 0.582), rgba(12, 8, 24, 0.904))',
      image:
        'linear-gradient(to bottom left, rgba(17, 16, 16, 0.678), rgba(12, 10, 22, 0.863))',
    },
    text: {
      important: '#135BA4', // Previously #c770f0
      normal: '#FFF',
      muted: '#A588C0', // For blockquote or less important text
    },
    scrollbar: {
      track: '#2D1950',
      thumb: 'rgba(19, 91, 164, 0.959)', // Replacing rgba purple shades
      thumbHover: 'rgba(19, 91, 164, 0.911)', // Hover effect
    },
    navbar: {
      background: '#1B1A2E',
      boxShadow: 'rgba(9, 5, 29, 0.171)',
      brand: '#FAFAFA',
      link: '#FFF',
      hover: '#135BA4',
    },
    projectCard: {
      background: 'transparent',
      boxShadow: 'rgba(19, 91, 164, 0.459)', // Replaced purple shadow
      hoverBoxShadow: 'rgba(19, 91, 164, 0.561)', // Hover effect
    },
    buttons: {
      primary: {
        background: '#135BA4',
        borderColor: '#135BA4',
        hoverBackground: '#104885',
        hoverBorderColor: '#104885',
      },
      focus: 'none', // Remove focus box-shadow
    },
    footer: {
      background: '#0A0416',
      text: '#FFF',
    },
  },
  borders: {
    radius: '12px',
  },
  transitions: {
    normal: '0.3s ease-out',
    fast: '0.2s ease-out',
  },
  fonts: {
    main: '1.2em',
    heading: '2.4em',
    large: '2.5em',
  },
}
