Ext.define('MyApp.controller.Login', {
    extend: 'Ext.app.Controller',
    views: [
        'Login'
    ],
    init: function (application) {
        console.log("Up");
        this.control({
            /**'
             * Ext.ComponentQuery.query('login form button#cancel');
             * Ext.ComponentQuery selector': {
    eventWeWantToListenTo: functionOrMethodWeWantToExecute
} */
            "login form button#submit": {
                click: this.onSubmitClick
            },
            "login form button#cancel": {
                click: this.onCancelClick

            }
        });

    },

    onSubmitClick: function (button) {
        var formPanel = button.up('form');
        login = button.up('login');
        user = formPanel.down('textfield[name=user]').getValue();
        console.log(user);
        pass = formPanel.down('textfield[name=password]').getValue();
        console.log("Username: " + user + " Password: " + pass);
        Ext.get(login.getEl()).mask("Authenticating... Please wait...",
            'loading');

        if (user == "Denn" && pass == "pass") {
            //Ext.get(login.getEl()).unmask();
            //login.close(); 
            Ext.create('Packt.view.MyViewport'); 
        }
        else {
            Ext.get(login.getEl()).unmask();
            Ext.Msg.show({
                title: 'Fail!',
                msg: "Username or password incorrect",
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        }

        /*
        if (formPanel.getForm().isValid()) {
            Ext.Ajax.request({
                url: 'Home.php',
                params: {
                    user: user,
                    password: pass
                }
            });
        }*/
    },
    onCancelClick: function (button) {
        button.up('form').getForm().reset();

        console.log("Done");

    }
});