// eslint-disable-next-line
import PropTypes from "prop-types";

const ProjectCard = ({ project }: { project: any }) => {
  const { id, link, name, thumbnail } = project;

  return (
    <div className="event-card p-4 border border-solid border-gray-400 mx-auto w-full">
      <a href={link} target="blank" rel="noopener noreferrer">
        <img className="object-cover w-full" src={thumbnail} />
        <div className="mt-4 h-1/2">
          <p className="text-FCCgray-200 font-Roboto font-extrabold text-lg md:text-2xl">
            {name}
          </p>
        </div>
      </a>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string,
    link: PropTypes.string,
    name: PropTypes.string,
    thumbnail: PropTypes.string,
  }),
};

export default ProjectCard;
