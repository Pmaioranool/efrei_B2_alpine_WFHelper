
# notification

```html
<div x-data>
      <button @click="notifyUser()">Afficher Notification système</button>
    </div>

    <script>
      function notifyUser() {
        // Vérifie si les notifications sont supportées par le navigateur
        if (!("Notification" in window)) {
          alert("Ce navigateur ne supporte pas les notifications.");
        }
        // Vérifie si la permission a déjà été accordée
        else if (Notification.permission === "granted") {
          new Notification("Bonjour ! Ceci est une notification système.");
        }
        // Si la permission n'a pas été demandée, demande-la
        else if (Notification.permission !== "denied") {
          Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
              new Notification("Notification activée avec succès !");
            }
          });
        }
      }
    </script>
```


# news
![le logo de Framasoft](../images/news.png)

```html
    <div x-data="warframeNews()" x-init="fetchNews()">
      <h2>Nouvelles de Warframe (PC)</h2>
      <template x-for="newsItem in news" :key="newsItem.id">
        <div class="news-item">
          <h3 x-text="newsItem.message"></h3>
          <p x-text="newsItem.date"></p>
        </div>
      </template>
    </div>

    <script>
      function warframeNews() {
        return {
          news: [], // Stocke les nouvelles récupérées
          fetchNews() {
            // URL de l'API pour récupérer les nouvelles de la plateforme PC
            fetch("https://api.warframestat.us/pc/news")
              .then((response) => response.json())
              .then((data) => {
                this.news = data; // Met à jour les nouvelles avec les données de l'API
              })
              .catch((error) => {
                console.error(
                  "Erreur lors de la récupération des données : ",
                  error
                );
              });
          },
        };
      }
    </script>

    <style>
      .news-item {
        background-color: #f9f9f9;
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px 0;
      }
    </style>
```