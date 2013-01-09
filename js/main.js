
requirejs.config({
  paths: {
    jquery: [
      '//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min'
    ],
    backbone: 'vendor/backbone-0.9.9',
    underscore: 'https://raw.github.com/SlexAxton/require-handlebars-plugin/v0.4.0/hbs/underscore',
    i18nprecompile: 'https://raw.github.com/SlexAxton/require-handlebars-plugin/v0.4.0/hbs/i18nprecompile',
    json2: 'https://raw.github.com/SlexAxton/require-handlebars-plugin/v0.4.0/hbs/json2',
    cs: 'https://raw.github.com/jrburke/require-cs/0.4.3/cs',
    'coffee-script': 'https://raw.github.com/jrburke/require-cs/0.4.3/coffee-script',
    handlebars: 'https://raw.github.com/SlexAxton/require-handlebars-plugin/v0.4.0/Handlebars',
    hbs: 'https://raw.github.com/SlexAxton/require-handlebars-plugin/v0.4.0/hbs'
  },
  hbs: {
    disableI18n: true
  }
});
require(['jquery', 'underscore', 'backbone', 'cs!app']);
define(['hbs!templates/test'], function(template) {
    console.log(template({}));
});