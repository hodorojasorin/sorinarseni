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
          header_sub: "Digital Creator & vlogger wannabe",
          barcode_label:
            "LOCATION: CHIȘINĂU, MOLDOVA, mc centru<br />STATUS: ONLINE, probabil dau scroll pe TikTok",
          open_portrait: "Deschide portretul",
          me_placeholder: "pune<br />me.jpg<br />aici",
          play_pause: "Redare/Pauză",
          previous_track: "Piesa precedentă",
          next_track: "Piesa următoare",
          repeat_track: "Repetă",
          sticky_coachella:
            'eu până și azi mă plâng că nu am fost la coachella<br /><br /><em style="font-size: 0.88rem">"like baby, baby, baby, oh"</em>',
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
          youtube_handle: "Sorin Arseni / aici mănânc",
          twitter_handle: "@sorinarsen1 / aici dorm",
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
            "✓ elev computer science - ceiti<br />✓ viitor student la producție multimedia - usm<br />✗ nu-mi plac macaroanele cu brânză",
          overview_contact:
            "👇 pentru inquiries, team-up<br />contact@sorinarseni.com",
          image_preview: "Previzualizare imagine",
          footer_copy:
            "© 2026 SORIN ARSENI · HANDCRAFTED BY MYSELF · ALL RIGHTS WHATEVER",
        },
        en: {
          header_sub: "Digital Creator & vlogger wannabe",
          barcode_label:
            "LOCATION: CHISINAU, MOLDOVA, mcdonald's center<br />STATUS: ONLINE, probably scrolling TikTok",
          open_portrait: "Open portrait",
          me_placeholder: "put<br />me.jpg<br />here",
          play_pause: "Play/Pause",
          previous_track: "Previous track",
          next_track: "Next track",
          repeat_track: "Repeat",
          sticky_coachella:
            'i still complain to this day that I never made it to coachella<br /><br /><em style="font-size: 0.88rem">"like baby, baby, baby, oh"</em>',
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
          youtube_handle: "Sorin Arseni / i eat here",
          twitter_handle: "@sorinarsen1 / i sleep here",
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
            "✓ student computer science - ceiti<br />✓ future multimedia production student - usm<br />✗ i don't like mac and cheese",
          overview_contact:
            "👇 for inquiries, team-ups<br />contact@sorinarseni.com",
          image_preview: "Image preview",
          footer_copy:
            "© 2026 SORIN ARSENI · HANDCRAFTED BY MYSELF · ALL RIGHTS WHATEVER",
        },
      };

      const langButtons = document.querySelectorAll(".lang-btn");

      function applyLanguage(lang) {
        const nextLang = lang === "en" ? "en" : "ro";
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
          heroMain.getBoundingClientRect().height,
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

      buildDots();
      loadTrack(0, false);
      applyLanguage(window.localStorage.getItem("siteLang") || "ro");
