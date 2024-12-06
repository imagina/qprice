<template></template>
<script>

export default {
  data() {
    return {
      crudId: this.$uid()
    }
  },
  computed: {
    crudData() {
      return {
        crudId: this.crudId,
        apiRoute: 'apiRoutes.qprice.zones',
        permission: 'iprice.zones',
        create: {
          title: this.$tr('itask.cms.newTask'),
        },
        read: {
          columns: [
						{name: 'id', label: this.$tr('isite.cms.form.id'), field: 'id', style: 'width: 50px'},
            {name: 'title', label: this.$tr('isite.cms.form.title'), field: 'title', align: 'center'},
            {name: 'description', label: this.$tr('isite.cms.form.description'), field: 'description', align: 'center', style: 'width: 200px'},            
						{name: 'default', label: this.$tr('isite.cms.form.default'), field: 'default', align: 'rigth'},
						{name: 'systemName', label: this.$tr('isite.cms.form.systemName'), field: 'systemName', align: 'rigth'},
            {name: 'status', label: this.$tr('isite.cms.form.status'), field: 'status' },
            {
              name: 'created_at', label: this.$tr('isite.cms.form.createdAt'), field: 'createdAt', align: 'left',
              format: val => val ? this.$trd(val) : '-',
            },
            {
              name: 'updated_at', label: this.$tr('isite.cms.form.updatedAt'), field: 'updatedAt', align: 'left',
              format: val => val ? this.$trd(val) : '-',
            },
            {
              name: 'deleted_at', label: this.$tr('itask.cms.form.deletedAt'), field: 'deletedAt', align: 'left',
              format: val => val ? this.$trd(val) : '-',
            },
            {name: 'actions', label: this.$tr('isite.cms.form.actions'), align: 'left'},
          ],
          requestParams: {
            include: 'category,status,priority,timelogs.creator,assignedTo',
          },          
          filters: {
						status: {
							type: 'select',
							isTranslatable: false,
							props: {
								label: this.$tr('isite.cms.form.status'),
								options: [
									{label: this.$tr('isite.cms.label.enabled'), value: '1'},
									{label: this.$tr('isite.cms.label.disabled'), value: '0'}
								],
							}
						}
					}
        },
        update: {
          title: this.$tr('itask.cms.updateTask'),
        },
        delete: true,
        formLeft: {
          id: {value: ''},
          userId: {value: this.$store.state.quserAuth.userId},
          title: {
            value: '',
            type: 'input',
						isTranslatable: true,
            props: {
              label: `${this.$tr('isite.cms.form.title')}*`,
              rules: [
                val => !!val || this.$tr('isite.cms.message.fieldRequired')
              ],
            },
          },
          description: {
            name : "description",
            value: '',
            type: 'html',
						isTranslatable: true,
            props: {
              label: `${this.$tr('isite.cms.form.description')}*`,
              rules: [
                val => !!val || this.$tr('isite.cms.message.fieldRequired')
              ],
            }
          }					
        },
        formRight: {
					systemName: {
            value: '',            
            type: 'input',
            props: {
              label: this.$tr('isite.cms.form.systemName'),
            }
          },
					status: {
            value: '1',
            type: 'select',
            props: {
              label: `${this.$tr('isite.cms.form.status')}*`,
              options: [
                {label: this.$tr('isite.cms.label.enabled'), value: '1'},
                {label: this.$tr('isite.cms.label.disabled'), value: '0'}
              ],
            }
          },
					default: {
						value: '',
						type: 'input',
						props: {
							label: `${this.$tr('isite.cms.form.default')}*`,
							rules: [
								val => !!val || this.$tr('isite.cms.message.fieldRequired')
							],
						},
					},
				}, 
				
      }
    },
    //Crud info
    crudInfo() {
      return this.$store.state.qcrudComponent.component[this.crudId] || {}
    }
  },
}
</script>
