// SkyHaven Interactive Roadmap Engine
// Renders dynamic phase cards, handles search & filtering, and tracks progress.

document.addEventListener("DOMContentLoaded", () => {
  const data = window.ROADMAP_DATA;
  if (!data) {
    console.error("Roadmap data not found.");
    return;
  }

  // DOM Elements
  const phasesContainer = document.getElementById("phasesContainer");
  const overallFill = document.getElementById("overallFill");
  const overallPercent = document.getElementById("overallPercent");
  const completedCount = document.getElementById("completedCount");
  const inProgressCount = document.getElementById("inProgressCount");
  const plannedCount = document.getElementById("plannedCount");
  const searchInput = document.getElementById("searchInput");
  const searchClear = document.getElementById("searchClear");
  const statusFilters = document.querySelectorAll(".filter-pill");
  const categoryFiltersContainer = document.getElementById("categoryFilters");
  const noResults = document.getElementById("noResults");
  const resultCount = document.getElementById("resultCount");

  let currentStatus = "all";
  let currentCategory = "all";
  let searchQuery = "";

  // 1. Calculate & Render Global Statistics
  function updateGlobalStats() {
    let total = 0;
    let completed = 0;
    let inProgress = 0;
    let planned = 0;

    data.phases.forEach(phase => {
      phase.features.forEach(feat => {
        total++;
        if (feat.status === "completed") completed++;
        else if (feat.status === "in-progress") inProgress++;
        else planned++;
      });
    });

    const percent = Math.round((completed / (total || 1)) * 100);
    
    // Animate progress bar
    setTimeout(() => {
      overallFill.style.width = `${percent}%`;
    }, 150);

    overallPercent.textContent = `${percent}%`;
    completedCount.textContent = completed;
    inProgressCount.textContent = inProgress;
    plannedCount.textContent = planned;
  }

  // 2. Build Category Filter Pills Dynamically
  function buildCategoryPills() {
    const categories = new Set();
    data.phases.forEach(p => {
      p.features.forEach(f => {
        if (f.category) categories.add(f.category);
      });
    });

    // Append pills
    categories.forEach(cat => {
      const btn = document.createElement("button");
      btn.className = "cat-pill";
      btn.dataset.category = cat;
      btn.textContent = cat;
      btn.addEventListener("click", () => {
        document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
        btn.classList.add("active");
        currentCategory = cat;
        applyFilters();
      });
      categoryFiltersContainer.appendChild(btn);
    });
  }

  // 3. Helper to format status badges
  function getBadgeClass(badge) {
    const lower = (badge || "").toLowerCase();
    if (lower === "live") return "badge-live";
    if (lower === "in development") return "badge-dev";
    if (lower === "testing") return "badge-testing";
    if (lower === "concept") return "badge-concept";
    return "badge-planned";
  }

  function getStatusLabel(status) {
    if (status === "completed") return "Completed / Live";
    if (status === "in-progress") return "In Development";
    return "Planned";
  }

  // 4. Render All Phases & Feature Cards
  function renderPhases() {
    phasesContainer.innerHTML = "";

    data.phases.forEach(phase => {
      const phaseEl = document.createElement("article");
      phaseEl.className = `phase-block ${phase.status}`;
      phaseEl.id = phase.id;

      // Header
      const header = document.createElement("div");
      header.className = "phase-header";
      header.innerHTML = `
        <div class="phase-meta">
          <div class="phase-number-badge">${phase.number}</div>
          <div class="phase-title-group">
            <h2>${phase.title}</h2>
            <p class="phase-tagline">${phase.tagline}</p>
          </div>
        </div>
        <div class="phase-status-badge ${getBadgeClass(phase.status === 'completed' ? 'live' : phase.status === 'in-progress' ? 'in development' : 'planned')}">
          ${getStatusLabel(phase.status)}
        </div>
      `;

      // Phase Progress Bar
      const progressBar = document.createElement("div");
      progressBar.className = "phase-progress-bar";
      progressBar.innerHTML = `
        <div class="phase-track">
          <div class="phase-fill" style="width: ${phase.completionPercentage}%;"></div>
        </div>
        <div class="phase-percent-text">${phase.completionPercentage}%</div>
      `;

      // Feature Grid
      const grid = document.createElement("div");
      grid.className = "feature-grid";

      phase.features.forEach(feat => {
        const card = document.createElement("div");
        card.className = "feature-card";
        card.dataset.id = feat.id;
        card.dataset.status = feat.status;
        card.dataset.category = feat.category;
        card.dataset.searchText = `${feat.title} ${feat.description} ${feat.details || ''} ${feat.tags ? feat.tags.join(' ') : ''}`.toLowerCase();

        const tagsHtml = feat.tags && feat.tags.length > 0
          ? `<div class="tag-list">${feat.tags.map(t => `<span class="tag-badge">#${t}</span>`).join("")}</div>`
          : "";

        card.innerHTML = `
          <div class="card-top">
            <div class="card-header-line">
              <span class="card-category">${feat.category}</span>
              <span class="phase-status-badge ${getBadgeClass(feat.badge)}">${feat.badge}</span>
            </div>
            <h3>${feat.title}</h3>
            <p class="feature-desc">${feat.description}</p>
          </div>
          <div class="card-bottom">
            ${feat.details ? `<p class="feature-details">${feat.details}</p>` : ""}
            ${tagsHtml}
          </div>
        `;

        grid.appendChild(card);
      });

      phaseEl.appendChild(header);
      phaseEl.appendChild(progressBar);
      phaseEl.appendChild(grid);
      phasesContainer.appendChild(phaseEl);
    });
  }

  // 5. Apply Search & Filters
  function applyFilters() {
    const query = searchQuery.trim().toLowerCase();
    let totalVisible = 0;

    const phaseBlocks = document.querySelectorAll(".phase-block");

    phaseBlocks.forEach(phaseBlock => {
      const cards = phaseBlock.querySelectorAll(".feature-card");
      let phaseVisibleCount = 0;

      cards.forEach(card => {
        const statusMatch = currentStatus === "all" || card.dataset.status === currentStatus;
        const categoryMatch = currentCategory === "all" || card.dataset.category === currentCategory;
        const searchMatch = !query || card.dataset.searchText.includes(query);

        if (statusMatch && categoryMatch && searchMatch) {
          card.classList.remove("is-hidden");
          phaseVisibleCount++;
          totalVisible++;
        } else {
          card.classList.add("is-hidden");
        }
      });

      // If no cards match in this phase, hide the whole phase block
      if (phaseVisibleCount === 0) {
        phaseBlock.style.display = "none";
      } else {
        phaseBlock.style.display = "block";
      }
    });

    // Result count text & no results state
    if (resultCount) {
      if (query || currentStatus !== "all" || currentCategory !== "all") {
        resultCount.textContent = `Showing ${totalVisible} feature${totalVisible === 1 ? '' : 's'}`;
        resultCount.style.display = "inline";
      } else {
        resultCount.style.display = "none";
      }
    }

    if (totalVisible === 0) {
      noResults.style.display = "block";
    } else {
      noResults.style.display = "none";
    }
  }

  // 6. Setup Event Listeners
  // Status filter pills
  statusFilters.forEach(pill => {
    pill.addEventListener("click", () => {
      statusFilters.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentStatus = pill.dataset.status;
      applyFilters();
    });
  });

  // Category filter 'All' button
  const catAllBtn = document.querySelector(".cat-pill[data-category='all']");
  if (catAllBtn) {
    catAllBtn.addEventListener("click", () => {
      document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
      catAllBtn.classList.add("active");
      currentCategory = "all";
      applyFilters();
    });
  }

  // Search input with debounce & clear button
  let debounceTimer;
  searchInput.addEventListener("input", (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      searchQuery = e.target.value;
      if (searchQuery.length > 0) {
        searchClear.style.display = "block";
      } else {
        searchClear.style.display = "none";
      }
      applyFilters();
    }, 150);
  });

  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    searchClear.style.display = "none";
    searchInput.focus();
    applyFilters();
  });

  // Init
  updateGlobalStats();
  buildCategoryPills();
  renderPhases();
});
