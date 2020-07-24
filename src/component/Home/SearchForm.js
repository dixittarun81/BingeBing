import React, { Component } from 'react';
import {connect} from 'react-redux';

import {searchMovie} from '../actions';

 class SearchForm extends Component {

    onChange = (e) => {
        //console.log(e.target.value)
        this.props.searchMovie(e.target.value)
    }
    render() {
        return (
            <div className="jumbotron jumbotron-fluid mt-5 text-center" style={{marginLeft: 15 + '%', marginRight: 15 + '%'}}>
                <div className="container">
                    <h1 className="display-4 mb-3">
                        <i className="fa fa-search"/> Search for a movie, TV series...
                    </h1>
                    <form>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search Movies, TV series"
                            onChange = {this.onChange}
                        />
                        <button type="submit" className="btn btn-primary mt-3">
                            Search
                        </button>
                    </form>

                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        text: state.movies.text
    }
};


export default connect(mapStateToProps, {searchMovie})(SearchForm);




