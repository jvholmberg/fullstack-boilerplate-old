'use strict';

import assert from 'assert';

export function getAllNews(next) {
  next({
    fn: 'getAllNews'
  });
}

export function getNews(id, next) {
  next({
    fn: 'getNews'
  });
}

export function createNews(obj, next) {
  next({
    fn: 'createNews'
  });
}

export function updateNews(obj, next) {
  next({
    fn: 'updateNews'
  });
}

export function destroyNews(id, next) {
  next({
    fn: 'destroyNews'
  });
}
