/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'extralist',

    requires: [
        'MyApp.store.Personnel'
    ],

    title: 'Users',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name', dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        //select: 'onItemSelected'
    }
    ,

    id: 'testGrid',
    selModel: {
        injectCheckbox: 'first',
        checkOnly: 'true',
        model: 'SIMPLE',
        type: 'checkboxmodel'

    },
    buttons: [
        {
            text: 'Select All',
            handler: function () {
                Ext.getCmp('testGrid').getSelectionModel().selectAll()
            }
        },
        {
            text: 'Remove All',
            handler: function () {
                Ext.getCmp('testGrid').getSelectionModel().deselectAll()
            }
        }
        ,
        {
            text: 'Get',
            handler: function () {
               var user =  Ext.getCmp('testGrid').getSelectionModel().getSelection()
               console.log(user);
            }
        }

    ]
});
