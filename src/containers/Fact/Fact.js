import { connect } from 'react-redux';
import Fact from '../../components/Fact/Fact.jsx';
import { fetchFact } from '../../redux/modules/fact';

const mapDispatchToProps = dispatch => ({
  fetchFact: () => dispatch(fetchFact()),
});

const mapStateToProps = state => ({
  list: state.categories.list,
});

export default connect(mapStateToProps, mapDispatchToProps)(Fact);
