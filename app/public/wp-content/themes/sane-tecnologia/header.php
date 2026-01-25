<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="Agência SaneADS - Especialistas em criação de Landing Pages de alta conversão e gestão profissional de Google Ads. Resultados mensuráveis que colocam seu negócio no mapa digital.">
    <meta name="keywords"
        content="landing page, google ads, tráfego pago, conversão, marketing digital, leads qualificados">
    <meta name="author" content="Agência SaneADS">
    <meta name="robots" content="index, follow">

    <!-- Open Graph -->
    <meta property="og:title" content="Agência SaneADS - Landing Pages e Google Ads que Geram Resultados">
    <meta property="og:description"
        content="Especialistas em criar a landing page perfeita e impulsioná-la com Google Ads estratégico.">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="pt_BR">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <!-- Header -->
    <header class="header" id="header">
        <div class="container header-content">
            <a href="#inicio" class="logo">
                <div class="logo-symbol">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                </div>
                <div class="logo-type">
                    <small>Agência</small>
                    <span>Sane<strong class="logo-accent">ADS</strong></span>
                </div>
            </a>

            <nav class="nav" id="nav">
                <ul class="nav-list">
                    <li><a href="#inicio" class="nav-link">Início</a></li>
                    <li><a href="#servicos" class="nav-link">Serviços</a></li>
                    <li><a href="#vantagens" class="nav-link">Vantagens</a></li>
                    <li><a href="#resultados" class="nav-link">Resultados</a></li>
                    <li><a href="#contato" class="nav-link">Contato</a></li>
                </ul>
            </nav>

            <a href="#contato" class="btn btn-primary header-cta">Solicite um Orçamento</a>

            <button class="hamburger" id="hamburger" aria-label="Menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </header>