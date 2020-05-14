import React, {Component} from 'react';
import Axios from 'axios';
import Loader from '../loading'
import ErrorAlert from '../error'
import TableRows from './table-rows'

class Table extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: [],
            count: 0,
            isLoading: true,
            error: "",
            search: "", 
            directionOfSort: 'descending'
        }
        this.sortBy = this.sortBy.bind(this)
    }
}

componentDidMount() {
    Axios
    
    .get('https://randomuser.me/api/?seed=employee&results=30&nat=us')
    .then(res => {
        this.ListeningStateChangedEvent({
            data: res.data.results,
            count: res.data.results.length,
            isLoading: false, 
            error: err.message
        })
    })
}