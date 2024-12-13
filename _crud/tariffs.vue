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
				apiRoute: 'apiRoutes.qprice.tariffs',
				permission: 'iprice.tariffs',
				create: {
					title: this.$tr('iprice.cms.newTariff'),
				},
				read: {
					columns: [
						{ name: 'id', label: this.$tr('isite.cms.form.id'), field: 'id', style: 'width: 50px' },
						{ name: 'title', label: this.$tr('isite.cms.form.title'), field: 'title', align: 'center' },
						{ name: 'value', label: this.$tr('isite.cms.form.value'), field: 'value', align: 'rigth' },
						{ name: 'type', label: this.$tr('isite.cms.form.type'), field: 'type', align: 'rigth', 
						 format: val => val && val?.title && val?.icon ? `<span class="${val.icon}"></span> ${val.title}`: '-'
						},
						{ name: 'operation', label: this.$tr('isite.cms.form.operation'), field: 'operation', align: 'rigth', 
						 	format: val => val && val?.title && val?.icon ? `<span class="${val.icon}"></span> ${val.title}`: '-'
						},
						{ name: 'status', label: this.$tr('isite.cms.form.status'), field: 'status' },
						{ name: 'priority', label: this.$tr('isite.cms.form.priority'), field: 'priority' },
						{ name: 'systemName', label: this.$tr('isite.cms.form.systemName'), field: 'systemName', align: 'rigth' },
						
						
						{ name: 'deparments', label: this.$tr('isite.cms.label.department'), field: 'departmens', align: 'rigth',							
						},
						{
              name: 'startDate', label: this.$tr('isite.cms.form.startDate'), field: 'startDate', align: 'left',
              format: val => val ? this.$trd(val, {type: 'shortHuman'}) : '-',
            },
						{
              name: 'endDate', label: this.$tr('isite.cms.form.endDate'), field: 'endDate', align: 'left',
              format: val => val ? this.$trd(val, {type: 'shortHuman'}) : '-',
            },
												
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
						{ name: 'actions', label: this.$tr('isite.cms.form.actions'), align: 'left' },
					],
					/*
					requestParams: {
						include: '',
					},
					*/
					filters: {
						status: {
							type: 'select',
							isTranslatable: false,
							props: {
								label: this.$tr('isite.cms.form.status'),
								options: [
									{ label: this.$tr('isite.cms.label.enabled'), value: '1' },
									{ label: this.$tr('isite.cms.label.disabled'), value: '0' }
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
					id: { value: '' },
					userId: { value: this.$store.state.quserAuth.userId },
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
								{ label: this.$tr('isite.cms.label.enabled'), value: '1' },
								{ label: this.$tr('isite.cms.label.disabled'), value: '0' }
							],
						}
					},
					departments: {
						value: null,
						tree: false,
						type: 'select',
						loadOptions: {
							apiRoute: 'apiRoutes.quser.departments', 
						},
						props: {
							label: `${this.$tr('isite.cms.label.department')}:`,
							clearable: true,
							multiple: true,
						}
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
