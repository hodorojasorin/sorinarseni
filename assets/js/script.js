      const bc = document.getElementById("bc");
      [
        28, 18, 32, 14, 28, 20, 32, 16, 28, 24, 18, 32, 20, 28, 14, 32, 18, 26,
        32, 22, 16, 28,
      ].forEach((h, i) => {
        const s = document.createElement("span");
        s.style.height = h + "px";
        s.style.width = (i % 3 === 0 ? 3 : 2) + "px";
        bc.appendChild(s);
      });

      const tickers = [
        {
          el: document.getElementById("w1ticker"),
          text: "SORIN ARSENI HODOROJA",
          dot: "✦",
        },
        {
          el: document.getElementById("w2ticker"),
          text: "SORIN · ARSENI · HODOROJA",
          dot: "◆",
        },
      ].filter((item) => item.el);

      tickers.forEach(({ el, text, dot }) => {
        let html = "";
        for (let i = 0; i < 24; i++) {
          html += `<span class="washi-item">${text}</span><span class="washi-dot">${dot}</span>`;
        }
        el.innerHTML = html;
      });

      const translations = {
        ro: {
          header_sub: "Multimedia Production Student",
          barcode_label:
            "LOCATION: CHIȘINĂU, MOLDOVA, mc centru<br />STATUS: ONLINE, probabil dau scroll pe TikTok",
          open_portrait: "Deschide portretul",
          me_placeholder: "pune<br />me.jpg<br />aici",
          play_pause: "Redare/Pauză",
          previous_track: "Piesa precedentă",
          next_track: "Piesa următoare",
          repeat_track: "Repetă",
          sticky_coachella:
            'student producție multimedia, programator, activist, om, organism eucariot<br /><br /><em style="font-size: 0.88rem"><a href="https://cv.sorinarseni.com" style="color: inherit">"duh"</a></em>',
          sticky_account:
            "✦ da tu șini iești sirioja<br />să-mi furi tu mie kontu'<br />țî sî parîi normal?? ✦",
          open_wood_photo: "Deschide poza de pe lemn",
          open_socials_photo: "Deschide poza din socials",
          wood_placeholder: "pune<br />wood-photo.jpg<br />aici",
          language_label: "language",
          socials_label: "// socials //",
          socials_photo_placeholder: "pune<br />socials-photo.jpg<br />aici",
          instagram_handle: "@sorinarseni / aici respir",
          tiktok_handle: "@suorinarseni / aici râd",
          youtube_handle: "@sorinarseni / aici mănânc",
          twitter_handle: "@suorinarseni / aici dorm",
          bereal_label: "// be f real //",
          open_bereal_1: "Deschide BeReal 1",
          open_bereal_2: "Deschide BeReal 2",
          open_bereal_3: "Deschide BeReal 3",
          open_bereal_4: "Deschide BeReal 4",
          bereal_caption_1: "o să-mi fie dor de ceiti",
          bereal_caption_2: "n-au zara aici la bistrita",
          bereal_caption_3: "am venit la mc pentru wc si am aruncat bonul",
          bereal_caption_4: "la valea morilor pe aleea florilor",
          overview_label: "// overview //",
          overview_main:
            "✓ student la producție multimedia - usm<br />✓ absolvent computer science - ceiti<br />✗ nu-mi plac macaroanele cu brânză",
          overview_contact:
            "👇 pentru inquiries, team-up<br />contact@sorinarseni.com",
          spotify_label: "playlist vama veche 2012 color",
          youtube_embed_label: "eu când am absolvit colegiul",
          experience_role:
            "Fost Coordonator EPM CEITI & membru al departamentului de Editare Video.",
          experience_desc:
            "Anul IV de colegiu. Am coordonat echipa de producție multimedia a CEITI: filmări, montaj și conținut pentru evenimentele instituției.",
          palmares_label: "Palmares",
          competition1_title: "Romanian Business Challenge",
          competition1_date: "Mai 2026",
          competition1_desc:
            "Locul 2, ediția a XIV-a — Camera de Comerț și Industrie Prahova, Ploiești.",
          competition1_placeholder: "pune<br />competition1.jpg<br />aici",
          competition2_title: "DATASTORM — Innovation through Data",
          competition2_date: "Oct 2025",
          competition2_desc:
            "Mențiune de onoare, competiție de data science.",
          competition2_placeholder: "pune<br />competition2.jpg<br />aici",
          image_preview: "Previzualizare imagine",
          footer_copy:
            "© 2026 SORIN ARSENI · HANDCRAFTED BY MYSELF · ALL RIGHTS WHATEVER",
        },
        en: {
          header_sub: "Multimedia Production Student",
          barcode_label:
            "LOCATION: CHISINAU, MOLDOVA, mcdonald's center<br />STATUS: ONLINE, probably scrolling TikTok",
          open_portrait: "Open portrait",
          me_placeholder: "put<br />me.jpg<br />here",
          play_pause: "Play/Pause",
          previous_track: "Previous track",
          next_track: "Next track",
          repeat_track: "Repeat",
          sticky_coachella:
            'multimedia production student, programmer, activist, human, eukaryotic organism<br /><br /><em style="font-size: 0.88rem"><a href="https://cv.sorinarseni.com" style="color: inherit">"duh"</a></em>',
          sticky_account:
            "✦ and you really think it's normal<br />siroja to steal my account like that?<br />are you kidding? ✦",
          open_wood_photo: "Open wood photo",
          open_socials_photo: "Open socials photo",
          wood_placeholder: "put<br />wood-photo.jpg<br />here",
          language_label: "language",
          socials_label: "// socials //",
          socials_photo_placeholder: "put<br />socials-photo.jpg<br />here",
          instagram_handle: "@sorinarseni / i breathe here",
          tiktok_handle: "@suorinarseni / i laugh here",
          youtube_handle: "@sorinarseni / i eat here",
          twitter_handle: "@suorinarseni / i sleep here",
          bereal_label: "// be f real //",
          open_bereal_1: "Open BeReal 1",
          open_bereal_2: "Open BeReal 2",
          open_bereal_3: "Open BeReal 3",
          open_bereal_4: "Open BeReal 4",
          bereal_caption_1: "i'm going to miss ceiti",
          bereal_caption_2: "they don't have zara here in bistrita",
          bereal_caption_3: "i came to mc for the wc and threw away the receipt",
          bereal_caption_4: "at valea morilor on the flower alley",
          overview_label: "// overview //",
          overview_main:
            "✓ multimedia production student - usm<br />✓ computer science graduate - ceiti<br />✗ i don't like mac and cheese",
          overview_contact:
            "👇 for inquiries, team-ups<br />contact@sorinarseni.com",
          spotify_label: "vama veche 2012 color playlist",
          youtube_embed_label: "me when i graduated college",
          experience_role:
            "Former Coordinator EPM CEITI & member of the Video Editing department.",
          experience_desc:
            "4th year of college. Coordinated CEITI's multimedia production team: filming, editing and content for the institution's events.",
          palmares_label: "Palmares",
          competition1_title: "Romanian Business Challenge",
          competition1_date: "May 2026",
          competition1_desc:
            "2nd Place, 14th edition — Prahova Chamber of Commerce and Industry, Ploiești.",
          competition1_placeholder: "put<br />competition1.jpg<br />here",
          competition2_title: "DATASTORM — Innovation through Data",
          competition2_date: "Oct 2025",
          competition2_desc: "Honorable Mention, a data science competition.",
          competition2_placeholder: "put<br />competition2.jpg<br />here",
          image_preview: "Image preview",
          footer_copy:
            "© 2026 SORIN ARSENI · HANDCRAFTED BY MYSELF · ALL RIGHTS WHATEVER",
        },
        it: {
          header_sub: "Multimedia Production Student",
          barcode_label:
            "LOCATION: CHISINAU, MOLDOVA, mcdonald's centro<br />STATUS: ONLINE, probabilmente sto scrollando su TikTok",
          open_portrait: "Apri il ritratto",
          me_placeholder: "metti<br />me.jpg<br />qui",
          play_pause: "Riproduci/Pausa",
          previous_track: "Traccia precedente",
          next_track: "Traccia successiva",
          repeat_track: "Ripeti",
          sticky_coachella:
            'studente di produzione multimediale, programmatore, attivista, essere umano, organismo eucariote<br /><br /><em style="font-size: 0.88rem"><a href="https://cv.sorinarseni.com" style="color: inherit">"duh"</a></em>',
          sticky_account:
            "✦ ma tu chi sei siroja<br />per rubarmi l'account così?<br />ti sembra normale?? ✦",
          open_wood_photo: "Apri la foto sul legno",
          open_socials_photo: "Apri la foto dei social",
          wood_placeholder: "metti<br />wood-photo.jpg<br />qui",
          language_label: "lingua",
          socials_label: "// socials //",
          socials_photo_placeholder: "metti<br />socials-photo.jpg<br />qui",
          instagram_handle: "@sorinarseni / qui respiro",
          tiktok_handle: "@suorinarseni / qui rido",
          youtube_handle: "@sorinarseni / qui mangio",
          twitter_handle: "@suorinarseni / qui dormo",
          bereal_label: "// be f real //",
          open_bereal_1: "Apri BeReal 1",
          open_bereal_2: "Apri BeReal 2",
          open_bereal_3: "Apri BeReal 3",
          open_bereal_4: "Apri BeReal 4",
          bereal_caption_1: "mi mancherà il ceiti",
          bereal_caption_2: "non hanno zara qui a bistrita",
          bereal_caption_3:
            "sono venuto al mc per il bagno e ho buttato lo scontrino",
          bereal_caption_4: "a valea morilor sul viale dei fiori",
          overview_label: "// overview //",
          overview_main:
            "✓ studente di produzione multimediale - usm<br />✓ diplomato in computer science - ceiti<br />✗ non mi piacciono i maccheroni al formaggio",
          overview_contact:
            "👇 per richieste, collaborazioni<br />contact@sorinarseni.com",
          spotify_label: "playlist vama veche 2012 a colori",
          youtube_embed_label: "io quando mi sono diplomato al college",
          experience_role:
            "Ex Coordinatore EPM CEITI & membro del dipartimento di Montaggio Video.",
          experience_desc:
            "Quarto anno di collegio. Ho coordinato il team di produzione multimediale del CEITI: riprese, montaggio e contenuti per gli eventi dell'istituto.",
          palmares_label: "Palmares",
          competition1_title: "Romanian Business Challenge",
          competition1_date: "Maggio 2026",
          competition1_desc:
            "2° posto, XIV edizione — Camera di Commercio e Industria di Prahova, Ploiești.",
          competition1_placeholder: "metti<br />competition1.jpg<br />qui",
          competition2_title: "DATASTORM — Innovation through Data",
          competition2_date: "Ott 2025",
          competition2_desc:
            "Menzione d'onore, competizione di data science.",
          competition2_placeholder: "metti<br />competition2.jpg<br />qui",
          image_preview: "Anteprima immagine",
          footer_copy:
            "© 2026 SORIN ARSENI · HANDCRAFTED BY MYSELF · ALL RIGHTS WHATEVER",
        },
      };

      const langButtons = document.querySelectorAll(".lang-btn");

      function applyLanguage(lang) {
        const nextLang = translations[lang] ? lang : "ro";
        const dict = translations[nextLang];
        document.documentElement.lang = nextLang;

        document.querySelectorAll("[data-i18n]").forEach((el) => {
          const key = el.dataset.i18n;
          if (dict[key]) el.textContent = dict[key];
        });

        document.querySelectorAll("[data-i18n-html]").forEach((el) => {
          const key = el.dataset.i18nHtml;
          if (dict[key]) el.innerHTML = dict[key];
        });

        document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
          const key = el.dataset.i18nAria;
          if (dict[key]) el.setAttribute("aria-label", dict[key]);
        });

        langButtons.forEach((btn) => {
          const isActive = btn.dataset.lang === nextLang;
          btn.classList.toggle("is-active", isActive);
          btn.setAttribute("aria-pressed", isActive ? "true" : "false");
        });

        document.querySelectorAll(".lang-menu-mobile[open]").forEach((menu) => {
          menu.removeAttribute("open");
        });

        window.localStorage.setItem("siteLang", nextLang);
        syncHeroPanelHeight();
      }

      const playlist = [
        {
          title: "baby 😜",
          artist: "Justin Bieber",
          src: "assets/audio/justin.mp3",
          img: "assets/images/justin.png",
        },
        {
          title: "la plena 🐶",
          artist: "W Sound",
          src: "assets/audio/sound.mp3",
          img: "assets/images/sound.png",
        },
        {
          title: "3 nights 🌌",
          artist: "Dominic Fike",
          src: "assets/audio/dominic.mp3",
          img: "assets/images/dominic.png",
        },
        {
          title: "cola song 🥤",
          artist: "INNA",
          src: "assets/audio/inna.mp3",
          img: "assets/images/inna.png",
        },
        {
          title: "viva Moldova! 🇲🇩",
          artist: "Satoshi",
          src: "assets/audio/satoshi.mp3",
          img: "assets/images/satoshi.png",
        },
      ];

      let current = 0;
      let isPlaying = false;
      let isRepeat = false;
      const audio = document.getElementById("audio");
      audio.volume = 0.8;

      const discRing = document.getElementById("discRing");
      const discArt = document.getElementById("discArt");
      const playerSong = document.getElementById("playerSong");
      const playerArtist = document.getElementById("playerArtist");
      const iconPlay = document.getElementById("iconPlay");
      const iconPause = document.getElementById("iconPause");
      const discIconPlay = document.getElementById("discIconPlay");
      const discIconPause = document.getElementById("discIconPause");
      const progressFill = document.getElementById("progressFill");
      const timeEl = document.getElementById("timeEl");
      const durEl = document.getElementById("durEl");
      const progressBar = document.getElementById("progressBar");
      const volSlider = document.getElementById("volSlider");
      const plDots = document.getElementById("plDots");

      function buildDots() {
        plDots.innerHTML = "";
        playlist.forEach((_, i) => {
          const d = document.createElement("button");
          d.className = "pl-dot" + (i === current ? " active" : "");
          d.addEventListener("click", () => loadTrack(i, true));
          plDots.appendChild(d);
        });
      }

      function updateDots() {
        plDots
          .querySelectorAll(".pl-dot")
          .forEach((d, i) => d.classList.toggle("active", i === current));
      }

      function fmt(s) {
        return (
          Math.floor(s / 60) + ":" + String(Math.floor(s % 60)).padStart(2, "0")
        );
      }

      function loadTrack(idx, autoplay) {
        current = idx;
        const t = playlist[idx];
        audio.src = t.src;
        playerSong.textContent = t.title;
        playerArtist.textContent = t.artist;
        discArt.style.backgroundImage = t.img ? `url('${t.img}')` : "none";
        discArt.style.backgroundColor = t.img ? "transparent" : "#333";
        progressFill.style.width = "0%";
        timeEl.textContent = durEl.textContent = "0:00";
        updateDots();
        if (autoplay) {
          audio.play();
          setPlaying(true);
        } else {
          setPlaying(false);
        }
      }

      function setPlaying(state) {
        isPlaying = state;
        iconPlay.style.display = state ? "none" : "block";
        iconPause.style.display = state ? "block" : "none";
        discIconPlay.style.display = state ? "none" : "block";
        discIconPause.style.display = state ? "block" : "none";
        state
          ? discRing.classList.add("spinning")
          : discRing.classList.remove("spinning");
      }

      function togglePlay() {
        if (!audio.src || audio.src === window.location.href) {
          loadTrack(0, true);
          return;
        }

        audio.paused
          ? (audio.play(), setPlaying(true))
          : (audio.pause(), setPlaying(false));
      }

      document.getElementById("btnPlay").addEventListener("click", togglePlay);
      document
        .getElementById("discPlayBtn")
        .addEventListener("click", togglePlay);
      document
        .getElementById("btnPrev")
        .addEventListener("click", () =>
          loadTrack(
            (current - 1 + playlist.length) % playlist.length,
            isPlaying,
          ),
        );
      document
        .getElementById("btnNext")
        .addEventListener("click", () =>
          loadTrack((current + 1) % playlist.length, isPlaying),
        );

      const iconRepeat = document.getElementById("iconRepeat");
      document.getElementById("btnRepeat").addEventListener("click", () => {
        isRepeat = !isRepeat;
        iconRepeat.style.opacity = isRepeat ? "1" : "0.4";
        audio.loop = isRepeat;
      });

      audio.addEventListener("timeupdate", () => {
        if (!audio.duration) return;
        progressFill.style.width =
          (audio.currentTime / audio.duration) * 100 + "%";
        timeEl.textContent = fmt(audio.currentTime);
        durEl.textContent = fmt(audio.duration);
      });

      progressBar.addEventListener("click", (e) => {
        if (!audio.duration) return;
        const r = progressBar.getBoundingClientRect();
        audio.currentTime = ((e.clientX - r.left) / r.width) * audio.duration;
      });

      volSlider.addEventListener("input", () => {
        audio.volume = volSlider.value;
      });

      audio.addEventListener("ended", () => {
        if (!isRepeat) loadTrack((current + 1) % playlist.length, true);
      });

      const berealItems = document.querySelectorAll(".bereal-item");
      const headerPhotoTrigger = document.querySelector(
        ".photo-frame.zoom-trigger",
      );
      const woodPhotoTrigger = document.querySelector(
        ".wood-plank.zoom-trigger",
      );
      const socialsPhotoTrigger = document.querySelector(
        ".socials-photo-card.zoom-trigger",
      );
      const berealModal = document.getElementById("berealModal");
      const berealModalCard = document.getElementById("berealModalCard");
      const berealModalPhoto = document.getElementById("berealModalPhoto");
      const heroMain = document.querySelector(".hero-main");
      const socialsPanel = document.querySelector(".socials-panel");
      const socialsLift = 6;
      let lastPreviewTrigger = null;

      function setPreviewVariant(variant) {
        berealModalCard.classList.remove(
          "is-bereal",
          "is-header",
          "is-wood",
          "is-socials",
        );
        berealModalCard.classList.add(variant);
      }

      function syncHeroPanelHeight() {
        if (!heroMain || !socialsPanel) return;
        if (window.innerWidth <= 980) {
          socialsPanel.style.removeProperty("height");
          return;
        }

        socialsPanel.style.height = `${Math.round(
          heroMain.getBoundingClientRect().height + socialsLift,
        )}px`;
      }

      function clonePreviewNode(node) {
        const clone = node.cloneNode(true);
        clone.removeAttribute("tabindex");
        clone.removeAttribute("role");
        clone.removeAttribute("aria-label");
        clone.classList.remove("zoom-trigger", "pop");
        return clone;
      }

      function openPreview(node, variant, trigger) {
        if (!node) return;
        lastPreviewTrigger = trigger;
        setPreviewVariant(variant);
        berealModalPhoto.innerHTML = "";
        berealModalPhoto.appendChild(clonePreviewNode(node));
        berealModal.classList.add("is-open");
        berealModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
      }

      function closePreview() {
        berealModal.classList.remove("is-open");
        berealModal.setAttribute("aria-hidden", "true");
        berealModalPhoto.innerHTML = "";
        document.body.style.overflow = "";
        if (lastPreviewTrigger) lastPreviewTrigger.focus();
      }

      function bindPreviewTrigger(trigger, getNode, variant) {
        if (!trigger) return;
        trigger.addEventListener("click", () => {
          openPreview(getNode(trigger), variant, trigger);
        });
        trigger.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openPreview(getNode(trigger), variant, trigger);
          }
        });
      }

      berealItems.forEach((item) => {
        bindPreviewTrigger(
          item,
          (currentItem) => currentItem.querySelector(".bereal-photo"),
          "is-bereal",
        );
      });

      bindPreviewTrigger(
        headerPhotoTrigger,
        (currentItem) => currentItem,
        "is-header",
      );
      bindPreviewTrigger(
        woodPhotoTrigger,
        (currentItem) => currentItem,
        "is-wood",
      );
      bindPreviewTrigger(
        socialsPhotoTrigger,
        (currentItem) => currentItem,
        "is-socials",
      );

      berealModal.addEventListener("click", (event) => {
        if (event.target === berealModal) closePreview();
      });

      document.addEventListener("keydown", (event) => {
        if (
          event.key === "Escape" &&
          berealModal.classList.contains("is-open")
        ) {
          closePreview();
        }
      });

      langButtons.forEach((btn) => {
        btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
      });

      window.addEventListener("load", syncHeroPanelHeight);
      window.addEventListener("resize", syncHeroPanelHeight);

      const siteLoader = document.getElementById("siteLoader");
      if (siteLoader) {
        const loaderAudio = new Audio("assets/audio/loading.mp3");
        loaderAudio.volume = 0.6;
        const loaderPlay = loaderAudio.play();
        if (loaderPlay && typeof loaderPlay.catch === "function") {
          loaderPlay.catch(() => {});
        }

        const loaderStart = performance.now();
        const getAudioDuration = () =>
          new Promise((resolve) => {
            if (loaderAudio.duration && !isNaN(loaderAudio.duration)) {
              resolve(loaderAudio.duration * 1000);
              return;
            }
            loaderAudio.addEventListener(
              "loadedmetadata",
              () => resolve(loaderAudio.duration * 1000),
              { once: true },
            );
            setTimeout(() => resolve(2000), 5000);
          });

        window.addEventListener("load", () => {
          getAudioDuration().then((minShow) => {
            const wait = Math.max(0, minShow - (performance.now() - loaderStart));
            setTimeout(() => {
              siteLoader.classList.add("is-hidden");
              loaderAudio.pause();
              setTimeout(() => siteLoader.remove(), 600);
            }, wait);
          });
        });
      }

      if (window.matchMedia("(pointer: fine)").matches) {
        document.documentElement.classList.add("custom-cursor");

        const cursorDot = document.createElement("div");
        cursorDot.className = "cursor-dot";
        document.body.appendChild(cursorDot);

        const cursorShadow = document.createElement("div");
        cursorShadow.className = "cursor-shadow";
        document.body.appendChild(cursorShadow);

        const clickableSelector =
          "a, button, summary, label, input, [role='button'], .pl-dot, .progress-bar";

        let mouseX = 0;
        let mouseY = 0;
        let shadowX = 0;
        let shadowY = 0;
        let cursorVisible = false;

        function hideCursor() {
          cursorVisible = false;
          cursorDot.style.opacity = "0";
          cursorShadow.style.opacity = "0";
        }

        document.addEventListener("mousemove", (event) => {
          mouseX = event.clientX;
          mouseY = event.clientY;
          if (!cursorVisible) {
            cursorVisible = true;
            shadowX = mouseX;
            shadowY = mouseY;
            cursorDot.style.opacity = "1";
            cursorShadow.style.opacity = "1";
          }
          cursorDot.classList.toggle(
            "is-link",
            Boolean(event.target.closest(clickableSelector)),
          );
        });

        document.addEventListener("mouseleave", hideCursor);

        document.addEventListener("mouseout", (event) => {
          if (
            event.relatedTarget &&
            event.relatedTarget.tagName === "IFRAME"
          ) {
            hideCursor();
          }
        });

        (function animateCursor() {
          const dotSize = cursorDot.classList.contains("is-link") ? 16 : 10;
          cursorDot.style.transform = `translate(${mouseX - dotSize / 2}px, ${mouseY - dotSize / 2}px)`;
          shadowX += (mouseX - shadowX) * 0.25;
          shadowY += (mouseY - shadowY) * 0.25;
          cursorShadow.style.transform = `translate(${shadowX - 10}px, ${shadowY - 10}px)`;
          requestAnimationFrame(animateCursor);
        })();
      }

      buildDots();
      loadTrack(0, false);
      applyLanguage(window.localStorage.getItem("siteLang") || "ro");
