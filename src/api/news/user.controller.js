/**
 * GET     /api/news              ->  index
 * POST    /api/news              ->  create
 * GET     /api/news/:id          ->  show
 * PUT     /api/news/:id          ->  update
 * DELETE  /api/news/:id          ->  destroy
 */

'use strict';

import * as newsDAO from './news.model';

function handleError() {

}

/**
 * Get a list of all news
 * restriction: 'none'
 */
export function index(req, res) {
	return newsDAO.getAllNews((data) => {
		return res.status(200).json(data);
	});
}

/**
 * Creates a new news
 * restriction: 'none'
 */
export function create(req, res, next) {
	var newsObj = req.body.newsObj;
	return newsDAO.createArticle((newsObj) => {
		return res.status(200).json(data);
	});
}

/**
 * Displays a single news
 * restriction: 'none'
 */
export function show(req, res, next) {
	var id = req.body.id;
	return newsDAO.getArticle((id) => {
		return res.status(200).json(data);
	});
}

/**
 * Updates an existing news
 * restriction: 'none'
 */
export function update(req, res, next) {
	var newsObj = req.body.newsObj;
	return newsDAO.updateArticle((newsObj) => {
		return res.status(200).json(data);
	});
}

/**
 * Deletes a single news
 * restriction: 'none'
 */
export function destroy(req, res) {
	var id = req.body.id;
	return newsDAO.destroyArticle((id) => {
		return res.status(200).json(data);
	});
}
