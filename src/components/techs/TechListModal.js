import React, { useEffect /* , useState  */ } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TechItem from "./TechItem";
import { getTechs } from "../../actions/techActions";

/** video 88 - finalzinho */
const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  /*   const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false); */

  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);
  //console.log("aqui");
  /*   const getTechs = async () => {
    setLoading(true);
    //api de busca
    const res = await fetch("/techs");
    const data = await res.json();

    setTechs(data);
    setLoading(false);
  }; */
  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Lista de Técnicos</h4>
        <ul className="collection">
          {!loading &&
            techs !== null &&
            techs.map((tech) => (
              /* <li className="collection-item">{tech.firstName}</li> */
              <TechItem tech={tech} key={tech.id} />
            ))}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
