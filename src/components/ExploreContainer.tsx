import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
          <p>the cat sat on a mat</p>
      </div>
  );
};


export default ExploreContainer;

