export default function api(searchQuery, page, PER_PAGE) {
  const API_KEY = '31518737-8890035b7ccda7383c5734768';

  return fetch(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(
      new Error(`Немає зображення за запитом ${searchQuery}`)
    );
  });
}
