class UserService {
    constructor(dependency) {
        this.dependency = dependency; // Example dependency, e.g., a database client or an API client
    }

    async getUserDetails(req) {
        // Imagine this logic pulls user data from a database
        try{
            return {
                name: req.user?.name,
                age: 'Age',
                office: 'Hyperiinventive',
                from: 'Service Layer',
                token: req.user?.token
            };
        }catch (err){
            return new Error('Invalid data found')
        }
    }

    async getUserName() {
        // Imagine this logic pulls just the name from a database
        return { name: 'Salman' };
    }
}

export default UserService;