const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];

  /*const toggleUserState = (allUsers, userName, callback) => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );
  
    callback(updatedUsers);
  };
  const logger = updatedUsers => console.table(updatedUsers);
  
    toggleUserState(users, 'Mango', logger);
    toggleUserState(users, 'Ajax', logger);*/

const toggleUserState= (allUsers, userName)=>{    
    return new Promise((resolve, reject)=>{
        const updatedUsers =allUsers.map(user =>
                user.name === userName ? 
                { ...user, active: !user.active } : 
                user,)
                resolve(updatedUsers)  
                reject()             
        });   
}
    
    const logger = updatedUsers => console.table(updatedUsers);

    toggleUserState(users, 'Mango').then(logger);
    toggleUserState(users, 'Lux').then(logger);
    
    
  