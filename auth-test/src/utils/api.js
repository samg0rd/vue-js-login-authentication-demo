// in this file we fake the api call
const mocks = {
    'auth': { 'POST': { token: 'This-is-a-mocked-token' } },
    'user/me': { 'GET': { name: 'amirsaman', title: '1234' } }
}
  
const apiCall = ({url, method, ...args}) => new Promise((resolve, reject) => {
    console.log('inside api call, see the arguments :', args);
    
    setTimeout(() => {
        try {
            resolve(mocks[url][method || 'GET'])
            console.log(`Mocked '${url}' - ${method || 'GET'}`)
            console.log('response: ', mocks[url][method || 'GET'])
        } 
        catch (err) {
            console.log(err);       
            reject(new Error(err))
        }
    }, 1000)
})
  
export default apiCall;