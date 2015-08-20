angular.module('h-factors', [])
.controller('Factors', function Factors ($scope) {

  $scope.formats = [
    {
      name: 'X/HTML',
      spec: 'http://www.w3.org/TR/html5/',
      mime: ['text/html', 'application/xhtml+xml'],
      CL: true,
      CR: false,
      CU: true,
      CM: true,
      LE: true,
      LO: true,
      LT: true,
      LN: true,
      LI: false
    },

    {
      name: 'Atom',
      spec: 'https://tools.ietf.org/html/rfc4287',
      mime: ['application/atom+xml', 'application/atomcat+xml', 'application/atomsvc+xml'],
      CL: true,
      CR: true,
      CU: false,
      CM: false,
      LE: true,
      LO: true,
      LT: false,
      LN: true,
      LI: true
    },

    {
      name: 'Collection+JSON',
      spec: 'http://amundsen.com/media-types/collection/',
      mime: ['application/vnd.collection+json'],
      CL: true,
      CR: false,
      CU: false,
      CM: false,
      LE: true,
      LO: true,
      LT: true,
      LN: true,
      LI: true
    },

    {
      name: 'UBER',
      spec: 'http://g.mamund.com/uber',
      mime: ['application/vnd.amundsen-uber+json', 'application/vnd.amundsen-uber+xml'],
      draft: true,
      CL: true,
      CR: true,
      CU: true,
      CM: true,
      LE: true,
      LO: true,
      LT: true,
      LN: true,
      LI: true
    },

    {
      name: 'HAL',
      spec:'http://stateless.co/hal_specification.html',
      mime: ['application/hal+json', 'application/hal+xml'],
      CL: true,
      CR: false,
      CU: false,
      CM: false,
      LE: false,
      LO: true,
      LT: true,
      LN: false,
      LI: false
    },

    {
      name: 'Siren',
      spec: 'https://github.com/kevinswiber/siren',
      mime: ['application/vnd.siren+json'],
      draft: true,
      incomplete: true
    },

    {
      name: 'JSON-API',
      spec: 'http://jsonapi.org/',
      mime: ['application/vnd.api+json'],
      incomplete: true
    },

    {
      name: 'JSON-LD',
      spec: 'http://json-ld.org/',
      mime: ['application/ld+json'],
      incomplete: true
    },

    {
      name: 'Hydra',
      spec: 'http://www.markus-lanthaler.com/hydra/',
      incomplete: true
    },

    {
      name: 'Mason',
      spec: 'https://github.com/JornWildt/Mason',
      mime: ['application/vnd.mason+json'],
      incomplete: true
    },

    {
      name: 'OData',
      spec: 'http://www.odata.org/',
      incomplete: true
    }
  ];
});
