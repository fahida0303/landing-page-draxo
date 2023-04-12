const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '460px',
  mobileI: '600px',
  tablet: '768px',
  laptop: '1024px'
};

export const devices = {
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  mobileI: `(max-width: ${sizes.mobileI})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`
}