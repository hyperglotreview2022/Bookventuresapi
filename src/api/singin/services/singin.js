'use strict';

/**
 * singin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::singin.singin');
