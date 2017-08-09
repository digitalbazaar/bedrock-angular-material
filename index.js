/*!
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
import angular from 'angular';

const module = angular.module('bedrock.material', []);

/* @ngInject */
module.run(brConfigService => {
  brConfigService.theme = {
    name: 'material'
  };
});
