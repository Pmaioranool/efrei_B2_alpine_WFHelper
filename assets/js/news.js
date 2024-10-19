function warframeNews() {
  return {
    news: [],
    fetchNews() {
      fetch("https://api.warframestat.us/pc/news")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erreur de réseau");
          }
          return response.json();
        })
        .then((data) => {
          this.news = data;
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des données : ", error);
        });
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleString("fr-FR", {
        dateStyle: "medium",
        timeStyle: "short",
      });
    },
  };
}
