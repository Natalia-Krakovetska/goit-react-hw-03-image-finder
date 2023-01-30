const BASE_URL = 'https://pixabay.com/api/';
export function FetchApi({ name }) {
  return fetch(
    `${BASE_URL}?q=${name}&page=1&key=31910031-2af744f88dbcdc5739401f7e8&image_type=photo&orientation=horizontal&per_page=12`
  ).then(resp => {
    if (resp.ok) {
      return resp.json();
    }
    return Promise.reject(new Error('NO'));
  });
}
