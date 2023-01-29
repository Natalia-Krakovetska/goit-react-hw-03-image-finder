const BASE_URL = 'https://pixabay.com/api/';
function FetchImages({ name }) {
  return fetch(
    `${BASE_URL}${name}?q=cat&page=1&key=31910031-2af744f88dbcdc5739401f7e8&image_type=photo&orientation=horizontal&per_page=12`
  );
}
export { FetchImages };
