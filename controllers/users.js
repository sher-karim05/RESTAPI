import router from "../routes/users";

export const createUser = (req,res) =>
    (req, res)=>{

        //user.push();
        const user = req.body;
        users.push(user);
       const userId =  uuidv4();  
       const userWithId = { ...user, id: userId}
        users.push({...user, id:uuidv4()})
         console.log('Route Reached')
         console.log(req.body)
        res.send(`User name ${user.firstName, user.lastName} has been added to the database successfully! `)
        router.post('/', userUser); 
}

export const  getUser = ('/', (req, res)=>{
    res.send(users)
});

export const  getUser = (req,res)=>{
    const {id} = req.params;
    const foundUser = users.find(( user) => user.id === id)
    res.send(foundUser);

} 

export const  updateUser = (req, res)=>{
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user)=> user.id === id)

    if(firstName)user.firstName = firstName
    if(lastName)user.lastName = lastName
    if(age)user.age = age
    res.send(`User with the id ${user.id}has been updated successfully!`)
}

export const deleteUser = (req, res)=>{
    const { id } = req.params;
    users = users.filter((user)=> user.id !==id);
    res.send(`A user is deleted form database succcessfuly!`)
}
