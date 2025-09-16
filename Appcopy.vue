<style scoped>
html {
  scroll-behavior: smooth;
}

/* Top Bar */
.top-bar {
  position: sticky;
  top: 0;
  z-index: 100;
  margin: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #111;
  border-radius: 0.5em;
  filter: drop-shadow(0 0 4px #FF99FF);
  padding: 0.5em 3em;
  transition: padding 0.3s, margin 0.3s;
}
.top-logo {
  display: flex;
  align-items: center;
  border-radius: 0.5em;
}
.top-fill {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  min-width: 0;
  overflow: hidden;
}
.logo-navbar {
  height: 3.5em;
  width: auto;
  border-radius: 0.5em;
  filter: drop-shadow(0 0 4px #FF99FF);
}
.logo-blanco {
  height: 3.5em;
  width: auto;
  opacity: 1;
  filter: drop-shadow(0 0 4px #FF99FF);
}
.social-bar {
  display: flex;
  align-items: center;
  gap: 1em;
  filter: drop-shadow(0 0 8px #FF99FF);
}
.social-link {
  display: inline-block;
}
.social-icon {
  width: 2em;
  height: 2em;
  filter: grayscale(0.2) brightness(1.2);
  transition: filter 0.2s;
}
.social-icon:hover {
  filter: drop-shadow(0 0 8px #FF99FF) brightness(1.5);
}

/* Navbar */
.navbar {
  position: sticky;
  top: 5.5em;
  z-index: 99;
  margin: 1em;
  background: #111;
  padding: 1em 0;
  display: flex;
  width: auto;
  align-items: center;
  justify-content: center;
  border-radius: 0.5em;
  filter: drop-shadow(0 0 4px #FF99FF);
  transition: padding 0.3s, margin 0.3s;
}
.navbar-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.5em;
}
.navbar-item {
  margin: 0 1em;
}
.navbar-link {
  color: #FF99FF;
  text-decoration: none;
  font-family: 'Permanent Marker', cursive, Arial, sans-serif;
  font-size: 1.32em;
  transition: color 0.2s, background 0.2s;
  padding: 0.3em 0.8em;
  border-radius: 0.3em;
  background: transparent;
}
.navbar-link:hover,
.navbar-link:focus {
  color: #fff;
  background: #ff99ff33;
  outline: none;
}

/* Secciones */
.section {
  min-height: 60vh;
  padding: 2em 0;
  width: 100%;
  box-sizing: border-box;
  transition: padding 0.3s;
}

/* Responsive */
@media (max-width: 1100px) {
  .top-bar {
    padding: 0.5em 1em;
    margin: 0.5em;
    gap: 1em;
  }
  .top-fill {
    gap: 1em;
  }
  .logo-navbar,
  .logo-blanco {
    height: 2.5em;
  }
  .navbar {
    top: 7em;
    margin: 0.5em;
    padding: 0.5em 0;
  }
  .navbar-list {
    gap: 0.2em;
  }
  .navbar-item {
    margin: 0 0.5em;
  }
  .navbar-link {
    font-size: 1.1em;
    padding: 0.2em 0.5em;
  }
}

@media (max-width: 900px) {
  .top-bar {
    flex-direction: column;
    align-items: stretch;
    padding: 0.5em 0.5em;
    margin: 0.5em 0.2em;
    gap: 0.5em;
  }
  .top-logo,
  .top-fill,
  .social-bar {
    justify-content: center;
    margin-bottom: 0.5em;
  }
  .logo-navbar,
  .logo-blanco {
    height: 2em;
  }
  .navbar {
    top: 8em;
    margin: 0.5em 0.2em;
    padding: 0.5em 0;
  }
  .navbar-list {
    flex-direction: column;
    align-items: center;
    gap: 0.3em;
  }
  .navbar-item {
    margin: 0.3em 0;
  }
  .navbar-link {
    font-size: 1em;
    padding: 0.2em 0.5em;
  }
  .section {
    padding: 1em 0.2em;
    min-height: 40vh;
  }
}

@media (max-width: 600px) {
  .top-bar {
    padding: 0.2em 0.2em;
    gap: 0.2em;
  }
  .logo-navbar,
  .logo-blanco {
    height: 1.2em;
  }
  .navbar {
    top: 9em;
    padding: 0.2em 0;
  }
  .navbar-link {
    font-size: 0.95em;
    padding: 0.15em 0.3em;
  }
  .section {
    padding: 0.5em 0.1em;
    min-height: 30vh;
  }
}
</style>
