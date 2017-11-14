(function() {
    tinymce.PluginManager.add( 'falconer_mc_shortcode', function( editor, url ) {
        // Add Button to Visual Editor Toolbar
        editor.addButton('falconer_mc_shortcode', {
            title: 'Button Link',
            text: ' Add Button Link',
            onclick: function() {
                editor.windowManager.open({
                    title: "Insert Button",
                    body: [{
                        type: 'textbox',
                        name: 'buttonUrl',
                        label: 'URL',
                        value: 'Page URL'
                    },
                    {
                        type: 'textbox',
                        name: 'className',
                        label: 'Class Name',
                        value: 'button'
                    },
                    {
                        type: 'textbox',
                        name: 'text',
                        label: 'Text',
                        value: 'Read More'
                    }],
                    onsubmit: function(e) {
                        var data = e.data;
                        editor.insertContent('<a href="' + data.buttonUrl + '" class="' + data.className + '">' + data.text + '</a>');
                    }
                });
            }
        })
    });
})();
