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
      ],
      'aliases' => [
        'searchbox' => 'AkSearch\View\Helper\Root\SearchBox',
      ]
    ]
];
