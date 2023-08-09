// news.js
document.addEventListener("DOMContentLoaded", function () {
    const newsContainer = document.getElementById("news-container");

    // Simulación de carga de noticias desde las otras secciones
    function loadNewsFromSection(sectionName) {
        // Realizar una llamada AJAX para obtener las noticias de la sección
        // Aquí puedes usar fetch() o XMLHttpRequest para obtener los datos del servidor
        // Luego, itera sobre las noticias y agrega elementos al newsContainer
        // Ejemplo:
        const newsData = obtenerNoticiasDeSeccion(sectionName); // Función simulada
        newsData.forEach(news => {
            const newsElement = document.createElement("div");
            newsElement.className = "news-item";
            newsElement.innerHTML = `<h3>${news.title}</h3><p>${news.content}</p>`;
            newsContainer.appendChild(newsElement);
        });
    }

    // Cargar noticias de las secciones relevantes
    loadNewsFromSection("tecnologia");
    loadNewsFromSection("astronomia");
    loadNewsFromSection("ciencia");
});