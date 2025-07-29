import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            match: [/^[a-zA-Z0-9._%+-]+@gmail\.com$/, 'Only Gmail addresses are allowed'],

            
        },

        password: {
            type: String,
            required: true,
            minlength: 6,
        },
    },
    { timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;