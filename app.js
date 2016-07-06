var app = angular.module("app", ["xeditable","ui"]);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});
