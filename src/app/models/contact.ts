import mongoose, { Schema, Document } from "mongoose";


export interface IContact extends Document {
    name: string;
    email: string;
    message: string;
    createdAt: Date;
    updatedAt: Date;
}

const contactSchema: Schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Contact = mongoose.models.Contact || mongoose.model<IContact>('Contact', contactSchema)
 
export default Contact;
