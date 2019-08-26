export const setTitle = (title = 'SMN') => {
    const tag = document.querySelector('title');
    if (tag) tag.innerHTML = 'Gaia - ' + title;
}