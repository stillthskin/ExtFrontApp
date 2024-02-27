
Ext.define('MyApp.view.Login', {
    extend: 'Ext.window.Window',
    alias: 'widget.login',
    autoShow: true,
    height: 270,
    width: 460,
    layout: {
        type: 'fit'
    },
    iconCls: 'key',
    title: "Login",
    closeAction: 'show',
    closable: false,
    items: [
        {
            xtype: 'form',
            frame: false,
            bodyPadding: 15,
            defaults: {
                xtype: 'textfield',
                anchor: '100%',
                labelWidth: 60

            },
            items: [
                {
                    name: 'user',
                    fieldLabel: "User",
                    allowBlank: false,
                    vtype: 'alphanum',
                    minLength: 3,
                    msgTarget: 'under',
                    maxLength: 25
                },
                {
                    inputType: 'password',
                    name: 'password',
                    fieldLabel: "Password",
                    allowBlank: false,
                    vtype: 'alphanum',
                    minLength: 3,
                    msgTarget: 'under',
                    maxLength: 25
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button', 
                            itemId: 'cancel',
                            iconCls: 'cancel',
                            text: 'Cancel'
                        },
                        {
                            xtype: 'button', 
                            itemId: 'submit',
                            formBind: true,//Grey button on empty fields.
                            iconCls: 'key-go',
                            text: "Submit"
                        }
                    ]
                }
            ]
        }
    ]
});/*
Ext.define('MyApp.view.Login',{
        extends:'Ext.window.Window',
    title: 'Hello',
    height: 200,
    width: 400,
    layout: 'fit',
    items: {  // Let's put an empty grid in just to illustrate fit layout
        xtype: 'grid',
        border: false,
        columns: [{header: 'World'}],                 // One header just for show. There's no data,
        store: Ext.create('Ext.data.ArrayStore', {}) // A dummy empty data store
    }
});*/