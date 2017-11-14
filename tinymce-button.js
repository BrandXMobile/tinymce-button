(function() {
    tinymce.PluginManager.add( 'falconer_mc_shortcode', function( editor, url ) {
        // Add Button to Visual Editor Toolbar
        editor.addButton('falconer_mc_shortcode', {
            title: 'Button Link',
            text: ' Add Button Link',
            onclick: function() {
                editor.windowManager.open({
                    title: "Insert Tabs",
                    body: [{
                        type: 'textbox',
                        name: 'buttonUrl',
                        label: 'URL',
                        value: 'home-url.dev'
                    },
                    {
                        type: 'textbox',
                        name: 'className',
                        label: 'Class Name',
                        value: ''
                    },
                    {
                        type: 'textbox',
                        name: 'text',
                        label: 'Text',
                        value: ''
                    }],
                    onsubmit: function(e) {
                        var data = e.data;
                        console.log(data);
                        editor.insertContent('<a href="' + data.buttonUrl + '" class="' + data.className + '">' + data.text + '</a>');
                    }
                });
            }
        })
    });
})();