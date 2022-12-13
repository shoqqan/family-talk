export const localDomain = 'http://localhost:3000/#/'
export const prodDomain = 'http://family-talk.kz/#/'

export const getDomain = () => {
   return  process.env.NODE_ENV  === 'production' ? prodDomain : localDomain
}