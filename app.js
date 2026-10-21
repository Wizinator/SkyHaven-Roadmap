// SkyHaven Roadmap - Simple & Clean Renderer

document.addEventListener("DOMContentLoaded", () => {
  const data = window.ROADMAP_DATA;
  if (!data) return;

  const phasesContainer = document.getElementById("phasesContainer");
  const overallFill = document.getElementById("overallFill");
  const overallPercent = document.getElementById("overallPercent");
  const completedCount = document.getElementById("completedCount");
  const inProgressCount = document.getElementById("inProgressCount");
  const plannedCount = document.getElementById("plannedCount");
  const searchInput = document.getElementById("searchInput");
  const statusTabs = document.querySelectorAll(".tab-btn");
  const noResults = document.getElementById("noResults");

  let currentStatus = "all";
  let searchQuery = "";

  // 1. Calculate and display counts
  function updateStats() {
    let total = 0;
    let completed = 0;
    let inProgress = 0;
    let planned = 0;

    data.phases.forEach(p => {
      p.features.forEach(f => {
        total++;
        if (f.status === "completed") completed++;
        else if (f.status === "in-progress") inProgress++;
        else planned++;
      });
    });

    const percent = Math.round((completed / (total || 1)) * 100);
    overallFill.style.width = `${percent}%`;
    overallPercent.textContent = `${percent}%`;

    completedCount.textContent = completed;
    inProgressCount.textContent = inProgress;
    plannedCount.textContent = planned;

    // Update tab labels with numbers
    statusTabs.forEach(tab => {
      const s = tab.dataset.status;
      if (s === "all") tab.textContent = `All (${total})`;
      else if (s === "completed") tab.textContent = `Released (${completed})`;
      else if (s === "in-progress") tab.textContent = `In Progress (${inProgress})`;
      else if (s === "planned") tab.textContent = `Planned (${planned})`;
    });
  }

  // 2. Render badge helper
  function getBadgeHtml(badge) {
    const b = (badge || "").toLowerCase();
    if (b === "released" || b === "live") {
      return `<span class="badge badge-released">Released</span>`;
    }
    if (b === "in progress" || b === "in development" || b === "testing") {
      return `<span class="badge badge-wip">In Progress</span>`;
    }
    return `<span class="badge badge-planned">Planned</span>`;
  }

  // 3. Render phases
  function render() {
    phasesContainer.innerHTML = "";

    data.phases.forEach(phase => {
      const group = document.createElement("section");
      group.className = "phase-group";
      group.id = phase.id;

      const header = document.createElement("div");
      header.className = "phase-header";

      const phaseBadge = phase.status === "completed" 
        ? `<span class="badge badge-released">Done</span>`
        : phase.status === "in-progress"
          ? `<span class="badge badge-wip">In Progress (${phase.completionPercentage}%)</span>`
          : `<span class="badge badge-planned">Planned</span>`;

      header.innerHTML = `
        <div>
          <div class="phase-title-left">
            <span class="phase-num">Phase ${phase.number}</span>
            <h2 class="phase-name">${phase.title}</h2>
          </div>
          <p class="phase-desc">${phase.tagline}</p>
        </div>
        ${phaseBadge}
      `;

      const grid = document.createElement("div");
      grid.className = "feature-grid";

      phase.features.forEach(feat => {
        const card = document.createElement("div");
        card.className = "feature-card";
        card.dataset.status = feat.status;
        card.dataset.search = `${feat.title} ${feat.description} ${feat.category}`.toLowerCase();

        card.innerHTML = `
          <div>
            <div class="card-head">
              <span class="card-category">${feat.category}</span>
              ${getBadgeHtml(feat.badge)}
            </div>
            <h3>${feat.title}</h3>
            <p>${feat.description}</p>
          </div>
        `;
        grid.appendChild(card);
      });

      group.appendChild(header);
      group.appendChild(grid);
      phasesContainer.appendChild(group);
    });
  }

  // 4. Filtering logic
  function filterFeatures() {
    const query = searchQuery.trim().toLowerCase();
    let totalVisible = 0;

    const groups = document.querySelectorAll(".phase-group");

    groups.forEach(group => {
      const cards = group.querySelectorAll(".feature-card");
      let visibleInGroup = 0;

      cards.forEach(card => {
        const statusMatch = currentStatus === "all" || card.dataset.status === currentStatus;
        const searchMatch = !query || card.dataset.search.includes(query);

        if (statusMatch && searchMatch) {
          card.classList.remove("is-hidden");
          visibleInGroup++;
          totalVisible++;
        } else {
          card.classList.add("is-hidden");
        }
      });

      if (visibleInGroup === 0) {
        group.style.display = "none";
      } else {
        group.style.display = "block";
      }
    });

    if (totalVisible === 0) {
      noResults.style.display = "block";
    } else {
      noResults.style.display = "none";
    }
  }

  // Event handlers
  statusTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      statusTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentStatus = tab.dataset.status;
      filterFeatures();
    });
  });

  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    filterFeatures();
  });

  updateStats();
  render();
});
