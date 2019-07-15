<?php
return [
    'extends' => 'bootstrap3',
    'less' => [
        'active' => true,
        'compiled.less'
    ],
    'helpers' => [
      'factories' => [
        'AkSearch\View\Helper\Root\SearchBox' => 'AkSearch\View\Helper\Root\SearchBoxFactory',
        'AkSearch\View\Helper\AkSearch\Datepicker' => 'AkSearch\View\Helper\AkSearch\DatepickerFactory',
      ],
      'aliases' => [
        'searchbox' => 'AkSearch\View\Helper\Root\SearchBox',
        'datepicker' => 'AkSearch\View\Helper\AkSearch\Datepicker',
      ]
    ]
];
