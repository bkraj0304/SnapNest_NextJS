// components/MainContent.js
import React from 'react';
import projectsData from '../data/projectsData';
import tagsData from '../data/tagsData';

const MainContent = () => {
  return (
    <main>
      <section className="intro">
        <p className="Greeting">Greetings! We're Wanderlust, delving into travel,<br /> adventures, and exploration.</p>
        <p className="Intro">Introducing a contemporary and polished template for showcasing your travel experiences. Ideal for presenting your trips, stories, and explorations in a professional and captivating manner...</p>
        <a href="#" className="member-button">BECOME A MEMBER</a>
      </section>
      <section className="projects">
        <h2 className="section-title">Latest Adventures</h2>
        {projectsData.reduce((acc, project, index) => {
          if (index % 3 === 0) {
            acc.push([]);
          }
          acc[acc.length - 1].push(project);
          return acc;
        }, []).map((projectRow, rowIndex) => (
          <div key={rowIndex} className="project-grid">
            <div className="project_row">
              {projectRow.map((project, projectIndex) => (
                <div key={projectIndex} className="project-item">
                  <img src={project.imgSrc} alt={project.alt} />
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                  <a href={project.link}>READ MORE</a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      <section className="tags">
        <h2 className="section-title">Popular Tags</h2>
        {tagsData.reduce((acc, tag, index) => {
          if (index % 4 === 0) {
            acc.push([]);
          }
          acc[acc.length - 1].push(tag);
          return acc;
        }, []).map((tagRow, rowIndex) => (
          <div key={rowIndex} className="tag-grid">
            <div className="tag-row">
              {tagRow.map((tag, tagIndex) => (
                <div key={tagIndex} className="tag-item">
                  <img src={tag.imgSrc} alt={tag.alt} />
                  <a href={tag.link}>{tag.name}</a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      <section className="newsletter">
        <h2>Stay in the Loop</h2>
        <p>Get the latest travel stories delivered right to your email.</p>
        <form>
          <input type="email" placeholder="wanderlust@example.com" />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </section>
    </main>
  );
}

export default MainContent;
