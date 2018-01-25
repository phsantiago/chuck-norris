import { connect } from 'react-redux';
import Fact from '../../components/Fact/Fact.jsx';

const mapStateToProps = state => ({
  children: state.fact.text,
});

export default connect(mapStateToProps, null)(Fact);
