document.getElementById("generate-btn").addEventListener("click", fetchBSPhrase);

    function fetchBSPhrase() {
      const url = "https://api.adviceslip.com/advice";
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const bsPhrase = data.slip.advice;
          document.getElementById("bs-phrase").textContent = bsPhrase;
        })
        .catch(error => {
          document.getElementById("bs-phrase").textContent = "Oops, something went wrong!";
          console.error(error);
        });
    }