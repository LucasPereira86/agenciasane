<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'wC}WaLrHauaU7jqgx#0f+l[r@$BOSNYfEw$.M!b,]y^,<j]$X!J;fmU<F/?Ty|(6' );
define( 'SECURE_AUTH_KEY',   'g.c-tA-d){SrSPY~&x{AJ5ruZI6$%hGUuvRvkrO@4;Tr#!Vw`CZ*XUsTai`617)f' );
define( 'LOGGED_IN_KEY',     'ZLJu]T/*.OhkgM=-dN]G1-.|lcqI1vACBed~6(Zb,n6/iC KdiClQz!y^z`~B^]`' );
define( 'NONCE_KEY',         'p;+8,ISIQk8~yWQix`#aWK5)8t?zUoFT9*8PCYe _%Mcf}VeiVg@Gu>ixHbZ`UA2' );
define( 'AUTH_SALT',         '[K62RyNwz=~nO>B[b8=Jlb0BmBr$W7Sw[E$+f)A8+`]3}*|d43q1Qu@^<AQ&bim}' );
define( 'SECURE_AUTH_SALT',  'X!U{hxsFMB8O6PQYb?4n6+>0Sue*iUP!R/WqEKHGE<+E[E~_Da]pY1Y;jw{jZMYU' );
define( 'LOGGED_IN_SALT',    '`}X{W%x QK@{p8kG)!kVO=^C1(B<%L.b*DQ9`+sH|fr%f,(fs N# 1,GcuBqtjV.' );
define( 'NONCE_SALT',        '&iQ;FwZ*l=xXxjK$&+Oh^|AUPjm398!;3fP%3jFb>ueNl~.q FDuG.7:JJxU3.eQ' );
define( 'WP_CACHE_KEY_SALT', ']veX`:QcY/R=am-IiA(-,Mu`b*>pm+%6@;BM[lpi7Lc{gu`I>M|:E$uVRp(w71*7' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
