import { connect } from 'react-redux';
import Categories from '../../components/Categories/Categories.jsx';
import { setTheme, fetchCategories } from '../../redux/modules/categories';

const mapDispatchToProps = dispatch => ({
  onChoose: choosen => dispatch(setTheme(choosen)),
  fetchCategories: () => dispatch(fetchCategories()),
});

const mapStateToProps = state => ({
  list: state.categories.list,
  choosen: state.categories.theme,
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);

