import User from '../models/user.js'

export const create = async(data) =>{
    const user = await User.create(data);
    const {password, ...UserWithoutPassword} = user.toObject();
    return UserWithoutPassword;
}