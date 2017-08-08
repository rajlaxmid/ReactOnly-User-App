import React from 'react';

import SelectedUsersList from './SelectedUsersList'; 
import UserList from './UserList';

class Application extends React.Component {
   
   constructor(props){
   		super(props);

   }
    

   render() {
   	console.log('render method called');
   	var title= "this is my page title";
      return (
      	<div className="container">
			<SelectedUsersList />
			<UserList />
        </div> 

      );
   }
}

Application.defaultProps = {
		
}

export default Application;