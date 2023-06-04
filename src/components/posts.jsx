import React, {Component} from "react";
import PostsTable from "./postsTable";
import Pagination from "./pagination";

class Posts extends Component {
    constructor(props) {
    super(props);
    this.state = {
        error: null,
        isLoaded: false,
        items: [],
        pageSize: 4,
           currentPage: 1
    };
}
//ppddss
componentDidMount() {
    fetch("http://localhost:3001/api/posts")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
                console.log(result)
            },
            
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
}

handlePageChange = (page) => {
    this.setState({currentPage: page});
};

handleDelete = (post) => {
    const posts = this.state.items.filter(p => p.id !== post.id);
    this.setState({items: posts});
 };

 handleDelete = (post) => {
    const posts = this.state.items.filter(p => p.id !== post.id);
    this.setState({items: posts});
 };

render() {
    const {items, pageSize, currentPage} = this.state;


       if (!items.length) {
           return <p>Brak wpisów</p>
       }


    return (
        <React.Fragment>
        <PostsTable
            items={items}
            sortIcon={this.renderSortIcon}
            onDelete={this.handleDelete}
            onSort={this.handleSort}/>
       <Pagination
                   itemsCount={items.length}
                   pageSize={this.state.pageSize}
                   currentPage={this.state.currentPage}
                   onPageChange={this.handlePageChange}
               />

    </React.Fragment>)
    
  }
}

export default Posts;
