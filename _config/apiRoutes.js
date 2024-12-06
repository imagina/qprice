const moduleName = 'iprice';
const moduleVersion = 'v1';
const urlBase = `/${moduleName}/${moduleVersion}`


export default {
  urlBase: urlBase,
  version: moduleVersion, 
  zones: `${urlBase}/zones`,
  tariffs: `${urlBase}/tariffs`,
  
}
