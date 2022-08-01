import bcrypt from 'bcryptjs'
const users =[
    {
        name:'Admin user',
        email:'admin2@myshop.com',
        password:bcrypt.hashSync('12345'),
        isadmin:true
    },
    {
        name:'fred Meyer',
        email:'fred@myshop.com',
        password:bcrypt.hashSync('12354')
    },
    {
        name:'Wilma',
        email:'wilma@myshop.com',
        password:bcrypt.hashSync('12445')
    },
]
export default users