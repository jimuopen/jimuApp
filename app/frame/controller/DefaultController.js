import PagesManager from '../manager/PagesManager'

export default function DefaultController(host, params) {
  console.log('-- DefaultLogic handle -----' + JSON.stringify(params))
  switch (params.method) {
    case 'host_init':
      host._refresh(Object.assign(params, {'loadingType' : 0}))
      break
    case 'host_refresh'://页面重新展示
      PagesManager.getPage(host.page, params).then((response) => {
        host.data = response.data
        host.setState({})
      })
      break
  }
}
