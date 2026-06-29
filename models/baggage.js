import { Schema, model } from "mongoose";

const BaggageSchema = new Schema(
    {
        name:{
            type:String,
            require: true,
            trim: true,
        },
        completed:{
            type:Boolean,
            default:false,
        },
        user:{
            type:Schema.Types.ObjectId,
            ref: "User",
            require:true,
        },

        trip:{
            type: Schema.Types.ObjectId,
            ref:"Trip",
            require: true,
        }

    },
    {timestamps: true,}
);

const Baggage = model("Baggage", BaggageSchema);
export default Baggage;
