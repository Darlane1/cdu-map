import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <p>Hello World!</p>
    </div>
  );
};


export default ExploreContainer;

