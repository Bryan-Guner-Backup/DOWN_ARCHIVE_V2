import enterpriseServerReleases from './enterprise-server-releases.js'

const productNames = {
  dotcom: 'GitHub.com',
}

enterpriseServerReleases.all.forEach((version) => {
  productNames[version] = `Enterprise Server ${version}`
})

export default productNames
