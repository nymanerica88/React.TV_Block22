//useState lets a functional component have state
//useEffect allows fetching data from an API with a functional component

import { useEffect, useState } from "react";
import "./shows.css";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";

export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  useEffect(() => {
    setSelectedEpisode(null);
  }, [show]);

  if (!show) {
    return (
      <section className="show-details">
        <p>Please select a show to display an episode list.</p>
      </section>
    );
  }

  return (
    <section className="show-details">
      <h2>{show.name}</h2>
      <div className="show-body">
        <EpisodeList
          name={show.name}
          episodes={show.episodes}
          selectedEpisode={selectedEpisode}
          setSelectedEpisode={setSelectedEpisode}
        />
        <EpisodeDetails episode={selectedEpisode} />
      </div>
    </section>
  );
}
