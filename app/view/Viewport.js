Ext.define('MyApp.view.Viewport', {
    extend: 'Ext.container.Viewport',
    id:'viewport',
    items: [
        {
            region: 'north',
            html: '<h1>The Home page</h1>'
        },
        {
            region: 'Center',
            xtype:'tabpanel',
            activeTab:0,
            itemId:'viewTarget'
        }
        ,
        {
            region: 'south',
            html: '<h1>The footer section</h1>'
        }

    ]
});