import React, {Component} from 'react';
import { FaSearch } from 'react-icons/fa';

class Search extends Component{

    render(){
        return ( 
                    <div class="search">
                        <button type="submit" class="search-button">
                            <FaSearch/>
                        </button>
                        <input type="text" class="search-input" placeholder="search messages"/>
                        
                    </div>
        );
        }
}

export default Search;
