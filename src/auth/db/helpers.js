/* eslint-disable no-underscore-dangle */
const request = require('request');

async function getFavoritesId(user) {
  const options = {
    method: 'GET',
    url: `https://tvshows-c17b.restdb.io/rest/favorites?q={"user": "${user}"}`,
    headers: {
      'cache-control': 'no-cache',
      'x-apikey': '5ce2b7b6780a473c8df5c9e9',
      'content-type': 'application/json',
    },
    json: true,
  };

  return new Promise((resolve) => {
    request(options, (error, response) => {
      if (error) {
        resolve(null);
        throw new Error(error);
      }

      if (response.body && response.body.length > 0) {
        resolve(response.body[0]._id);
      } else {
        resolve(null);
      }
    });
  });
}

async function saveFavorites(user, favorites) {
  const favoritesId = await getFavoritesId(user);
  const options = {
    method: favoritesId ? 'PUT' : 'POST',
    url: `https://tvshows-c17b.restdb.io/rest/favorites${favoritesId ? `/${favoritesId}` : ''}`,
    headers: {
      'cache-control': 'no-cache',
      'x-apikey': '5ce2b7b6780a473c8df5c9e9',
      'content-type': 'application/json',
    },
    body: { user, tvshows: favorites.join(',') },
    json: true,
  };

  return new Promise((resolve, reject) => {
    request(options, (error) => {
      if (error) {
        reject();
        throw new Error(error);
      }
      resolve();
    });
  });
}

async function getFavorites(user) {
  const options = {
    method: 'GET',
    url: `https://tvshows-c17b.restdb.io/rest/favorites?q={"user": "${user}"}`,
    headers: {
      'cache-control': 'no-cache',
      'x-apikey': '5ce2b7b6780a473c8df5c9e9',
      'content-type': 'application/json',
    },
    json: true,
  };

  return new Promise((resolve) => {
    request(options, (error, response) => {
      if (error) {
        resolve([]);
        throw new Error(error);
      }

      if (response.body && response.body.length > 0 && response.body[0].tvshows) {
        resolve(response.body[0].tvshows.split(','));
      } else {
        resolve([]);
      }
    });
  });
}

async function addFavorite(user, id) {
  const favorites = await getFavorites(user);
  favorites.push(id);
  await saveFavorites(user, favorites);
}

async function deleteFavorite(user, id) {
  let favorites = await getFavorites(user);
  favorites = favorites.filter(item => item !== String(id));
  await saveFavorites(user, favorites);
}

export { getFavorites, addFavorite, deleteFavorite };
