
export default {
  zones: {
    //permission: 'iprices.zones.manage',
    activated: true,
    authenticated: true,
    path: '/price/zones/index',
    name: 'qprice.admin.zones',
    crud: import('modules/qprice/_crud/zones'),
    page: () => import('modules/qcrud/_pages/admin/crudPage'),
    layout: () => import('layouts/master.vue'),
    title: 'iprice.cms.sidebar.adminZones',
    icon: 'fa-light fa-boxes-stacked',
    subHeader: {
        refresh: true,
    }
  },

  
} 


