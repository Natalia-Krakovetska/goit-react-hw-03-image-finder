const BASE_URL = 'https://pixabay.com/api/';
export default function FetchCountries(name = 'Ukraine') {
  return fetch(
    `${BASE_URL}${name}?q=cat&page=1&key=31910031-2af744f88dbcdc5739401f7e8&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then(resp => {
      console.log(resp);
      if (!resp.ok) {
        throw new Error('statusText');
      }
      return resp.json();
    })
    .catch(err => console.log('Oops, there is no country with that name'));
}
