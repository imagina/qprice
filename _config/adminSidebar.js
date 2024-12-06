import pages from 'src/setup/pages'

export default [
    {
      title: 'iprice.cms.sidebar.adminGroup',
      icon: 'fa-light fa-circle-dollar',
      children: [
        pages.qprice.zones, 
        pages.qprice.tariffs
      ]
    },
  ]
