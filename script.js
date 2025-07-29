
let articlesData = [];
fetch("articles/list.json")
    .then(res => res.json())
    .then(data => {
        articlesData = data;
        renderArticles("all");
    });

function renderArticles(category) {
    const container = document.getElementById("articles-container");
    container.innerHTML = "";
    let filtered = articlesData.filter(a => category === "all" || a.category === category);
    filtered.forEach(article => {
        container.innerHTML += `
            <article>
                <h2><a href="article.html?article=${article.file}">${article.title}</a></h2>
                <p><em>${article.date} | ${article.category}</em></p>
                <img src="${article.image}" alt="${article.title}">
                <p>${article.content.substring(0, 100)}...</p>
            </article>
        `;
    });
}

function filterCategory(cat) {
    renderArticles(cat);
}
