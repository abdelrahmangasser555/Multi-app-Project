export default function RoadMap({ steps }) {
  const mySteps = steps[0]?.steps;
  const myResources = steps[0]?.resources;
  const myLearned = steps[0]?.learned;
  return (
    <div className="road-map">
      <h1>My Road Map</h1>
      <div className="road-map-steps">
        <h2>Steps</h2>
        <ol>
          {mySteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
      <div className="road-map-resources">
        <h2>Resources</h2>
        <ul>
          {myResources.map((resource, index) => (
            <li key={index}>{resource.link}</li>
          ))}
        </ul>
      </div>
      <div className="road-map-learned">
        <h2>Learned</h2>
        <p>
          {myLearned || "I haven't learned anything yet. I'm still learning."}
        </p>
      </div>
    </div>
  );
}
