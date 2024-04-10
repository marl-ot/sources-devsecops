<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitecdc56e881cb5aa127411830a330c1c8
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        require __DIR__ . '/platform_check.php';

        spl_autoload_register(array('ComposerAutoloaderInitecdc56e881cb5aa127411830a330c1c8', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitecdc56e881cb5aa127411830a330c1c8', 'loadClassLoader'));

        $includePaths = require __DIR__ . '/include_paths.php';
        $includePaths[] = get_include_path();
        set_include_path(implode(PATH_SEPARATOR, $includePaths));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitecdc56e881cb5aa127411830a330c1c8::getInitializer($loader));

        $loader->register(true);

        $includeFiles = \Composer\Autoload\ComposerStaticInitecdc56e881cb5aa127411830a330c1c8::$files;
        foreach ($includeFiles as $fileIdentifier => $file) {
            composerRequireecdc56e881cb5aa127411830a330c1c8($fileIdentifier, $file);
        }

        return $loader;
    }
}

/**
 * @param string $fileIdentifier
 * @param string $file
 * @return void
 */
function composerRequireecdc56e881cb5aa127411830a330c1c8($fileIdentifier, $file)
{
    if (empty($GLOBALS['__composer_autoload_files'][$fileIdentifier])) {
        $GLOBALS['__composer_autoload_files'][$fileIdentifier] = true;

        require $file;
    }
}
