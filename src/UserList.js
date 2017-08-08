import React from 'react';
import axios from 'axios';
import User from './User';

class UserList extends React.Component {
  constructor(){
     super();
     this.state = {
       userlist: { users: [], page: 1, pagesize: 6 },
       selectedUsers: []
     }
     this.gerUrl = this.gerUrl.bind(this); 
     this.userSelected = this.userSelected.bind(this);
     this.paginationClickHandler = this.paginationClickHandler.bind(this);
  }
  gerUrl(page){
     var page = page || this.state.userlist.page;
     var pagesize = this.state.userlist.pagesize;
     var URL = 'https://randomuser.me/api/?page='+page+'&results='+pagesize+'&seed=abc';
     
     return URL;
  }
  componentDidMount(){ 
    var URL = this.gerUrl();
    axios.get(URL).then((result)=>{
       this.setState({  userlist: {users: result.data.results, page: 1, pagesize: 6}  });
    })
  }
  userSelected(user){
    var selectedUsers = this.state.selectedUsers;
    selectedUsers.push(user);
    this.setState({selectedUsers: selectedUsers});
    console.log(this.state.selectedUsers);
  }

  paginationClickHandler(e){
    var page = this.state.userlist.page;
    if(e.target.id == 'prev'){
      if(page>1){
        var URL = this.gerUrl(page-1);    
        axios.get(URL).then((result)=>{
          this.setState({  userlist: {users: result.data.results, page: page-1, pagesize: 6}  });
        })  
      }
    }
    if(e.target.id == 'next'){
        var URL = this.gerUrl(page+1);    
        axios.get(URL).then((result)=>{
          this.setState({  userlist: {users: result.data.results, page: page+1, pagesize: 6}  });
        }) 
    }
  }
  render() {
      if(this.state.userlist.users.length === 0){
        return(<h1>Loading...</h1>);
      }
      return (
        <div>
          {
            this.state.userlist.users.map( (item, i)=>{
              return <div key={i}>
                <User user={item} userSelected={this.userSelected}/>
              </div>
            })
          }
          <div>
            <button onClick={this.paginationClickHandler} className="btn" id="prev">&#x276C;&#x276C; Prev</button> &nbsp; 
            <button onClick={this.paginationClickHandler} className="btn" id="next">Next &#x276D;&#x276D;</button>
          </div>    
        </div> 
      );
  }
}

export default UserList;