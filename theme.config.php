<?php
return [
    'extends' => 'bootstrap3',
    'helpers' => [
      'factories' => [
        'AkSearch\View\Helper\AkSearch\Datepicker' => 'AkSearch\View\Helper\AkSearch\DatepickerFactory',
        'AkSearch\View\Helper\Root\SearchBox' => 'AkSearch\View\Helper\Root\SearchBoxFactory',
        'AkSearch\View\Helper\Root\Auth' => 'VuFind\View\Helper\Root\AuthFactory'

      ],
      'aliases' => [
        'auth' => 'AkSearch\View\Helper\Root\Auth',
        'datepicker' => 'AkSearch\View\Helper\AkSearch\Datepicker',
        'searchbox' => 'AkSearch\View\Helper\Root\SearchBox'
      ]
    ],
    'js' => [
        'lightbox.js'
    ],
    'less' => [
        'active' => true,
        'compiled.less'
    ]

];
