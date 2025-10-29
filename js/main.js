  // Expander semplice per la sezione Acinque
  function initAcinqueExpander() {
      var btn = document.querySelector('#acinque .expander-toggle');
      var panel = document.getElementById('acinque-content');

      if (btn && panel) {
          btn.addEventListener('click', function() {
              var isOpen = btn.getAttribute('aria-expanded') === 'true';

              if (isOpen) {
                  // Chiude il pannello
                  btn.setAttribute('aria-expanded', 'false');
                  panel.classList.remove('open');
                  panel.style.maxHeight = '0px';
              } else {
                  // Apre il pannello
                  btn.setAttribute('aria-expanded', 'true');
                  panel.classList.add('open');
                  panel.style.maxHeight = panel.scrollHeight + 'px';
              }
          });

          // Aggiorna l'altezza se la finestra viene ridimensionata
          window.addEventListener('resize', function() {
              if (panel.classList.contains('open')) {
                  panel.style.maxHeight = panel.scrollHeight + 'px';
              }
          });
      }
  }

  // Al caricamento del'intero DOM
  window.addEventListener('load', () => {
      setTimeout(() => {
          let splashScreen = document.getElementById("splash-screen");
          let dashboard = document.getElementById("dashboard");

          if (splashScreen != null) {
              splashScreen.style.display = "none";
          }
          if (myElemFooterYear != null) {
              dashboard.style.display = "block";
          }
      }, 2000);
	  
      initAcinqueExpander();

      // aggiorna l’anno nel footer
      let myElemFooterYear = document.getElementById('year');

      if (myElemFooterYear != null) {
          myElemFooterYear.textContent = new Date().getFullYear();
      }
  });