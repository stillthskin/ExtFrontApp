/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MyApp.Application',

    name: 'MyApp',

    requires: [
        // This will automatically load all classes in the MyApp namespace
        // so that application classes do not need to require each other.
        'MyApp.*'
    ],
    views: [
        'Login'
        ],
        controllers: [
        'Login'
        ],
    init: function() {
        splashscreen = Ext.getBody().mask('Loading application',
        'splashscreen');
        splashscreen.addCls('splashscreen');
        /**will search for the first DIV tag that contains the .x-mask-msg
class (Ext.query('.x-mask-msg')[0]) and will add a new DIV tag as child with the
class x-splash-icon that will be responsible for adding the logo image above the
loading message. */
        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
            });

            var task = new Ext.util.DelayedTask(function() { 
                Ext.getBody().unmask();
                });
                task.delay(3000);

                splashscreen.fadeOut({
                    duration: 2500,
                    remove:true,
                    listeners: {
                        afteranimate: function(el, startTime, eOpts ){
                        Ext.widget('login'); 
                        }
                        }
                    });
        },
/*
    launch: function(){
        viewport= Ext.getCmp('viewport');
        target = viewport.down('#viewTarget');
        console.log(target);
        view = Ext.create('MyApp.view.main.Main');
        target.add(view);



    },*/

    // The name of the initial view to create.
   // mainView: 'MyApp.view.main.Main',
   // autoCreateViewport:true
});
