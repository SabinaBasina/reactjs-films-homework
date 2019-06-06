/* eslint-disable no-underscore-dangle */
import http from 'axios';

function getRequest(user) {
  return {
    method: 'GET',
    url: `https://tvshows-c17b.restdb.io/rest/favorites?q={"user": "${user}"}`,
    headers: {
      'cache-control': 'no-cache',
      'x-apikey': '5ce2b7b6780a473c8df5c9e9',
      'content-type': 'application/json',
    },
    json: true,
  };
}

async function getFavoritesId(user) {
  return new Promise((resolve) => {
    http(getRequest(user))
      .then((response) => {
        if (response.data && response.data.length > 0) {
          resolve(response.data[0]._id);
        } else {
          resolve(null);
        }
      })
      .catch((error) => {
        resolve(null);
        throw new Error(error);
      });
  });
}

async function saveFavorites(user, favorites) {
  const favoritesId = await getFavoritesId(user);
  return new Promise((resolve, reject) => {
    http({
      method: favoritesId ? 'PUT' : 'POST',
      url: `https://tvshows-c17b.restdb.io/rest/favorites${favoritesId ? `/${favoritesId}` : ''}`,
      headers: {
        'cache-control': 'no-cache',
        'x-apikey': '5ce2b7b6780a473c8df5c9e9',
        'content-type': 'application/json',
      },
      data: { user, tvshows: favorites.join(',') },
      json: true,
    })
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject();
        throw new Error(error);
      });
  });
}

async function getFavorites(user) {
  return new Promise((resolve) => {
    http(getRequest(user))
      .then((response) => {
        if (response.data && response.data.length > 0 && response.data[0].tvshows) {
          resolve(response.data[0].tvshows.split(','));
        } else {
          resolve([]);
        }
      })
      .catch((error) => {
        resolve([]);
        throw new Error(error);
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
