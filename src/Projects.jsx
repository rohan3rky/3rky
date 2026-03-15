import React, { useEffect, useState } from "react";
import "./Projects.css";

const VIDEOS = [
  { id: "vqGgHdAMB4I", title: "A Day in My Life When I was college Student" },
  { id: "M8M7sz6T7Ok", title: "Budget Trip to Pondicherry" },
  { id: "XByaZ9wwIU0", title: "IRCTC Surpized Us #irctc" },
  { id: "PsisMBFVocw", title: "MY FIRST SOLO TRAVEL |HAMPI| #hampi #vlogs" },
  { id: "s7cuaEHW3XU", title: "How we celebrated his birthday At college" },
  { id: "G2D4RyZQUFg", title: "YARO KI YARIYAAN | HEAVEN" },
  { id: "l1E2ThV5PM0", title: "TU CHEZZ BADI HAI MAST MAST" },
  { id: "wABrwwxneio", title: "First Vlog of 2023 | #myfirstvlog | S2 Ep1 " },
  { id: "lsBFUsXM73w", title: "Asking Vitian's | Worst thing about VIT | #vit" }
];

function getThumbnailUrl(id) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

export default function Projects() {
  const [activeVideo, setActiveVideo] = useState(null);

  const openModal = (id) => setActiveVideo(id);
  const closeModal = () => setActiveVideo(null);

  useEffect(() => {
    if (!activeVideo) return;
    const handler = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeVideo]);

  // Hide navbar when modal open
  useEffect(() => {
    const body = document.body;
    if (activeVideo) {
      body.classList.add("modal-open");
    } else {
      body.classList.remove("modal-open");
    }
    return () => body.classList.remove("modal-open");
  }, [activeVideo]);

  return (
    <section id="work" className="projects" aria-label="Projects">
      <div className="container">
        <h2 className="section-title">Videos</h2>

        <div className="projects-grid" role="list">
          {VIDEOS.map((v) => (
            <article
              key={v.id}
              className="project-card"
              role="listitem"
              tabIndex={0}
              onClick={() => openModal(v.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openModal(v.id);
              }}
              aria-label={`Play ${v.title}`}
            >
              <div className="project-media" aria-hidden="true">
                <img
                  src={getThumbnailUrl(v.id)}
                  alt={`${v.title} thumbnail`}
                  loading="lazy"
                />
              </div>

              <div className="project-body">
                <h3 className="project-title">{v.title}</h3>

                <p className="muted"></p>

                <div className="project-meta">
                  <button
                    type="button"
                    className="link-open"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(v.id);
                    }}
                    aria-label={`Open ${v.title}`}
                  >
                    YouTube
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div
          className="video-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
          onClick={closeModal}
        >
          <div className="video-chrome">
            <button
              type="button"
              className="video-close"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              aria-label="Close video"
            >
              ×
            </button>
          </div>
          <div
            className="video-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              title="YouTube player"
              src={`https://www.youtube-nocookie.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
