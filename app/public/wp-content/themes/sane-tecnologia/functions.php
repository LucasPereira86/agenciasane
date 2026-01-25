<?php
/**
 * Theme Name: Agência SaneADS
 * Description: Tema da Agência SaneADS - Landing Pages e Google Ads
 * Version: 1.0
 * Author: Agência SaneADS
 * Text Domain: sane-tecnologia
 */

// Registrar estilos e scripts
function sane_enqueue_assets()
{
    // Google Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap', array(), null);

    // Estilos do tema
    wp_enqueue_style('sane-style', get_stylesheet_uri(), array('google-fonts'), '1.0');

    // Scripts do tema
    wp_enqueue_script('sane-script', get_template_directory_uri() . '/js/script.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'sane_enqueue_assets');

// Suporte a recursos do tema
function sane_theme_setup()
{
    // Suporte a título dinâmico
    add_theme_support('title-tag');

    // Suporte a imagem destacada
    add_theme_support('post-thumbnails');

    // Registrar menu de navegação
    register_nav_menus(array(
        'primary' => __('Menu Principal', 'sane-tecnologia'),
    ));
}
add_action('after_setup_theme', 'sane_theme_setup');

// Remover barra de admin na frente do site
add_filter('show_admin_bar', '__return_false');
