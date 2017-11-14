<?php
/**
 * Plugin Name: TinyMCE Button
 * Plugin URI: http://neptik.com
 * Version: 1.0
 * Author: Joe Falconer/Michael Gunner
 * Description: Add a button to the tinyMCE
 */

class TinyMCE_Button_App {

    /**
    * Constructor. Called when the plugin is initialised.
    */
    function __construct() {

 		if ( is_admin() ) {
		    add_action( 'init', array( &$this, 'setup_tinymce_plugin' ) );
		    add_action( 'admin_enqueue_scripts', array( &$this, 'admin_scripts_css' ) );
		}

    }

    function setup_tinymce_plugin() {
    	
    	if(! current_user_can('edit_posts') && ! current_user_can("edit_pages")){
    		return;
    	}

    	if(get_user_option('rich_editing') !== true ){
    		add_filter('mce_external_plugins', array(&$this, 'add_tinymce_plugin'));
    		add_filter('mce_buttons', array(&$this, 'add_tinymce_toolbar_button'));
    	}
    }

	function add_tinymce_plugin( $plugin_array ) {
	 
	    $plugin_array['falconer_mc_shortcode'] = plugin_dir_url( __FILE__ ) . 'tinymce-button.js';
	    return $plugin_array;
	 
	}

	function add_tinymce_toolbar_button( $buttons ) {
	 
	    array_push( $buttons, 'falconer_mc_shortcode' );
	    return $buttons;
	 
	}

	function admin_scripts_css() {
		wp_enqueue_style( 'tinymce-citation', plugins_url( 'icon.css', __FILE__ ) );
	}

 
}

$TinyMCE_Button_App = new TinyMCE_Button_App;
